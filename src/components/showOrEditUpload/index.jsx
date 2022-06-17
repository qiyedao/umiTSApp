import React, { useEffect, useState } from 'react';

import { Upload, Icon, Modal, message, Row, Col, Button } from 'antd';
import { EditOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import './index.less';
import classNames from 'classnames';
import { commonFormUpload } from '@/utils/upload';
import ProxyAPi from '../../../config/proxy';

export default (props) => {
  // onSelectPictureAction: config.domain + 'api/common/upload',
  const [fileList, setFileList] = useState([]); //文件
  const [fileSize, setFileSize] = useState(2); //2mb
  const [uploadUrl, setUploadUrl] = useState(''); //上传api
  const [type, setType] = useState('img'); //上传服务器文件类型
  const [previewImage, setPreviewImage] = useState(''); //预览
  const [modalPreviewVisible, setModalPreviewVisible] = useState(false); //弹窗预览
  const [accept, setAccept] = useState('image/*'); //文件类型
  const [text, setText] = useState('上传文件'); //
  const [editText, setEditText] = useState('编辑文件'); //
  useEffect(() => {
    const { url } = props;
    if (url) {
      let obj = {};
      obj.url = url;
      obj.uid = '0';
      obj.name = '图片.png';
      obj.status = 'done';
      setFileList([obj]);
    } else {
      //需要清空
      setFileList([]);
    }
  }, []);
  // 预览图片
  const handlePreviewPicture = (file) => {
    setPreviewImage(file.url || file.thumbUrl);
    handlePreviewModal(true);
  };
  //
  const handlePreviewModal = (status) => setModalPreviewVisible(status);

  // 删除上传的图片
  const handleRemovePicture = (file) => {
    // console.log('handleRemovePicture', file);
    setFileList([]);

    if (props.deleteUploadUrl) {
      props.deleteUploadUrl(file);
    }

    return true;
  };
  const customRequest = async (params) => {
    const { onSuccess, onError, file, onProgress } = params;
    const formData = new FormData();

    formData.append('file', file);
    formData.append('type', type);
    let hide = '';
    if (file.type.indexOf('image') == -1) {
      hide = message.loading({
        content: '正在上传',
        duration: 0,
      });
    }

    try {
      const res = await commonFormUpload(formData, uploadUrl);
      if (res && res.status.code === 1) {
        const result = res.result;
        onProgress({ percent: 100 }, file);
        if (file.type.indexOf('image') == -1) {
          // message.success('上传成功');
          hide();
        }

        onSuccess && onSuccess(result, file);
      } else {
        message.error(`上传出错:${res.status.message}`);
      }
    } catch (error) {
      message.error(`上传出错:${error}`);
    }
  };
  // 编辑图片，即上传图片
  const handleChangePicture = ({ file, fileList, event }) => {
    setFileList([...fileList]);

    if (file.status === 'done') {
      console.log(file.response, 'done', {
        key: file.response,
        filePath: ProxyAPi.dev['/api/'].target + file.response,
      });
      let fileName = file.name.split('.')[0];

      props.setUploadUrl({
        key: file.response,
        filePath: ProxyAPi.dev['/api/'].target + file.response,
        fileName: fileName,
      });
    }
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    let isJPG = file.type === 'image/jpeg';
    let isPNG = file.type === 'image/png';
    let formatSize = file.size / 1024 / 1024;
    // console.log('file.type', file.type, 'formatSize', formatSize, file);
    const isLt2M = formatSize < fileSize;
    if (!isLt2M) {
      message.error(`文件大小不能超过${fileSize}MB!`);

      let newFileList = JSON.parse(JSON.stringify(fileList));
      setFileList([...newFileList]);
    }
    // return isLt2M && (isJPG || isPNG);
    return isLt2M;
  };

  return (
    <Row type="flex" justify="start">
      <Col>
        <Upload
          name="file"
          className={'uploadInrow'}
          customRequest={customRequest}
          listType={
            props.listType
              ? props.listType
              : props.isButton
              ? 'picture'
              : 'picture-card'
          }
          beforeUpload={beforeUpload}
          accept={accept}
          showUploadList={props.showUploadList || false}
          fileList={fileList}
          onPreview={handlePreviewPicture}
          onChange={handleChangePicture}
          onRemove={handleRemovePicture}
        >
          {props.isButton ? (
            <button className={classNames('ant-btn', 'custom-upload-btn')}>
              <span>选择文件</span>
            </button>
          ) : fileList.length > 0 ? (
            <div>
              {props.icon ? props.icon : <PlusOutlined />}

              <div>{text}</div>
            </div>
          ) : (
            <div>
              {props.icon ? props.icon : <PlusOutlined />}
              <div>{text}</div>
            </div>
          )}
        </Upload>

        <Modal
          visible={modalPreviewVisible}
          footer={null}
          onCancel={() => {
            handlePreviewModal(false);
          }}
        >
          <img alt="上传图片" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </Col>
    </Row>
  );
};
