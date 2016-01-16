import React from 'react'

export const Layout = ({content}) => (
  <div className='Layout'>
    <h1>My App</h1>
    <hr />
    <div>{content}</div>
  </div>
)

export const Welcome = ({name}) => (
  <div className='Welcome'>
    Hello, {name}.
  </div>
)
