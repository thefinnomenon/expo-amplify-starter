import { Auth } from 'aws-amplify';
import * as Random from 'expo-random';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { passwordKey } from '@/utilities/localStorage';

async function isLoggedIn() {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch {
    return false;
  }
}

export async function logout(): Promise<void> {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

const generatePassword = async () => {
  const bytes = await Random.getRandomBytesAsync(48);
  /* @ts-ignore */
  return Array.prototype.map
    .call(new Uint8Array(bytes), x => `00${x.toString(16)}`.slice(-2))
    .join('')
    .match(/[a-fA-F0-9]{2}/g)
    .reverse()
    .join('');
};

// In order to simulate passwordless mobile login we
// have to do the following steps,
// 1. Format the number '+##########'
// 2. Generate a random password
// 3. If new user sign-up is successful, store password
//    to be used later in verification
// 4. If user exists, send password reset verification
// 5. If password reset fails, user never completed
//    initial verification, resend sign-up SMS
// Continued in passwordlessMobileLoginVerify
export const passwordlessMobileLogin = async (countryCode: string, number: string): Promise<string> => {
  // 1 & 2
  const mobile = `+${countryCode}${number}`;
  const password = await generatePassword();
  console.log(mobile);

  // 3. Regular Sign Up
  try {
    console.log('Attempting user sign-up');
    await Auth.signUp(mobile, password);
    await AsyncStorage.setItem(passwordKey, password);
  } catch (error) {
    // 4. Forgot Password
    if (error.code === 'UsernameExistsException') {
      console.log('User exists. attempting to send password reset SMS');
      try {
        await Auth.forgotPassword(mobile);
      } catch (error2) {
        console.log('User never finished verification, resending sign-up SMS');
        // 5. Resend Sign Up Verification
        if (error2.code === 'InvalidParameterException') {
          try {
            await Auth.resendSignUp(mobile);
          } catch (error3) {
            console.log('Resend Sign Up Failed');
            throw error3;
          }
        } else {
          throw error2;
        }
      }
    } else {
      throw error;
    }
  }

  return mobile;
};

// 6.  Try to retrieve stored password
// 7.  If password exists, this is the normal sign-up flow,
//     verify with code and delete password from storage
// 8.  If the password doesn't exist, we are in the forgot
//     password flow, generate and set new password
// 9.  Sign-in
export const passwordlessMobileLoginVerify = async (mobile: string, code: string): Promise<void> => {
  try {
    // 6: Attempt to retrieve password
    let password = await AsyncStorage.getItem(passwordKey);
    console.log(`Passwordless login: ${mobile}, ${password}, ${code}`);
    if (password) {
      // 7: Normal sign-up verification
      await Auth.confirmSignUp(mobile, code);
      console.log(`Confirmed ${mobile} with code: ${code}`);
      await AsyncStorage.removeItem(passwordKey);
    } else {
      // 8: Forgot password, generate and set password
      password = await generatePassword();
      await Auth.forgotPasswordSubmit(mobile, code, password);
      console.log(`Set new password for ${mobile} with code: ${code}`);
    }
    // 9: Sign-in
    const user = await Auth.signIn(mobile, password);
    console.log('Sign In Successful');
    console.log(user);
  } catch (error) {
    switch (error) {
      case 'CodeMismatchException':
        throw Error('Incorrect code. Please try again.');
      default:
        throw Error('Failed to verify code. Please try again.');
    }
  }
};

// Try to send sign up comfirmation and if user is already
// verified, we are in the forgot password flow so we need
// to resend forgot password verification instead.
export const resendConfirmationCode = async (mobile: string): Promise<void> => {
  try {
    await Auth.resendSignUp(mobile);
  } catch (error) {
    console.log(error);
    if (error.message === 'User is already confirmed.') {
      try {
        await Auth.forgotPassword(mobile);
      } catch (error2) {
        console.log(error2);
        throw Error('Failed to resend verification code.');
      }
    } else {
      throw Error('Failed to resend verification code.');
    }
  }
};

export default passwordlessMobileLogin;
