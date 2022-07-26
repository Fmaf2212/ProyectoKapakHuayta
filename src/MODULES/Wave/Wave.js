import React from 'react'

import './wave.css'

const Wave = () => {
  return (
    <div className="wave">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: '100%', width: '100%' }}
      >
        <path
          d="M-3.67,90.30 C226.57,275.83 290.91,-120.86 504.79,61.69 L504.79,164.31 L0.00,150.00 Z"
          style={{ stroke: 'none', fill: '#fff' }}
        ></path>
      </svg>
    </div>
  )
}

export default Wave
