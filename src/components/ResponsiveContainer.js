import React from 'react'

const ResbonsiveContainer = ({children, isAbsolute, style, className = ''}) => (
  <div
    className={`container ${isAbsolute ? 'container-absolute' : ''} ${className}`}
    style={style}
  >
    {children}
  </div>
)

export default ResbonsiveContainer