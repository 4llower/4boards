import { Card } from '@4boards/codenames-ui';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const testData = new Array(25).fill(0).map((_, index) => ({
  text: (+(Math.random() * 123123).toFixed(0)).toString(16),
  color: ['blue', 'red', 'gray', 'white', 'black'][
    Math.floor(Math.random() * 10) % 5
  ],
})) as {
  text: string;
  color: 'blue' | 'red' | 'gray' | 'white' | 'black';
}[];

export function Codenames() {
  const [data, setData] = useState(testData);

  useEffect(() => {
    setData((data) => {
      return [{ ...data[0], count: 2, maxCount: 5 }, ...data.slice(1)];
    });
  }, []);

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
        {data.map((props) => (
          <div
            css={css`
              margin-right: 40px;
              margin-bottom: 20px;
            `}
          >
            <Card {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}
