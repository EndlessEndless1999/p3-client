import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import About from '.';

describe('About Page', () => {
  beforeEach(() => {
    render(<About />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the "About" section with the title', () => {
    const title = screen.getByRole('heading', { level: 2, name: /about/i });
    expect(title).toBeInTheDocument();
  });

  it('displays the About heading', () => {
    const aboutHeading = screen.getByRole('heading', { level: 2, name: /about/i });
    expect(aboutHeading).toBeInTheDocument();
  });

  it('displays the game description text', () => {
    const gameDescription = screen.getByText(/Title Here: The Language of Coding/i);
    expect(gameDescription).toBeInTheDocument();
  });

  it('displays the Developers heading', () => {
    const developersHeading = screen.getByRole('heading', { level: 3, name: /developers/i });
    expect(developersHeading).toBeInTheDocument();
  });

  it('displays the developer names and links', () => {
    const developerList = screen.getByRole('list');
    expect(developerList).toBeInTheDocument();

    const developerLinks = screen.getAllByRole('link');
    expect(developerLinks.length).toBe(5);
  });

  it('displays developer names as list items', () => {
    const developerListItems = screen.getAllByRole('listitem');
  
    expect(developerListItems.length).toBe(5);
  });

  it('displays the correct developer names and GitHub links', () => {
    const developerLinks = screen.getAllByRole('link');
    const developerNames = [
      'Charlie Mitchell',
      'Balram Singh',
      'Kristian Spiropali',
      'Salina Thapa',
      'Lanxe Yu',
    ];
    const githubProfiles = [
      'https://github.com/EndlessEndless1999',
      'https://github.com/bobzila1202',
      'https://github.com/Kspiropali',
      'https://github.com/salinathapa',
      'https://github.com/lanxeyu',
    ];
  
    developerLinks.forEach((link, index) => {
      expect(link).toHaveTextContent(developerNames[index]);
      expect(link).toHaveAttribute('href', githubProfiles[index]);
    });
  });

  it('has aria-labels in developer links', () => {
    const developerLinks = screen.getAllByRole('link');
  
    developerLinks.forEach((link) => {
      expect(link).toHaveAttribute('aria-label');
    });
  });

  it('opens GitHub profiles in a new tab', () => {
    const developerLinks = screen.getAllByRole('link');
    
    developerLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener');
    });
  });
});
