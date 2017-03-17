import React from 'react'

const ResbonsiveContainer = ({children, isAbsolute, style}) => (
  <div
    className={`container ${isAbsolute ? 'container-absolute' : ''}`}
    style={style}
  >
    {children}
  </div>
)

export default ResbonsiveContainer