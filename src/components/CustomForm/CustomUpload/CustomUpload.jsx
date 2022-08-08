import React, { useState } from 'react';
import { useEffect } from 'react';
import BaseUpload from '../../BaseUpload';
import { DeleteOutline, DownOutline } from 'antd-mobile-icons';
import './index.less';
const CustomUpload = ({
  value,
  onChange,
  disabled = false,
  style,
  isButton = true,
  length = 1,
  showUploadList = false,
  accept,
  info = '文件',
}) => {
  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    let fileList = [];
    if (value) {
      fileList = value.map((item, index) => {
        return {
          url: item.filePath,
          uid: index,
          name: item.name,
          status: 'done',
        };
      });
    }
    setFileList(fileList);
    console.log(value, 'upload');
  }, [value]);

  const triggerChange = (changedValue) => {
    console.log('changedValue', changedValue, 'value', value);
    onChange?.([...value, ...changedValue]);
  };
  const uploadChange = (val) => {
    setCurretVal(val);
    triggerChange(val);
  };

  const renderUploadList = (list) => {
    let divList = [];
    list.map((item, index) => {
      divList.push(
        <div key={index} className="custom-upload-file">
          <span className="custom-upload-file-name">{item.name}</span>
          <span className="custom-upload-file-action">
            <DownOutline
              onClick={() => {
                handleDownload();
              }}
            />
            <DeleteOutline
              onClick={() => {
                handleDelete(index);
              }}
            />
          </span>
        </div>,
      );
    });
    return divList;
  };
  const handleDownload = () => {};
  const handleDelete = (index) => {
    if (fileList.length == 1) {
      onChange?.(null);
      setCurretVal(null);
    }
    fileList.splice(index, 1);
    setFileList(fileList);
  };
  return (
    <span>
      <BaseUpload
        showUploadList={showUploadList}
        style={style}
        disabled={disabled}
        isButton={isButton}
        length={length}
        info={info}
        accept={accept}
        fileList={fileList}
        setUploadUrl={(values) => {
          uploadChange(values);
        }}
        deleteUploadUrl={() => {
          uploadChange({});
        }}
      />
      <div className="custom-upload-list">{renderUploadList(fileList)}</div>
    </span>
  );
};

export default CustomUpload;
