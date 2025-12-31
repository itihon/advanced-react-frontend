import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import '@testing-library/jest-dom/jest-globals';

describe('ThemeSwitcher', () => {
  test('render', () => {
    const themeSwitcher = render(<ThemeSwitcher />).asFragment().firstChild as HTMLElement;

    expect(themeSwitcher).toHaveClass('ThemeSwitcher');
  });
});