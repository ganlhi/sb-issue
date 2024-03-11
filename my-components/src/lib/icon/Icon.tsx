import * as React from 'react';
import * as SVG from './svg-components';

export type IconName =
  | 'basic / lock'
 ;

type IconProps = {
  name: IconName;
};

export function Icon({ name }: IconProps) {
  let Component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  switch (name) {
    case 'basic / lock':
      Component = SVG.Basiclock;
      break;
  }

  if (!Component) return null;


  return (
    <Component
      style={{display: 'inline-block'}}
      width={16}
      height={16}
      data-testid='icon'
    />
  );
}
