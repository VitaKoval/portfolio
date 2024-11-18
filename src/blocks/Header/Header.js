import React from 'react'
import { Logo } from '@/ui'
import { HeaderWrapper } from './Header.styled'
import { Container, Flex } from '@/ui'
import { Linkedin, Telegram } from '@/icons'

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Logo width="4.188rem" height="4rem" />
          <Flex gap="0.75rem">
            <Linkedin width="50px" />
            <Telegram width="50px" />
          </Flex>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
