import type { FC } from 'react';
import { useEffect } from 'react';
import { Form, Button, Toast } from 'antd-mobile';
import { renderFormComponent } from '../common/index';
import type { FormColumnsType, ObjectType } from '@/typings';
import type { FormInstance } from 'antd-mobile/es/components/form';

export interface BaseFormProps {
  columns: FormColumnsType[];
  initialValues?: ObjectType;
  formRef: FormInstance;
  footer?: boolean;
  submitText?: string;
  onFinish: (values: ObjectType) => void;
  onFinishFailed?: (error: ObjectType) => void;
}
const BaseForm: FC<BaseFormProps> = ({
  columns,
  initialValues,
  formRef,
  footer = true,
  submitText = '提交',
  onFinish,
  onFinishFailed,
}) => {
  console.log('formRef', formRef, 'initialValues', initialValues);
  useEffect(() => {
    formRef.setFieldsValue(initialValues);
  }, [initialValues]);
  return (
    <Form
      hasFeedback={false}
      form={formRef}
      initialValues={initialValues}
      footer={
        footer && (
          <Button
            block
            onClick={() => {
              formRef.submit();
            }}
            color="primary"
          >
            {submitText}
          </Button>
        )
      }
      onFinish={onFinish}
      onFinishFailed={
        onFinishFailed
          ? onFinishFailed
          : (error) => {
              console.log(error);
              const { errorFields } = error;
              if (errorFields && errorFields.length) {
                Toast.show({
                  icon: 'fail',
                  content: errorFields[0].errors[0],
                });
              }
            }
      }
      layout="horizontal"
    >
      {columns.map((item, index) => (
        <div key={index}>{renderFormComponent(item)}</div>
      ))}
    </Form>
  );
};
export default BaseForm;
