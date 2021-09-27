import styled, { css } from 'styled-components';
import { boxProperties, BoxProps } from './Box';

type TextProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'u' | 'span' | 'disabled';
};
export const Text = styled.div.attrs<TextProps>(props => ({
  as: props.variant,
}))<TextProps & BoxProps>`
  color:  ${p => p.theme.colors.primary?.default};
  line-height: normal;
  margin: 0;
  ${props => {
    switch (props.variant) {
      case 'h1':
        return css`
          font-size: 25px;
          font-weight: 700;
        `;
      case 'h2':
        return css`
          font-size: 22px;
          font-weight: 600;
        `;
      case 'h3':
        return css`
          font-size: 16px;
          font-weight: 600;
        `;
      case 'disabled':
        return css`
          font-size: 14px;
          color: #819cad;
        `;
      case 'p':
      default:
        return css`
          font-size: 14px;
          color: ${p=> p?.theme?.colors?.black};
        `;
    }
  }}
  ${boxProperties}
`;

Text.defaultProps = {
  variant: 'p',
};
