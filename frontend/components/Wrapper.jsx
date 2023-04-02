import React from 'react'

const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full px-5 md:px-10 max-auto ${className || ""}`}>{children}</div>
  )
}

export default Wrapper