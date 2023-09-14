import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Help from '.';

describe('Help Component', () => {
  beforeEach(() => {
    render(<Help />);
  });

  afterEach(() => {
    cleanup();
  });

  it('displays the How to Play heading', () => {
    const howToPlayHeading = screen.getByRole('heading', { level: 2 });
    expect(howToPlayHeading).toBeInTheDocument();
    expect(howToPlayHeading).toHaveTextContent('How to Play');
  });

  it('displays the Objective heading', () => {
    const objectiveHeading = screen.getByRole('heading', { level: 3, name: 'Objective' });
    expect(objectiveHeading).toBeInTheDocument();
  });

  it('displays the Gameplay heading', () => {
    const gameplayHeading = screen.getByRole('heading', { level: 3, name: 'Gameplay' });
    expect(gameplayHeading).toBeInTheDocument();
  });

  it('displays the Debugging heading', () => {
    const debuggingHeading = screen.getByRole('heading', { level: 3, name: 'Debugging' });
    expect(debuggingHeading).toBeInTheDocument();
  });

  it('displays the Endless Survival heading', () => {
    const endlessSurvivalHeading = screen.getByRole('heading', { level: 3, name: 'Endless Survival' });
    expect(endlessSurvivalHeading).toBeInTheDocument();
  });

  it('displays a message wishing good luck', () => {
    const goodLuckMessage = screen.getByText("Good luck, brave scientist! It's time to show your coding skills and conquer the challenges of the unexplored planet.");
    expect(goodLuckMessage).toBeInTheDocument();
  });
});
