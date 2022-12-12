import { Card } from '@4boards/codenames-ui';
import { css } from '@emotion/react';

const testData = new Array(25).fill(0).map((_, index) => ({
  text: (+(Math.random() * 123123).toFixed(0)).toString(16),
  color: ['blue', 'red', 'gray', 'white', 'black'][index % 5],
})) as {
  text: string;
  color: 'blue' | 'red' | 'gray' | 'white' | 'black';
}[];

export function Codenames() {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          max-width: 1200px;
          flex-wrap: wrap;
        `}
      >
        {testData.map(({ color, text }) => (
          <div
            css={css`
              margin-right: 40px;
              margin-bottom: 20px;
            `}
          >
            <Card color={color} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}
