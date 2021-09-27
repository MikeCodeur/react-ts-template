import styled from 'styled-components';
import { boxProperties, BoxProps } from './Box';

export const Container = styled.div<BoxProps>`
  max-width: ${p => p.theme.sizes.xl}px;
  width: 100%;
  margin: 0 auto;
  min-height:calc(100vh - 200px);
  ${boxProperties}
`;
