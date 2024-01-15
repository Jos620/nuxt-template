import { expect, test } from '@playwright/test';

test('Title', async ({ page }) => {
  await page.goto('/');

  const title = page.getByRole('heading');
  await expect(title).toHaveText('Nuxt Template');
});

test('Counter', async ({ page }) => {
  await page.goto('/');

  const button = page.getByRole('button');
  await button.click();

  await expect(button).toHaveText('1');

  await button.click();
  await button.click();

  await expect(button).toHaveText('3');
});

test('GitHub link', async ({ page }) => {
  await page.goto('/');

  const link = page.getByRole('link');
  await expect(link).toHaveAttribute('href');

  const href = await link.getAttribute('href');
  expect(href).toContain('github.com');
});
