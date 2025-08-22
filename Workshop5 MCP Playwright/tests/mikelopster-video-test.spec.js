const { test, expect } = require('@playwright/test');

test.describe('Mikelopster.dev Video Section Tests', () => {
  test('should display exactly 12 videos in the video section', async ({ page }) => {
    // Navigate to mikelopster.dev
    await page.goto('https://mikelopster.dev');
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    
    // Find all YouTube video links on the page
    const youtubeLinks = page.locator('a[href*="youtube.com/watch"]');
    
    // Count the number of video links
    const videoCount = await youtubeLinks.count();
    
    // Verify exactly 12 videos are displayed
    expect(videoCount).toBe(12);
    
    // Additional verification: check that each video link is visible
    for (let i = 0; i < videoCount; i++) {
      await expect(youtubeLinks.nth(i)).toBeVisible();
    }
  });

  test('should verify video section structure and content', async ({ page }) => {
    await page.goto('https://mikelopster.dev');
    await page.waitForLoadState('networkidle');
    
    // Check that the Videos heading exists
    const videosHeading = page.locator('h3:has-text("Videos")');
    await expect(videosHeading).toBeVisible();
    
    // Verify the video count display shows "153"
    const videoCountDisplay = page.locator('text="153"');
    await expect(videoCountDisplay).toBeVisible();
    
    // Check that YouTube channel link exists
    const youtubeChannelLink = page.locator('a[href*="youtube.com/@mikelopster"]');
    await expect(youtubeChannelLink).toBeVisible();
  });

  test('should verify individual video elements have required properties', async ({ page }) => {
    await page.goto('https://mikelopster.dev');
    await page.waitForLoadState('networkidle');
    
    const videoLinks = page.locator('a[href*="youtube.com/watch"]');
    const firstVideo = videoLinks.first();
    
    // Check that the first video has a title
    const videoTitle = firstVideo.locator('h3');
    await expect(videoTitle).toBeVisible();
    
    // Check that the first video has an image
    const videoImage = firstVideo.locator('img');
    await expect(videoImage).toBeVisible();
    
    // Check that the first video has a valid YouTube URL
    const href = await firstVideo.getAttribute('href');
    expect(href).toContain('youtube.com/watch?v=');
  });
});
