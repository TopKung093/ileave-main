import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Form, Input, Select, Button, Divider, message, Upload, DatePicker } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import styled from 'styled-components'

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};
//แก้ครับแก้ any file to upload
const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt5M = file.size / 4096 / 4096 < 5; 
    if (!isLt5M) {
        message.error('Image must smaller than 5MB!');
    }
    return isJpgOrPng && isLt5M;
};
const LeaveModal = (

    modal: any, setModal: any) => {

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, url => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const { Option } = Select;

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    useEffect(() => {
        form.setFieldsValue({
            groupname: modal?.value?.group, //form.item > name="name"
            status: 1, //form.item > name="status"
        })
    }, [modal, setModal])


    return (
        <ModalStyled
            visible={modal?.visible}
            footer={false}
            width={900}
            centered
            onCancel={() => setModal({ visible: false })}
            onOk={() => setModal({ visible: false })}>
            <Row>
                <Col span={20} offset={0}
                    style={{ fontSize: '35px', fontWeight: 'bold' }}>{modal?.header}</Col>
            </Row>
            <Row>
                <Col span={24}><DividerStyled /></Col>
            </Row>
            <Row>
                <Col span={1} offset={1}><UploadStyled
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </UploadStyled></Col>

                <Col span={10} offset={11} style={{ fontSize: '18px', fontWeight: 'bold', color: '#064595' }}>Start Date
                    <DatePickerStyled
                        name="dataStart"
                    />
                    End Date
                    <DatePickerStyled
                        name="dataEnd"
                    />
                    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                        <Form.Item name="leavetype" label="อื่นๆ" rules={[{ required: true }]}>
                            <SelectStyled
                                placeholder="เลื่อกประเภทการลา"
                                allowClear
                            >
                                <Option value="leave">ลากิจ</Option>
                                <Option value="sickleave">ลาป่วย</Option>
                                <Option value="other">อื่นๆ</Option>
                            </SelectStyled>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.leavetype !== currentValues.leavetype}
                        >
                            {({ getFieldValue }) =>
                                getFieldValue('leavetype') === 'other' ? (
                                    <Form.Item name="customizeLeavetype" label="อื่นๆ โปรดระบุ" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                ) : null
                            }
                        </Form.Item>
                    </Form>
                    Detail
                    <Form.Item>
                        <Input.TextArea
                            name="detailInput"
                            autoSize={{ minRows: 2, maxRows: 6 }}
                            style={{ borderRadius: "20px", width: '100%', height: '60px', fontSize: '18px', background: '#FFF', borderColor: '#BFBFBF' }} 
                            />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={4} offset={13}>
                    <ButtonStyledd onClick={() => setModal({ visible: false })}
                        style={{ background: '#BFBFBF' }}>Cancel</ButtonStyledd>
                </Col>
                <Col span={4} offset={1}>
                    <ButtonStyledd
                        style={{ background: '#F1BE44' }}>Submit</ButtonStyledd>
                </Col>
            </Row>
        </ModalStyled>
    )

}
const SelectStyled = styled(Select)`
    width: 100%;
    .ant-select-selector {
        border-radius: 14px !important;
        border-color: #BFBFBF !important;
      } 
`
const ButtonStyledd = styled(Button)`
    color: #064595;
    height: 40px;
    border-Radius:20px;
    font-Size: 16px;
    fontFamily: Semi Bold;
    font-weight: bold;
    width: 100%;
    
`
const DatePickerStyled = styled(DatePicker)`
    width: 100% ;
    border-Color: #BFBFBF;
    height: 50px;
    border-Radius: 14px;
    
`
const DividerStyled = styled(Divider)`
    background: #064595 ;
    height: 2px;
    margin-top: 0px;
    width: 100%;
`
const ModalStyled = styled(Modal)`
    .ant-modal-content {
        border-radius: 46px;
        padding: 30px;
    }

    .ant-modal-close {
        margin-top: 20px;
        margin-right: 30px;
    }

    .ant-modal-close-x {
        font-size: 22px;
    }
`
const UploadStyled = styled(Upload)`
.ant-upload.ant-upload-select-picture-card {
    width: 300px;
    height: 300px;
    margin-right: 8px;
    margin-bottom: 8px;
    text-align: center;
    vertical-align: top;
    background-color: #fafafa;
    border: 1px dashed #d9d9d9;
    border-radius: 2px;
    cursor: pointer;
    transition: border-color 0.3s;
}
`
export default LeaveModal