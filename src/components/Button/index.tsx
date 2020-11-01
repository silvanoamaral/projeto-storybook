import React from 'react'
import styled from 'styled-components'

export interface Props {
  /**  Button appearance- primary, secondary, disabled **/
  appearance: string;
  /** Button kind - solid, outline, link **/
  kind?: string;
  backgroundColor?: string;
  size?: string;
  /** Text you want to display in your button, or an icon **/
  children: string;
  onClick?: () => void;
}

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

export const StyledButton = styled.button<Props>`
  border: 1px solid ${(props) => props.theme?.colors.success};
  border-radius: 3px;
  cursor: pointer;
  color: ${(props) => props.theme?.colors.primary};
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : props.backgroundColor)};
  padding: ${(props) => (props.size === SIZES.SMALL ? '8px 16px' : '13px 20px')};
  font-size: ${(props) => (props.size === SIZES.SMALL ? '12px' : props.size === SIZES.MEDIUM ? '16px' : '20px')};
`

export const Button: React.FC<Props> = ({
  appearance,
  backgroundColor,
  size,
  children,
  kind,
  onClick
}) => (
  <StyledButton
    appearance={appearance}
    backgroundColor={backgroundColor}
    size={size}
    kind={kind}
    onClick={onClick}
  >
    {children}
  </StyledButton>
)

export default Button