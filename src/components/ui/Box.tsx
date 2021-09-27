import styled, { css } from 'styled-components';
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  border,
  BorderProps,
  color,
  flex,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  justifyContent,
  JustifyContentProps,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';
type CursorProps = {
  cursor?: string;
  color?: string;
  textOverflow?: string;
  backgroundColor?: string;
};
export type BoxProps = LayoutProps &
  SpaceProps &
  FlexProps &
  FlexWrapProps &
  AlignItemsProps &
  AlignContentProps &
  TextAlignProps &
  BorderProps &
  OpacityProps &
  PositionProps &
  JustifyContentProps &
  FlexDirectionProps &
  FontSizeProps &
  FontWeightProps &
  CursorProps;

export const boxProperties = css`
  font-family: Poppins;
  box-sizing: border-box;
  position: relative;
  ${fontSize}
  ${fontWeight}
  ${opacity}
  ${layout}
  ${border}
  ${flex}
  ${flexWrap};
  ${alignItems}
  ${alignContent}
  ${flexDirection}
  ${justifyContent}
  ${textAlign}
  ${space}
  ${position}
  ${color};
`;

export const Box = styled.div<BoxProps>`
  ${boxProperties}
  cursor: ${props => props.cursor || 'inherit'};
  text-overflow: ${props => props.textOverflow || 'default'};
`;
