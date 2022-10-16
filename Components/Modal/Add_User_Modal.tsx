import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Form, Input, Select, Button, Divider, Upload, DatePicker } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import styled from 'styled-components'


const { RangePicker } = DatePicker;
const GroupModal = (
    modal: any,
    setModal: any) => {

    const { Option } = Select;

    const [value, setValue] = useState(1);

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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
            width={700}
            centered
            onCancel={() => setModal({ visible: false })}>

            <Row>
                <Col span={20} offset={0} style={{ fontSize: '35px', fontWeight: 'bold' }}>Add User</Col>
            </Row>
            <Row>
                <Col span={24}><DividerStyled /></Col>
            </Row>
            <Row>
                <Col span={20} offset={2} style={{ fontSize: '18px', fontWeight: 'bold', color: '#064595' }}>Employee ID
                    <Form.Item><Input style={{ borderRadius: "18px", width: '100%', height: '50px', fontSize: '18px', background: '#FFF', borderColor: '#000' }} /></Form.Item></Col>
            </Row>
            <Row>
                <Col span={4} offset={2} style={{ fontSize: '18px', fontWeight: 'bold', color: '#064595' }}>Firsh Name</Col>
                <Col span={4} offset={7} style={{ fontSize: '18px', fontWeight: 'bold', color: '#064595' }}>Last Name</Col>
            </Row>
            <Row>
                <Col span={10} offset={2}><Form.Item><Input style={{ borderRadius: "18px", width: '100%', height: '50px', fontSize: '18px', background: '#FFF', borderColor: '#000' }} /></Form.Item></Col>
                <Col span={9} offset={1}><Form.Item><Input style={{ borderRadius: "18px", width: '100%', height: '50px', fontSize: '18px', background: '#FFF', borderColor: '#000' }} /></Form.Item></Col>
            </Row>
            <Row>
                <Col span={4} offset={2} style={{ fontSize: '18px', fontWeight: 'bold', color: '#064595' }}>Position</Col>
                <Col span={4} offset={7} style={{ fontSize: '18px', fontWeight: 'bold', color: '#064595' }}>Role</Col>
            </Row>
            <Row>
                <Col span={10} offset={2}><Form.Item ><SelectStyled showSearch size='large' optionFilterProp="children"></SelectStyled></Form.Item></Col>
                <Col span={9} offset={1}><Form.Item ><SelectStyled showSearch size='large' optionFilterProp="children"></SelectStyled></Form.Item></Col>
            </Row>
            <Row justify="center">
                <Col span={4} offset={13}>
                    <ButtonStyledd onClick={() => setModal({ visible: false })}
                    style={{ background: '#BFBFBF' }}>Cancel</ButtonStyledd>
                </Col>
                <Col span={4} offset={1}>
                    <ButtonStyledd style={{ background: '#F1BE44' }}>Submit</ButtonStyledd>
                </Col>
            </Row>
        </ModalStyled>
    )

}
const SelectStyled = styled(Select)`
  .ant-select-selector {
    border-radius: 18px !important;
    border-color: #000 !important;
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

export default GroupModal