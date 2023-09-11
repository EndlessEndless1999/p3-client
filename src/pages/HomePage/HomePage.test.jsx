import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import HomePage from '.';

describe('HomePage', () => {
    beforeEach(() => {
      render(<HomePage />);
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it('displays the title', () => {
      const title = screen.getByText('Title here');
      expect(title).toBeInTheDocument();
    });

    it('displays the navigation links', () => {
        const playLink = screen.getByText('Play');
        const highScoresLink = screen.getByText('High Scores');
        const settingsLink = screen.getByText('Settings');
        const helpLink = screen.getByText('Help');
        const aboutLink = screen.getByText('About');
    
        expect(playLink).toBeInTheDocument();
        expect(highScoresLink).toBeInTheDocument();
        expect(settingsLink).toBeInTheDocument();
        expect(helpLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
      });
  });