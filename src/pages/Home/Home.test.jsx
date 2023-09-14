import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Home from '.';

describe('Home Page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
  
    afterEach(() => {
      cleanup();
    });
  
    it('displays the title', () => {
      const title = screen.getByText('Refactory');
      expect(title).toBeInTheDocument();
    });
  });