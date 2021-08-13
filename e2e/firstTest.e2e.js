/* eslint-env detox/detox, jest */

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('2 text nodes', async () => {
    await expect(element(by.label('Text')).atIndex(0)).toBeVisible();
    await expect(element(by.label('Text')).atIndex(1)).toBeVisible();
  });
});
