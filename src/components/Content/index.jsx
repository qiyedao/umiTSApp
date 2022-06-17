import React from 'react';
import './index.less';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import RightContent from '@/components/RightContent';
import ContentLayout from './Layout/layout';
const Content = ({ children }) => {
  const breadcrumbRender = ({ currentMenu, breadcrumb }) => {
    let breadcrumbList = [];
    if (currentMenu.hideInMenu) {
      return (
        <div className="custom-page-header">
          <RightContent />
        </div>
      );
    }
    if (breadcrumb.routes) {
      breadcrumb.routes.map((item, index) => {
        breadcrumbList.push(
          <div
            key={'breadcrumbName' + index}
            className={
              index === breadcrumb.routes.length - 1
                ? 'custom-breadcrumb-active'
                : ''
            }
          >
            {item.breadcrumbName}
            {index !== breadcrumb.routes.length - 1 ? (
              <div className="custom-breadcrumb-line">/</div>
            ) : (
              ''
            )}
          </div>,
        );
      });
    } else {
      breadcrumbList.push(
        <div key={'breadcrumbName-0'} className={' custom-breadcrumb-active'}>
          {currentMenu.name}
        </div>,
      );
    }
    return (
      <div className="custom-page-header">
        <div className="custom-breadcrumb ">{breadcrumbList}</div>
        <RightContent />
      </div>
    );
  };
  return (
    <PageHeaderWrapper
      header={{
        title: '',
      }}
      style={{ minWidth: 800 }}
      breadcrumbRender={breadcrumbRender}
    >
      <ContentLayout>{children}</ContentLayout>
    </PageHeaderWrapper>
  );
};
export default Content;
