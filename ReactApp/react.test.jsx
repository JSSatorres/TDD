import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

const Calculator = () => {
  return <h1>Calculator</h1>
}

describe('Calculator', () => {
  it('should render Calculator component', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
    // test2
  })
})
