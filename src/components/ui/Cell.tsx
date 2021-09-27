import * as CSS from 'csstype';

import styled from 'styled-components';

import {
  typography,
  space,
  color,
  position,
  layout,
  TypographyProps,
  SpaceProps,
  ColorProps,
  PositionProps,
  LayoutProps,
  system,
  ResponsiveValue,
} from 'styled-system';
export type StyledSystemProps = TypographyProps &
  SpaceProps &
  ColorProps &
  PositionProps &
  LayoutProps;

export const GridBase = styled.section<StyledSystemProps>`
  ${space}
  ${typography}
    ${color}
    ${position}
    ${layout}
`;

export const CellBase = styled.div<StyledSystemProps>`
  ${space}
  ${typography}
    ${color}
    ${position}
    ${layout}
`;

const flowResolver = (flow = 'row') => flow;
const columnsResolver = (cols = 12) =>
  typeof cols === 'number' ? `repeat(${cols}, 1fr)` : cols;

type StyledGridProps = {
  gap: ResponsiveValue<string>;
  rowGap: ResponsiveValue<string>;
  columnGap: ResponsiveValue<string>;
  alignItems: ResponsiveValue<string>;
  alignContent: ResponsiveValue<string>;
  justifyItems: ResponsiveValue<string>;
  justifyContent: ResponsiveValue<string>;
  cols: ResponsiveValue<number | string>;
  flow: ResponsiveValue<string>;
  areas: ResponsiveValue<string[]>;
};

type Transform = (value: any) => string | number;

function createStyledProp(
  propName: string,
  cssPropName: keyof CSS.PropertiesHyphen,
  transform?: Transform
) {
  return {
    [propName]: {
      property: cssPropName,
      transform,
    },
  };
}

type StyledPropType = string | { propName: string; transform?: Transform };

function createStyledProps(
  config: { [key in keyof CSS.PropertiesHyphen]: StyledPropType }
) {
  const systemConfig = Object.entries(config).reduce(
    (acc, [cssPropName, prop]) => ({
      ...acc,
      // @ts-ignore
      ...createStyledProp(...spreadProps(cssPropName, prop)),
    }),
    {}
  );
  return system(systemConfig);

  function spreadProps(
    cssPropName: keyof CSS.PropertiesHyphen,
    prop: StyledPropType
  ) {
    return typeof prop === 'string'
      ? [prop, cssPropName]
      : [prop.propName, cssPropName, prop.transform];
  }
}

const formatAreas = (areas: string[]) =>
  areas.map(area => `"${area}"`).join(' ');

export const Grid = styled(GridBase)<Partial<StyledGridProps>>`
  display: grid;
  ${createStyledProps({
    gap: 'gap',
    'grid-row-gap': 'rowGap',
    'grid-column-gap': 'columnGap',
    'align-items': 'alignItems',
    'align-content': 'alignContent',
    'justify-items': 'justifyItems',
    'justify-content': 'justifyContent',
    'grid-template-areas': {
      propName: 'areas',
      transform: (areas: string[]) => formatAreas(areas),
    },
    'grid-auto-flow': {
      propName: 'flow',
      transform: flowResolver,
    },
    'grid-template-columns': {
      propName: 'cols',
      transform: columnsResolver,
    },
  })}
`;

type CellProps = {
  area: ResponsiveValue<string>;
  'x-offset': ResponsiveValue<string>;
  'x-span': ResponsiveValue<string>;
  'y-offset': ResponsiveValue<string>;
  'y-span': ResponsiveValue<string>;
  justifySelf: ResponsiveValue<string>;
  alignSelf: ResponsiveValue<string>;
  placeSelf: ResponsiveValue<string>;
};

const forbiddenProps = ['x-offset', 'x-span', 'y-offset', 'y-span'];

export const Cell = styled(CellBase).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !forbiddenProps.includes(prop) && defaultValidatorFn(prop),
})<Partial<CellProps>>`
  ${createStyledProps({
    'grid-area': 'area',
    'place-self': 'placeSelf',
    'justify-self': 'justifySelf',
    'align-self': 'alignSelf',
    'grid-column-start': 'x-offset',
    'grid-row-start': 'y-offset',
    'grid-column-end': {
      propName: 'x-span',
      transform: (span: number | string) => `span ${span}`,
    },
    'grid-row-end': {
      propName: 'y-span',
      transform: (span: number | string) => `span ${span}`,
    },
  })}
`;
