import classNames from 'classnames';
import React from 'react';
import { DotLoading, Button } from 'antd-mobile';
import { css } from '@emotion/react';
const btnCss = css`
  .adm-button-primary {
    background-color: red;
  }
`;
const Welcome: React.FC = () => {
  return (
    <div css={btnCss} className={classNames('  font-bold text-base ')}>
      123
      <Button size="small" color="primary">
        123
      </Button>
      <DotLoading />
    </div>
  );
};

export default Welcome;
