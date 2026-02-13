import { test, expect } from '@playwright/test';
import type IndexJSON from '../config/storybook/types';

const STORYBOOK_URL = process.env.STORYBOOK_URL || 'http://localhost:6006';

const indexJsonUrl = `${STORYBOOK_URL}/index.json`;
const iframeUrl = `${STORYBOOK_URL}/iframe.html?viewMode=story&id=`;

const appContainerSelector = "#storybook-root .app";
const componentSelector = `${appContainerSelector} > *`;
const componentMargin = 8;

test('screenshot test', async ({ page }) => {
  test.setTimeout(300_000);

  const storiesJson = await page.request.get(indexJsonUrl);
  const storiesIndex: IndexJSON = await storiesJson.json();

  const stories = Object.values(storiesIndex.entries).filter(
    story => story.type === 'story',
  );

  for (const story of stories) {
    const storyUrl = `${iframeUrl}${story.id}`;

    try {
      await page.goto(storyUrl, { waitUntil: 'load' });
    }
    catch (err) {
      console.error('Cannot load', storyUrl, err);
      continue;
    }

    await page.waitForSelector(appContainerSelector);

    const componentBounds = await page.locator(componentSelector).boundingBox();

    if (!componentBounds) throw new Error('Cannot obtain component bounds');

    const clip = {
      x: componentBounds.x - componentMargin,
      y: componentBounds.y - componentMargin,
      width: componentBounds.width + componentMargin * 2,
      height: componentBounds.height + componentMargin * 2,
    };

    await expect(page).toHaveScreenshot(
      `${story.id}.png`, 
      { fullPage: true, animations: 'disabled', clip },
    );
  }
});