import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@/ui'

function Container({ children }) {
  return (
    <Box width="100%" maxWidth="81.375rem" px="1rem" mx="auto">
      {children}
    </Box>
  )
}

Container.propTypes = { children: PropTypes.any }

export default Container
