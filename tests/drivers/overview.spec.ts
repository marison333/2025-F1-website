import { test, expect } from '@playwright/test';

import { driverNames } from '../constants';

// @TODO: make driver card test little looser to avoid flase negatives when driver names change or are not in the same order

test.describe('Drivers Overview Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await expect(page.getByRole('link', { name: 'Find all 2025 drivers' })).toBeVisible();
        await page.getByRole('link', { name: 'Find all 2025 drivers' }).click();
        await expect(page).toHaveURL(/.*\/drivers/);
    });

    test('Should display the correct page title and header', async ({ page }) => {
        await expect(page).toHaveTitle(/Drivers 2025/);
        await expect(page.getByRole('heading', { name: 'drivers 2025' })).toBeVisible();
    });

    test('All driver cards are displayed and functional', async ({ page }) => {
        const driverCard = page.locator('[data-slot="driver-card"]');
        await expect(driverCard).toHaveCount(driverNames.length);

        for (let i = 0; i < driverNames.length; i++) {
            const driverName = driverCard.nth(i).getByTestId('driver-name');
            const [firstName, lastName] = driverNames[i].split(' ');

            await expect(driverName).toContainText(firstName, { ignoreCase: true });
            await expect(driverName).toContainText(lastName, { ignoreCase: true });

            await driverCard.nth(i).click();
            await expect(page).toHaveURL(
                new RegExp(`.*/drivers/${encodeURIComponent(driverNames[i].replace(' ', '-'))}`)
            );
            await page.goBack();
        }
    });

    test('Banner is displayed and has a working link', async ({ page }) => {
        await page.locator('[data-slot="teams-banner"]').isVisible();
        await page
            .locator('[data-slot="teams-banner"]')
            .getByRole('heading', { name: 'f1 teams 2025' })
            .isVisible();
        await page
            .locator('[data-slot="teams-banner"]')
            .getByRole('paragraph', {
                name: "Check out this season's official F1 line-up by following your favourite F1 teams on and off the track."
            })
            .isVisible();
        await page.locator('[data-slot="teams-banner"]').getByRole('link').isVisible();
        await page.locator('[data-slot="teams-banner"]').getByRole('link').click();
    });
});
