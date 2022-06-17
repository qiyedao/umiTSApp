import Icon from '@ant-design/icons/lib/components/Icon';

export default ({ imgStyle, imgSrc }) => (
  <Icon
    component={() => (
      <img
        style={{ width: '20px', height: '20px', ...imgStyle }}
        src={imgSrc}
        alt="icon"
      />
    )}
  />
);
