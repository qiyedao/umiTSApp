import { Upload } from 'antd';
import { Button } from 'antd-mobile';
import { FC } from 'react';
const CustomUpload: FC<any> = () => {
  return (
    <div>
      <Upload directory={true}>
        <Button>上传</Button>
      </Upload>
    </div>
  );
};
export default CustomUpload;
