import { commonFormUpload } from '@/utils/upload';
import { PlusOutlined } from '@ant-design/icons';
import { Col, message, Modal, Row, Upload } from 'antd';
import { Toast, SpinLoading } from 'antd-mobile';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import ProxyAPi from '../../../config/proxy';
import './index.less';

export default (props) => {
  // onSelectPictureAction: config.domain + 'api/common/upload',
  const [fileList, setFileList] = useState([]); //文件
  const [fileSize, setFileSize] = useState(2); //2mb
  const [uploadUrl, setUploadUrl] = useState(''); //上传api
  const [type, setType] = useState(''); //上传服务器文件类型
  const [previewImage, setPreviewImage] = useState(''); //预览
  const [modalPreviewVisible, setModalPreviewVisible] = useState(false); //弹窗预览
  const [accept, setAccept] = useState('.png,.jpg,.jpeg,.bmp'); //文件类型
  const [text, setText] = useState('图片'); //
  const [editText, setEditText] = useState('编辑文件'); //
  useEffect(() => {
    const { fileList } = props;
    if (fileList) {
      setFileList(fileList);
    } else {
      //需要清空
      setFileList([]);
    }
    if (props.info) {
      setText(props.info);
    }
    if (props.accept) {
      setAccept(props.accept);
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
    if (type) {
      formData.append('type', type);
    }

    // if (file.type.indexOf('image') == -1) {
    //   Toast.show({
    //     content: <SpinLoading />,
    //     duration: 0,
    //     position: 'top',
    //   });
    // }
    Toast.show({
      content: (
        <div className=" flex flex-col justify-center items-center ">
          <SpinLoading />
          <span>正在上传</span>
        </div>
      ),
      duration: 0,
    });
    // return;
    try {
      const res = await commonFormUpload(formData, uploadUrl);
      if (res && res.status.code === 1) {
        const result = res.result;
        onProgress({ percent: 100 }, file);
        if (file.type.indexOf('image') == -1) {
          // message.success('上传成功');
          Toast.clear();
        }

        onSuccess && onSuccess(result, file);
      } else {
        Toast.show({
          icon: 'fail',
          content: `上传出错:${res.status.message}`,
        });
      }
    } catch (error) {
      Toast.show({
        icon: 'fail',
        content: `上传出错:${error}`,
      });
    }
  };
  // 编辑图片，即上传图片
  const handleChangePicture = ({ file, fileList, event }) => {
    if (props.length == 1) {
      setFileList([file]);
    } else {
      setFileList([...fileList]);
    }

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
        name: file.name,
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
    const ext = file.name.substring(file.name.lastIndexOf('.'));
    console.log(ext, 'formatSize', formatSize, file, 'accept', accept);
    let isSupported = accept.includes(ext);
    if (!isSupported) {
      Toast.show({
        icon: 'fail',
        content: `文件格式错误!`,
      });

      let newFileList = JSON.parse(JSON.stringify(fileList));
      setFileList([...newFileList]);
    }
    const isLt2M = formatSize < fileSize;
    if (!isLt2M) {
      Toast.show({
        icon: 'fail',
        content: `文件大小不能超过${fileSize}MB!`,
      });

      let newFileList = JSON.parse(JSON.stringify(fileList));
      setFileList([...newFileList]);
    }
    // return isLt2M && (isJPG || isPNG);
    return isLt2M && isSupported;
  };

  return (
    <Row type="flex" justify="start">
      <Col>
        <Upload
          name="file"
          className={'uploadInrow'}
          customRequest={customRequest}
          listType={props.listType ? props.listType : props.isButton ? 'picture' : 'picture-card'}
          beforeUpload={beforeUpload}
          accept={accept}
          showUploadList={props.showUploadList || false}
          fileList={fileList}
          // style={{ width: 80, height: 80 }}
          onPreview={handlePreviewPicture}
          disabled={props.disabled}
          onChange={handleChangePicture}
          onRemove={false}
          // onRemove={handleRemovePicture}
        >
          {props.disabled ? null : (
            <div>
              {props.isButton ? (
                <div
                  style={props.style || {}}
                  className={classNames('ant-btn', 'custom-upload-btn')}
                >
                  <span>选择{text}</span>
                </div>
              ) : fileList.length > 0 ? (
                <div style={props.style || {}}>
                  {props.icon ? props.icon : <PlusOutlined />}

                  <div>上传{text}</div>
                </div>
              ) : (
                <div style={props.style || {}}>
                  {props.icon ? props.icon : <PlusOutlined />}
                  <div>上传{text}</div>
                </div>
              )}
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
