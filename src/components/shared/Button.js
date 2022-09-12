import React from 'react'

const Button = ({children, version, type,isdDsabled}) => {
  return (
   <button type={type} disabled={isDisabled}>
    {children}
    </button>
  )
}

export default Button