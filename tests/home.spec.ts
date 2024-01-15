import { expect, test } from '@playwright/test';

test('Counter', async ({ page }) => {
  await page.goto('/');

  const button = page.getByRole('button');
  await button.click();

  expect(button).toHaveText('1');

  await button.click();
  await button.click();

  expect(button).toHaveText('3');
});
