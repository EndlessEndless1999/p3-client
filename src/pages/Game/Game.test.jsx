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

  it('renders the game container', () => {
    const gameContainer = screen.getByRole('main');
    expect(gameContainer).toBeInTheDocument();
  });

  it('renders the "Start Game" button', () => {
    const startGameButton = screen.getByText('Start Game');
    expect(startGameButton).toBeInTheDocument();
  });
});
