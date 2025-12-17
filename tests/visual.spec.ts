import { test, expect } from '@playwright/test';
import type IndexJSON from '../config/storybook/types';

const STORYBOOK_URL = process.env.STORYBOOK_URL || 'http://localhost:6006';

const indexJsonUrl = `${STORYBOOK_URL}/index.json`;
const iframeUrl = `${STORYBOOK_URL}/iframe.html?viewMode=story&id=`;

test('screenshot test', async ({ page }) => {
  const storiesJson = await page.request.get(indexJsonUrl);
  const storiesIndex: IndexJSON = await storiesJson.json();

  const stories = Object.values(storiesIndex.entries).filter(
    story => story.type === 'story',
  );

  for (const story of stories) {
    const storyUrl = `${iframeUrl}${story.id}`;

    console.log('fetching:', storyUrl);

    await page.goto(storyUrl);
    await page.waitForSelector("#storybook-root");
    await page.waitForLoadState("domcontentloaded");
    await expect(page).toHaveScreenshot(
      `${story.id}.png`, 
      { fullPage: true, animations: 'disabled' },
    );
  }
});