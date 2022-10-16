import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Form, Select, Button, Divider, Table, DatePicker } from 'antd'

import styled from 'styled-components'


const { RangePicker } = DatePicker;
const GroupModal = (
    modalprintsickleave: any,
    setModalprintsickleave: any) => {

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
            groupname: modalprintsickleave?.value?.group, //form.item > name="name"
            status: 1, //form.item > name="status"
        })
    }, [modalprintsickleave, setModalprintsickleave])
    

    return (

        <ModalStyled
            visible={modalprintsickleave?.visible}
            footer={false}
            width={1200}
            onCancel={() => setModalprintsickleave({ visible: false })}>
            <Row justify="center" >
                <Col span={20} offset={15}><img src="../images/logogo.png" width='25%' /></Col>
            </Row>
            <Row justify="center">
                <Col span={20} style={{ fontSize: '22px', color: '#000',textAlign:'center',marginTop:'20px',fontFamily:'THSarabun Italic' }}>เอกสารปฏิบัติงานนอกสถานที่</Col>
            </Row>
            <Row justify="center">
                <Col span={21} style={{paddingTop:'20px'}}><DividerStyled /></Col>
            </Row>
            <Row justify="center">
                <ColStyledFont span={21} >เรียน  ผู้อำนวยการฝ่ายบุคคล</ColStyledFont>
                <ColStyledFont span={21} >ขาพเจ้า..................................................................................ตำแหน่ง..................................................................</ColStyledFont>
                <ColStyledFont span={21} >แผนก................................................ขอนุญาตปฎิบัติงานนอกสถานที่..........................................................</ColStyledFont>
                <ColStyledFont span={21} >รายละเอียด.................................................................................................................................................................</ColStyledFont>
                <ColStyledFont span={21} >...........................................................................................................................................................................</ColStyledFont>
                <ColStyledFont span={21} >ในวันที่...........................................................เวลา.....................................................................................น.</ColStyledFont>
                <ColStyledFont span={21} >ระยะทางในการเดินทาง(ขาไป).................................ระยะทางในการเดินทาง(ขากลับ)..............................</ColStyledFont>
                <ColStyledFont span={21} >งบประมาณในการเดินทาง....................................................................บาท</ColStyledFont>
                <ColStyledFont span={21} style={{textAlign:'right',paddingTop: '100px'}}>(ลงชื่อหัวหน้าแผนก)</ColStyledFont>
                <ColStyledFont span={21} style={{textAlign:'right'}}>.........................................</ColStyledFont>
                <ColStyledFont span={21} style={{textAlign:'right'}}>(.........................................)</ColStyledFont>
                <ColStyledFont span={21} style={{textAlign:'right'}}>........./....................../..........</ColStyledFont>
            </Row>
            
        </ModalStyled>
    )

}

const ColStyledFont = styled(Col)`
    font-Size: 18px;
    color: #000;
    text-Align:left;
    margin-Top:20px;
    font-family:THSarabun ;
`

const ButtonStyledd = styled(Button)`
    color: #064595;
    height: 40px;
    border-Radius:20px;
    font-Size: 16px;
    font-Family: Semi Bold;
    font-weight: bold;
    width: 100%;
`
const DividerStyled = styled(Divider)`
    background: #000 ;
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