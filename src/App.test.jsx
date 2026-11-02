import React from 'react';
import { afterEach, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';
afterEach(() => { cleanup(); window.history.replaceState({}, '', '/'); });
test('corrected counter displays zero, increments repeatedly, and resets', async () => {
  const user = userEvent.setup();
  render(<App />);
  expect(screen.getByText('Current count: 0')).toBeTruthy();
  for (let i = 0; i < 3; i++) await user.click(screen.getByRole('button', { name: 'Increase count' }));
  expect(screen.getByText('Current count: 3')).toBeTruthy();
  await user.click(screen.getByRole('button', { name: 'Reset count' }));
  expect(screen.getByText('Current count: 0')).toBeTruthy();
});
test('buggy example reproduces missing number before and after click', async () => {
  window.history.replaceState({}, '', '/?mode=buggy');
  const user = userEvent.setup();
  render(<App />);
  expect(screen.getByText('Current count:')).toBeTruthy();
  await user.click(screen.getByRole('button', { name: 'Increase count' }));
  expect(screen.getByText('Current count:')).toBeTruthy();
});
