import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar'
import RequestToOffsiteModal from '../Components/Modal/Leave_Modal'
import PrintRequestToOffsite from '../Components/Modal/Print_Leave'
import React, { useState } from 'react'
import { Button, Form, Row, Col, Divider, DatePicker, Table, Switch } from 'antd';
import { SearchOutlined, DiffOutlined, FormOutlined, DeleteFilled, PrinterOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const App: React.FC = () => {
    const [modal, setModal] = useState({})
    const [modalprintreqesttooffsite, setModalprintreqesttooffsite] = useState({})
    const [status, setStatus] = useState()

    const onChangeStatus = (checked: boolean) => {
        console.log(`switch to ${checked}`);
        // setStatus(checked)
    };
    
    const dataSource = [
        {
            No: '',
            Start_Data: '',
            End_Data: '',
            Detail: '',
            status: false
        },
        {
            No: '',
            Start_Data: '',
            End_Data: '',
            Detail: '',
            status: false
        }

    ];
    const columns: any = [
        {
            title: 'ลำดับ',
            dataIndex: 'No',
            key: 'No',
            align: 'center',
        },
        {
            title: 'วันที่เริ่ม',
            dataIndex: 'Start_Data',
            key: 'Start_Data',
            align: 'center',
        },
        {
            title: 'วันที่สิ้นสุด',
            dataIndex: 'End_Data',
            key: 'End_Datao',
            align: 'center',
        },
        {
            title: 'รายละเอียด',
            dataIndex: 'Detail',
            key: 'Detail',
            align: 'center',
        },
        {
            title: 'สถานะ',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            width: "15%",
            render: (_: any, record: any) => (
                <Switch defaultChecked={record?.status} onChange={onChangeStatus} />
            )
        },
        {
            title: 'การจัดการ',
            dataIndex: 'management',
            key: 'management',
            align: 'center',
            width: '30%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={8} style={{ width: "100%" }}>
                    <Col span={6}>
                        <Button onClick={() => setModal({header: "เพิ่มกลุ่ม", status: "add", visible: true})}
                        style={{ background: '#DEE7F1' }}>
                            <FormOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: '#064595' }} />
                            แก้ไข
                        </Button>
                    </Col>
                    <Col span={4}>
                        <Button onClick={() => setModalprintreqesttooffsite({visible: true, header: "เอกสารปฏิบัติงานนอกสถานที่",status: "Request-to-offsite"})}
                        style={{ background: '#DEE7F1' }}>
                            <PrinterOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#979797" }} />
                        </Button>
                    </Col>
                    
                </Row>
            ),
        },
    ];
        return (
            <>
                <NavbarHead />
                <Row>
                    <Col span={20} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '-10px' }}>Request to offsite</p></Col>
                </Row>
                <Row justify="center">
                    <Col span={22}><DividerStyled /></Col>
                </Row>
                <Row justify="center">
                    <Col span={11} >
                        <Form.Item><DatePickerStyled /><ArrowRightOutlinedStyled /><DatePickerStyled /></Form.Item></Col>
                    <Col span={3} offset={0}><ButtonStyledd icon={<SearchOutlined />} style={{ background: '#F1BE44', width: '150px' }}>Search</ButtonStyledd></Col>
                </Row>
                <Row>
                    <Col span={15} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '30px' }}>offsite History</p></Col>
                    <Col span={3} offset={2}>
                        <ButtonStyledd onClick={() => setModal({ status: "add", visible: true , header: "Add Request to offsite"})}
                        icon={<DiffOutlined />} style={{ background: '#F1BE44', width: '65%', marginTop: '60px' }}>Add offsite</ButtonStyledd></Col>
                </Row>
                <Row justify="center">
                    <Col span={22}><DividerStyledd /></Col>
                </Row>
                <Row justify='center' style={{ width: "100%", marginTop: "10px" }}>
                    <TableStyled style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
                    
                </Row>
                {RequestToOffsiteModal(modal, setModal)}
                {PrintRequestToOffsite(modalprintreqesttooffsite, setModalprintreqesttooffsite)}
            </>
        );
    };


const ArrowRightOutlinedStyled = styled(ArrowRightOutlined)`
    width: 20% ;
`
const DatePickerStyled = styled(DatePicker)`
    width: 35% ;
    border-Color: #BFBFBF;
    height: 50px;
    border-Radius: 20px;
    background: #fff;
`
const DividerStyled = styled(Divider)`
    background: #064595 ;
    height: 2px;
    margin-top: -50px;
`
const DividerStyledd = styled(Divider)`
    background: #064595 ;
    height: 2px;
    margin-top: -60px;
`
const ButtonStyledd = styled(Button)`
    color: #064595;
    height: 50px;
    border-Radius:20px;
    font-Size: 16px;
    fontFamily: Semi Bold;
    font-weight: bold;
    
`
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
        font-size: 16px;
        font-weight: 900;
    }

    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
    }

    .ant-table-thead>tr>th {
        position: relative;
        color: white;
        background: #064595 !important;
        font-size: 18px;
        border-right: 1px solid white;
        border-left: 1px solid white;
    }

    .ant-table-tbody>tr>td {
        /* border-bottom: 1px solid #f0f0f0; */
        transition: background 0.3s;
        background: #DEE7F1;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        font-size: 16px;
        font-weight: 900;
    }

    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
    }

    .ant-table-tbody>tr >td : last-child{
        border-right: none;
    }
`

export default App;

