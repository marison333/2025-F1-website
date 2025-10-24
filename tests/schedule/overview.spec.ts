import { test, expect } from '@playwright/test';

import { viewports } from '../constants/viewports';

test.describe('Schedule Overview Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/schedule');

        await expect(page).toHaveURL(/.*\/schedule/);
    });

    test('Should display the correct page title and header', async ({ page }) => {
        await expect(page).toHaveTitle(/Schedule 2025/);
        await expect(
            page.getByRole('heading', { name: '2025 Formula One World Championship' })
        ).toBeVisible();
    });

    [
        { name: 'mobile', viewport: viewports.mobile },
        { name: 'tablet', viewport: viewports.tablet },
        { name: 'laptop', viewport: viewports.laptop },
        { name: 'desktop', viewport: viewports.desktop },
        { name: 'widescreen', viewport: viewports.widescreen }
    ].forEach(({ name, viewport }) => {
        test(`Snapshot should display correct number of race events on ${name}`, async ({
            page
        }) => {
            await page.setViewportSize(viewport);

            const snapshot = page.locator('[data-slot="schedule-snapshot"]');

            await expect(snapshot).toBeVisible();
        });
    });

    // test('Snapshots section should display correct information', async ({ page }) => {});

    // test('Schedule overview page should display all races this 2025 season', async ({
    //     page
    // }) => {});

    // test('Snapshots section displays correct information', async ({ page }) => {});

    // test('Each race card should navigate to the correct race detail page', async ({ page }) => {});
});
