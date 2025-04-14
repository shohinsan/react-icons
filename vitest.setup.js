// This file contains setup code for your Vitest tests
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// This ensures that the DOM is cleaned up after each test
afterEach(() => {
  cleanup();
});
