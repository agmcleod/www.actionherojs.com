import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import Header from '../../components/header.js'

describe('Header', () => {
  it('renders the nav', () => {
    const page = TestUtils.renderIntoDocument(<Header />)
    const body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('Get Started')
    expect(body).toContain('Documentation')
    expect(body).toContain('Solutions')
    expect(body).toContain('Community')
    expect(body).toContain('Download')
  })
})
