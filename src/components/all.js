import React from 'react'
import Header2 from './header'

const AllPage = ({ children }) => {
  return (
    <div>
      <Header2 />
      {children}
    </div>
  )
}

export default AllPage