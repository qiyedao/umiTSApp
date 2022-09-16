import { Skeleton } from 'antd-mobile';

export default () => {
  return (
    <div>
      <Skeleton style={{ height: 200 }} animated />
      <Skeleton.Title animated />
      <Skeleton.Paragraph animated lineCount={5} />
      <Skeleton.Title animated />
      <Skeleton.Paragraph animated lineCount={5} />
    </div>
  );
};
