import { ClassNames } from '@emotion/react';
import { useMemo } from 'react';

import { colors } from './theme';

type Props = {
  className?: string;
  text: string;

  color: 'black' | 'red' | 'blue' | 'gray' | 'white';
};

export function Card({ className, text, color }: Props) {
  const fontColor = useMemo(() => {
    switch (color) {
      case 'black': {
        return '#aaa';
      }
      case 'blue': {
        return '#00548a';
      }
      case 'gray': {
        return '#737065';
      }
      case 'red': {
        return '#8a1000';
      }
    }
  }, [color]);

  return (
    <ClassNames>
      {({ css, cx }) => (
        <div
          className={cx(
            css`
              padding: 40px;
              border-radius: 4px;
              text-align: center;
              font-weight: 800;
              font-size: 23px;
              width: 200px;
              background: ${colors[color]};
              color: ${fontColor};
              border: 1px solid #ddd;
              cursor: pointer;
              transition: 0.5s;
              user-select: none;
              &:hover {
                transform: scale(1.05);
              }
            `,
            className
          )}
        >
          {text.toUpperCase()}
        </div>
      )}
    </ClassNames>
  );
}
