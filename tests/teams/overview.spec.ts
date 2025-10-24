import { test, expect } from '@playwright/test';

import { teamNames, driverNames } from '../constants/names';

test.describe('Teams Overview Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');

        const bentoGrid = page.locator('[data-slot="bento-grid"]');
        await expect(bentoGrid).toBeVisible();

        await bentoGrid.getByRole('link', { name: 'teams' }).click();
        await expect(page).toHaveURL(/.*\/teams/);
    });

    test('should display the correct page title and header', async ({ page }) => {
        await expect(page).toHaveTitle(/Teams/);
        await expect(page.getByRole('heading', { name: 'f1 teams 2025' })).toBeVisible();
    });

    test('should display all teams with correct information', async ({ page }) => {
        const teamCards = page.locator('[data-slot="team-card"]');
        await expect(teamCards).toHaveCount(teamNames.length);

        for (let i = 0; i < teamNames.length; i++) {
            const card = teamCards.nth(i);
            await expect(card).toBeVisible();

            const teamHeading = card.getByRole('heading', { level: 3 });
            await expect(teamHeading).toHaveText(teamNames[i]);

            const driversContainer = card.getByTestId('team-drivers');
            await expect(driversContainer).toBeVisible();

            const driverElements = driversContainer.locator('span');

            for (let j = 0; j < (await driverElements.count()); j++) {
                const givenName = await driverElements.locator('span').first().textContent();
                const familyName = await driverElements.locator('span').nth(1).textContent();
                const fullName = `${givenName?.toLowerCase()} ${familyName?.toLowerCase()}`;

                expect(driverNames).toContain(fullName);
            }
        }
    });

    test('should navigate to team detail page when clicking on a team card', async ({ page }) => {
        const teamCards = page.locator('[data-slot="team-card"]');

        for (let i = 0; i < teamNames.length; i++) {
            const expectedSlug = teamNames[i].toLowerCase().replace(/\s+/g, '-');

            await teamCards.nth(i).click();
            await expect(page).toHaveURL(new RegExp(`/teams/${escapeRegex(expectedSlug)}`));

            await page.goBack();
            await expect(teamCards).toHaveCount(teamNames.length);
        }
    });

    test('should display driver banner with working link', async ({ page }) => {
        const driverBanner = page.locator('[data-slot="driver-banner"]');

        await expect(driverBanner).toBeVisible();
        await expect(driverBanner.getByRole('heading', { name: '2025 f1 drivers' })).toBeVisible();

        await driverBanner.getByRole('link', { name: 'view drivers' }).click();
        await expect(page).toHaveURL(/.*\/drivers/);
    });
});

function escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
