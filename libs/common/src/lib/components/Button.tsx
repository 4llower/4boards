import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';
import { colors } from '../colors';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: Props) {
  return (
    <button
      css={css`
        border-radius: 6px;
        padding: 12px;
        border: none;
        background: ${colors.blue100};
        color: ${colors.blue500};
      `}
      {...props}
    >
      {children}
    </button>
  );
}
