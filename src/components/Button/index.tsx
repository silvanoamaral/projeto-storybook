import React from 'react'
import styled from 'styled-components'

export interface Props {
  /**  Button appearance- primary, secondary, disabled **/
  appearance: string;
  backgroundColor?: string;
  size?: string;
  /** Text you want to display in your button, or an icon **/
  children: string;
}

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const theme = {
  colors: {
    primary: '#FF4785',
    secondary: '#1EA7FD',
    disabled: '#DDDDDD',
  }
}

export const StyledButton = styled.button<Props>`
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
  color: ${theme.colors.primary};
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : props.backgroundColor)};
  padding: ${(props) => (props.size === SIZES.SMALL ? '8px 16px' : '13px 20px')};
  font-size: ${(props) => (props.size === SIZES.SMALL ? '12px' : props.size === SIZES.MEDIUM ? '16px' : '20px')};
`

export const Button: React.FC<Props> = ({
  appearance,
  backgroundColor,
  size,
  children
}) => (
  <StyledButton
    appearance={appearance}
    backgroundColor={backgroundColor}
    size={size}
  >
    {children}
  </StyledButton>
)

export default Button