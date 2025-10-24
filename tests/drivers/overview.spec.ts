import { test, expect } from '@playwright/test';

import { driverNames } from '../constants/names';

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

        const sortedExpectedDrivers = [...driverNames].sort();

        const firstNames = await driverCard
            .locator('[data-testid="driver-name"] > *:first-child')
            .allTextContents();
        const lastNames = await driverCard
            .locator('[data-testid="driver-name"] > *:last-child')
            .allTextContents();
        const displayedDrivers = firstNames.map(
            (first, i) => `${first.toLowerCase()} ${lastNames[i].toLowerCase()}`
        );
        const sortedDisplayedDrivers = displayedDrivers.sort();

        expect(sortedDisplayedDrivers).toEqual(sortedExpectedDrivers);

        for (const expectedDriverName of driverNames) {
            const [firstName, lastName] = expectedDriverName.split(' ');

            const specificDriverCard = driverCard.filter({
                has: page.locator('[data-testid="driver-name"]', {
                    hasText: new RegExp(`${firstName}.*${lastName}|${lastName}.*${firstName}`, 'i')
                })
            });

            await specificDriverCard.click();
            await expect(page).toHaveURL(
                new RegExp(`.*/drivers/${encodeURIComponent(expectedDriverName.replace(' ', '-'))}`)
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
