import React from 'react';
import styled, { css } from 'styled-components';
import { Box, BoxProps } from './Box';

const ButtonStyled = styled(Box)<{ variant?: 'filled' | 'ghost' }>`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 25px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  background-color: ${p => p.theme.colors.primary.default};
  color: ${p => p.theme.colors.white};

  &:hover {
    background-color: ${p =>  p.theme.colors.blue};
  }
  &:disabled {
    background-color: ${p => p.theme.colors.primary?.default};
    cursor: not-allowed;
  }

  ${props =>
    props.variant === 'ghost' &&
    css`
      color: ${props.theme.colors.primary.default};
      background-color: transparent;
      &:hover {
        color: white;
      }
    `}
`;

const Loader = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

type ButtonProps = BoxProps &
  Omit<React.HTMLProps<HTMLButtonElement>, 'ref' | 'as'> & {
    isLoading?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    variant?: 'filled' | 'ghost';
  };

export const Button = ({
  children,
  isLoading,
  type,
  disabled,
  isDisabled,
  isFullWidth,
  variant = 'filled',
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      {...props}
      as="button"
      disabled={isDisabled || disabled || isLoading}
      type={type as any}
      variant={variant}
    >
      <Box opacity={isLoading ? 0 : 1}>{children}</Box>
    </ButtonStyled>
  );
};