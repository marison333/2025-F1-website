import { test, expect } from '@playwright/test';

// @TODO: add test for navigating to driver/team profile from driver carousel & standings
// @TODO: Add test for navigating to the drivers/teams standings pages

const tabs = [
    {
        name: 'driver',
        headers: ['pos.', 'driver', 'nationality', 'team', 'pts.'],
        expectedRows: 20,
        placeCardSuffix: '-place-driver-card'
    },
    {
        name: 'team',
        headers: ['pos.', 'team', 'pts.'],
        expectedRows: 10,
        placeCardSuffix: '-place-team-card'
    }
];

test.describe('Home Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle('Formula 1 Vaulted');
    });

    test('Hero Section', async ({ page }) => {
        const hero = page.locator('[data-slot="hero"]');

        await hero.isVisible();
        await expect(hero.getByRole('link')).toHaveCount(2);
        await expect(hero.getByRole('img')).toHaveCount(2);

        await expect(hero.locator('div span').first()).toHaveText('Find all 2025 drivers');
        await expect(hero.locator('div span').nth(1)).toHaveText('Find all 2025 results');
    });

    test('Bento grid section', async ({ page }) => {
        const bentoGrid = page.locator('[data-slot="bento-grid"]');

        await bentoGrid.isVisible();
        await expect(bentoGrid.getByRole('link')).toHaveCount(4);
        await expect(bentoGrid.getByRole('img')).toHaveCount(6);
    });

    test('Driver carousel section', async ({ page }) => {
        const driverCarousel = page.locator('[data-slot="carousel"]');
        const driverCarouselContent = page.locator('[data-slot="carousel-content"]');
        const driverCarouselButtonNext = page.locator('[data-slot="carousel-previous"]');
        const driverCarouselButtonPrevious = page.locator('[data-slot="carousel-previous"]');

        await driverCarousel.isVisible();
        driverCarousel.getByRole('heading', { name: 'drivers' });

        await driverCarouselContent.isVisible();
        await expect(driverCarouselContent.getByRole('link')).toHaveCount(20);

        await page.locator('[data-slot="carousel-previous"]').isVisible();
        await page.locator('[data-slot="carousel-previous"]').isDisabled();

        await page.locator('[data-slot="carousel-next"]').isVisible();
        while (await driverCarouselButtonNext.isEnabled()) {
            await driverCarouselButtonNext.click();
        }
        await expect(driverCarouselButtonNext).toBeDisabled();

        while (await driverCarouselButtonPrevious.isEnabled()) {
            await driverCarouselButtonPrevious.click();
        }
        await expect(driverCarouselButtonPrevious).toBeDisabled();

        // @TODO: add test for navigating to driver/team profile from driver carousel & standings
    });

    // @TODO: add test for navigating to driver/team profile from driver carousel & standings
    for (const { name, headers, expectedRows, placeCardSuffix } of tabs) {
        test(`${name} standings tab`, async ({ page }) => {
            const standings = page.locator('[data-slot="standings"]');
            const standingsTablist = page.locator('[role="tablist"]');

            await expect(standings).toBeVisible();
            await expect(standings.getByRole('heading', { name: '2025 season' })).toBeVisible();
            await expect(standingsTablist).toBeVisible();

            await standingsTablist.getByRole('tab', { name: `${name}s` }).click();
            await expect(standingsTablist.getByRole('tab', { name: `${name}s` })).toHaveAttribute(
                'aria-selected',
                'true'
            );

            await expect(standings.locator(`[data-slot$='${placeCardSuffix}']`)).toHaveCount(3);

            await expect(standings.getByRole('table')).toBeVisible();
            for (const header of headers) {
                await expect(standings.locator('thead').getByText(header)).toBeVisible();
            }
            await expect(standings.locator('tbody tr')).toHaveCount(expectedRows);

            await expect(standings.getByRole('link', { name: 'view standings' })).toBeVisible();
            // @TODO: Add test for navigating to the drivers/teams standings pages
        });
    }

    test('Feedback dummy CTA section', async ({ page }) => {
        const feedback = page.locator('[data-slot="feedback"]');
        const dialog = page.getByRole('dialog');

        await feedback.isVisible();
        await expect(
            feedback.getByRole('heading', { name: 'help shape the f1 vaulted website' })
        ).toBeVisible();
        await expect(feedback.getByRole('paragraph')).toBeVisible();

        await expect(feedback.getByRole('button', { name: 'open dialog' })).toBeVisible();
        await feedback.getByRole('button', { name: 'open dialog' }).click();

        await expect(dialog).toBeVisible();
        await dialog.getByRole('heading', { name: 'Give your feedback' }).isVisible();
        await dialog.getByRole('textbox').isVisible();
        await dialog.getByRole('button', { name: 'send feedback' }).isVisible();
        await dialog.getByRole('button', { name: 'cancel' }).isVisible();
        await dialog.getByRole('button', { name: 'cancel' }).click();
        await expect(dialog).toBeHidden();
    });
});
