import React, { useContext } from 'react'
import styled, {ThemeContext } from 'styled-components'

export interface Props {
  /**  Appearance - primary, secondary, disabled **/
  appearance: string;
  /** Kind - solid, outline, link **/
  kind?: string;
  bg?: string;
  size?: string;
  children: string;
  onClick?: () => void;
}

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

export const StyledButton = styled.button<Props>`
  background: ${(props) => (props.bg ? props.bg : '#fff')};
  border: 1px solid ${(props) => props.appearance ? `${props.theme.colors[props.appearance]}` : props.theme.colors.primary };
  border-radius: 3px;
  cursor: pointer;
  color: ${(props) =>  props.theme.colors.primary };
  padding: ${(props) => (props.size === SIZES.SMALL ? '8px 16px' : '13px 20px')};
  font-size: ${(props) => props.size ? `${props.theme.fontSizes[props.size]}px` : '12px' };

  ${(props) =>
    props.appearance === 'primary' &&
    `
      color: ${(props.bg ? '#fff' : props.theme.colors[props.appearance])};
      border: 1px solid ${(props.bg ? props.bg : props.theme.colors[props.appearance])};
    `
  }

  ${(props) =>
    props.appearance === 'secondary' &&
    `
      color: #FFF;
      background: ${ props.theme.colors.secondary };
    `
  }

  ${(props) =>
    props.appearance === 'disabled' &&
    `
      background: ${ props.theme.colors.disabled };
      color: #FFF;
      cursor: default;
      pointer-events: none;
    `
  }
`

export const Button: React.FC<Props> = ({
  appearance,
  bg,
  size,
  children,
  kind,
  onClick,
}) => {
  // const Theme = useContext(ThemeContext)
  // console.log(Theme)

  return (
    <StyledButton
      appearance={appearance}
      bg={bg}
      size={size}
      kind={kind}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button