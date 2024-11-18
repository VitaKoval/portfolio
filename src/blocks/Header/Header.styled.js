import styled from 'styled-components'
import css from '@styled-system/css'

export const HeaderWrapper = styled.header(
  css({
    boxSizing: 'border-box',
    position: 'sticky',
    top: '0',
    width: '100%',
    height: '6.063rem',
    minHeight: '6.063rem',
    p: '1rem 1.5rem',
    zIndex: 15,
    bg: 'white',
  }),
)
