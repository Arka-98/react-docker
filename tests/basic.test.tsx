import { fireEvent, render, screen } from '@testing-library/react';
import App from "../src/App";
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('should increase count by 1 & double by 2 once button is clicked', () => {
    render(<App />)

    const element = screen.getByRole('button')

    fireEvent.click(element)

    expect(element.innerHTML).toBe('count is 1 and double is 2')
  });
  it('Should render the header text', () => {
    render(<App />)

    const element = screen.getByRole('heading')

    expect(element.innerHTML).toBe('Vite + React + TS Demo')
  })
});