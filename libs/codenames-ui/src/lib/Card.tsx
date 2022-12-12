import { ClassNames } from '@emotion/react';
import { useMemo } from 'react';

import { colors } from './colors';

type Props = {
  className?: string;
  text: string;

  color: 'black' | 'red' | 'blue' | 'gray' | 'white';

  count?: number;
  maxCount?: number;
};

export function Card({ className, text, color, count, maxCount }: Props) {
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
      default: {
        return '#aaa';
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
              position: relative;
            `,
            className
          )}
        >
          {text.toUpperCase()}
          {count && maxCount && (
            <div
              css={css`
                position: absolute;
                right: 10px;
                top: 10px;
                font-size: 16px;
              `}
            >{`${count}/${maxCount}`}</div>
          )}
        </div>
      )}
    </ClassNames>
  );
}
