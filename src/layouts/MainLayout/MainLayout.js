import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '@/blocks'
import { Flex } from '@/ui'

const MainLayout = ({ children }) => {
  return (
    <Flex width="100vw" position="relative">
      <Flex
        column
        flexGrow={1}
        // maxWidth="1164px"
        // margin="0 auto"
        // padding=" 0 1rem"
        // justifyContent="space-between"
        // overflow="hidden"
      >
        <Header />
        {children}
        <footer>Footer</footer>
      </Flex>
    </Flex>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any,
}

export default MainLayout
