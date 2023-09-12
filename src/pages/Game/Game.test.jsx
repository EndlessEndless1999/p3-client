import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Game from '.';

describe('Game Component', () => {
  beforeEach(() => {
    render(<Game />);
  });

  afterEach(() => {
    cleanup();
  });

  it('displays character images', () => {
    const robotImage = screen.getByAltText('BuggyBot');
    const alienImages = screen.getAllByAltText('alien');

    expect(robotImage).toBeInTheDocument();
    expect(alienImages).toHaveLength(3);
  });

  it('displays a launch code button', () => {
    const launchCodeButton = screen.getByText('launch code');
    expect(launchCodeButton).toBeInTheDocument();
  });
});
