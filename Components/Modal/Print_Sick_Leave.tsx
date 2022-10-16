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
    const dataSource = [
        {
            No: '',
            Date: '',
            Detail: '',
            Date_Start: '',
            Date_End: '',
        },
        {
            No: '',
            Date: '',
            Detail: '',
            Date_Start: '',
            Date_End: '',
        },
    ]
    const columns: any = [
        {
            title: 'ลำดับ',
            dataIndex: 'No',
            key: 'No',
            align: 'center',
        },
        {
            title: 'ว/ด/ป',
            dataIndex: 'Date',
            key: 'Date',
            align: 'center',
        },
        {
            title: 'รายละเอียด',
            dataIndex: 'Detaile',
            key: 'Detaile',
            align: 'center',
        },
        {
            title: 'วันที่เริ่มลา',
            dataIndex: 'Date_Start',
            key: 'Date_Start',
            align: 'center',
        },
        {
            title: 'สิ้นสุดการลา',
            dataIndex: 'Date_End',
            key: 'Date_End',
            align: 'center',
        },
    ]

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
                <Col span={20} style={{ fontSize: '22px', color: '#000',textAlign:'center',marginTop:'20px',fontFamily:'THSarabun Italic' }}>ใบลาป่วย</Col>
            </Row>
            <Row justify="center">
                <Col span={21} style={{paddingTop:'20px'}}><DividerStyled /></Col>
            </Row>
            <Row justify="center">
                <ColStyledFont span={21} style={{textAlign:'right'}}>เขียนที่...................................................</ColStyledFont>
                <ColStyledFont span={21} style={{textAlign:'right',fontFamily: "THSarabun"}}>วันที่...........เดือน.................พ.ศ................</ColStyledFont>
                <ColStyledFont span={21} >เรื่อง..................................................................................</ColStyledFont>
                <ColStyledFont span={21} >ขาพเจ้า..................................................................................ตำแหน่ง..................................................................</ColStyledFont>
                <ColStyledFont span={21} >ขอนุญาตลากิจ  เนื่องจาก....................................................................................................................................................</ColStyledFont>
                <ColStyledFont span={21} >ตั้งแต่วันที่...................เดือน.............................พ.ศ..................จนถึงวันที่.........................เดือน....................................</ColStyledFont>
                <ColStyledFont span={21} >พ.ศ....................................ในระหว่างลาป่วยนี้ได้รักษาตัวอยู่ที่  บ้านเลขที่...........................ถนน.....................................</ColStyledFont>
                <ColStyledFont span={21} >ตำบล............................................อำเภอ...............................................จังหวัด.........................................................</ColStyledFont>
                <ColStyledFont span={21} >ขาพเจ้า  ได้ลาป่วยอยู่เดิมแล้วในคลาวเดียวกันนี้...............................ครั้ง  รวม.............................วัน</ColStyledFont>
                <ColStyledFont span={21} style={{textAlign:'center',paddingTop: '20px'}}>ควรมีแล้วแต่จะกรุณา</ColStyledFont>
                <ColStyledFont span={21} style={{textAlign:'center',paddingTop: '100px',paddingBottom:'50px'}}>(ลงชื่อ)............................................................</ColStyledFont>
            </Row>
            <Row justify="center">
                <Col span={21} style={{paddingTop:'20px',paddingLeft:'20px'}}><DividerStyled /></Col>
                <ColStyledFont span={21} style={{paddingTop:'20px',fontSize:'22px'}}>สถิติการลาป่วยประจำปี</ColStyledFont>
                <Col span={21}><TableStyled style={{fontFamily: "THSarabun",paddingBottom: '50px'}} dataSource={dataSource} columns={columns} /></Col>
            </Row>

        </ModalStyled>
    )

}
const TableStyled = styled(Table)`
    .ant-select-selector {
        border-radius: 10px !important;
    }
    .ant-table {
        border-radius: 30px;
    }
    .ant-table-tbody>tr>td {
        transition: background 0.3s;
        background: #DEE7F1;
        border-bottom: 2px solid white;
        font-size: 18px;
    }
    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
    }
    .ant-table-thead>tr>th {
        position: relative;
        color: #000;
        background: #fff !important;
        font-size: 18px;
        border: 1px solid #000;
    }
    .ant-table-tbody>tr>td {
        /* border-bottom: 1px solid #000; */
        transition: background 0.3s;
        background: #fff;
        border: 1px solid #000;
        font-size: 18px;

    }
    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
        border: 1px solid #000;
    }
    .ant-table-tbody>tr >td : last-child{
        border-right: none;
        border: 1px solid #000;
    }
    .ant-table-pagination {
        display: none;
        flex-wrap: wrap;
        row-gap: 8px;
    }
`
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