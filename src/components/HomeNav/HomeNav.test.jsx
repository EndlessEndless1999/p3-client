import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import HomeNav from '.'; 

describe('HomeNav Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HomeNav />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('displays a HomeNav with 4 children', () => {
    const nav = screen.getByRole('navigation')

    expect(nav).toBeInTheDocument()
    expect(nav.childNodes.length).toBe(4)
  })

  it('displays the "Play" navigation link', () => {
    const playLink = screen.getByText('Play');
    expect(playLink).toBeInTheDocument();
  });

  it('displays the "High Scores" navigation link', () => {
    const highScoresLink = screen.getByText('High Scores');
    expect(highScoresLink).toBeInTheDocument();
  });

  it('displays the "Help" navigation link', () => {
    const helpLink = screen.getByText('Help');
    expect(helpLink).toBeInTheDocument();
  });

  it('displays the "About" navigation link', () => {
    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
  });
});
