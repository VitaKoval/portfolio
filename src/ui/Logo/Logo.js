import React from 'react'
import PropTypes from 'prop-types'

function Logo({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 67 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="50.25"
        height="50.5371"
        rx="25.125"
        fill="#FFDDCD"
        fill-opacity="0.9"
      />
      <rect
        x="25.125"
        y="12.6345"
        width="41.875"
        height="42.1143"
        rx="20.9375"
        fill="#CEF0EC"
        fill-opacity="0.46"
      />
      <rect
        x="10.4688"
        y="33.6917"
        width="29.3125"
        height="29.48"
        rx="14.6562"
        fill="#DDD8F8"
        fill-opacity="0.5"
      />
    </svg>
  )
}

Logo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Logo
