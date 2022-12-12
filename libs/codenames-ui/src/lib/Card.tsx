import { ClassNames } from '@emotion/react';

import { colors } from './theme';

type Props = {
  className?: string;
  text: string;

  color: 'black' | 'red' | 'blue' | 'gray' | 'white';
};

export function Card({ className, text, color }: Props) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <div
          className={cx(
            css`
              padding: 40px;
              border-radius: 4px;
              text-align: center;
              font-weight: 700;
              width: 200px;
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              background: ${colors[color]};
            `,
            className
          )}
        >
          {text}
        </div>
      )}
    </ClassNames>
  );
}
