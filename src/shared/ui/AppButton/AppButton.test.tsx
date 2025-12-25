import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import AppButton from 'shared/ui/AppButton/AppButton';
import '@testing-library/jest-dom/jest-globals';

describe('AppButton', () => {
  test('render', () => {
    render(<AppButton>TEST</AppButton>);
    const button = screen.getByText('TEST');

    expect(button).toHaveClass('AppButton');
  });

  test('with additional class name', () => {
    const className = 'Foo';

    render(<AppButton className={className}>TEST</AppButton>);
    expect(screen.getByText('TEST')).toHaveClass(className);
  });
});