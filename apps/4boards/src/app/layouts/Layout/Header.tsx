import { css } from '@emotion/react';
import { Button } from '@4boards/common';

export function Header() {
  return (
    <div
      css={css`
        height: 80px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      `}
    >
      <Button
        css={css`
          height: 45px;
        `}
      >
        Connect
      </Button>
      <Button
        css={css`
          height: 45px;
        `}
      >
        Create a room
      </Button>
    </div>
  );
}
