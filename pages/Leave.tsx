import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar'
import LeaveModal from '../Components/Modal/Leave_Modal'
import PrintLeave from '../Components/Modal/Print_Leave'
import { Button, Form, Row, Col, Divider, DatePicker, Table, Switch } from 'antd';
import { SearchOutlined, DiffOutlined, FormOutlined, DeleteFilled, PrinterOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const App: React.FC = () => {
    const [modal, setModal] = useState({})
    const [modalprint, setModalprint] = useState({})
    const [newdataStart, setnewdataStart] = useState({})
    const [status, setStatus] = useState()
    const onChangeStatus = (checked: boolean) => {
        console.log(`switch to ${checked}`);
        // setStatus(checked)
    };

    const dataSource = [
        {
            No: '1',
            Start_Data: '06/06/6666',
            End_Data: '99/99/9999',
            LeaveType:'ลากิจ',
            Detail: '9VS8',
            status: false
        },
        {
            No: '2',
            Start_Data: '00/00/0000',
            End_Data: '99/99/9999',
            LeaveType:'ลาป่วย',
            Detail: 'PumiPol Sniper',
            status: false
        },
        {
            No: '3',
            Start_Data: '00/00/0000',
            End_Data: '99/99/9999',
            LeaveType:'อื่นๆ',
            Detail: 'LOL',
            status: false
        },

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
            title: 'ประเภทการลา',
            dataIndex: 'LeaveType',
            key:'LeaveType',
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
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={6} style={{marginRight:"20px"}}>
                        <Button onClick={() => setModal({visible: true})}
                        style={{ background: 'none',border:'none' }}>
                            <FormOutlined onClick={() => setModal({header: "แก้ไขกลุ่ม", status: "edit", visible: true, value: record})}
                            style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: '#064595',}} />
                            แก้ไข
                        </Button>
                    </Col>
                    <Col span={4} style={{marginRight:"40px",}}>
                        <Button 
                        onClick={() => setModalprint({visible: true, header: "ใบลากิจ",status: "Leave"})}
                        style={{background: 'none',border:'none' }} >
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
                <Col span={20} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '-10px' }}>Leave</p></Col>
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
                <Col span={15} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '30px' }}>Leave History</p></Col>
                <Col span={3} offset={2}><ButtonStyledd onClick={() => setModal({visible: true ,header: "Add Leave"})}
                icon={<DiffOutlined />} style={{ background: '#F1BE44', width: '65%', marginTop: '60px' }}>Add Leave</ButtonStyledd></Col>
            </Row>
            <Row justify="center">
                <Col span={22}><DividerStyledd /></Col>
            </Row>
            <Row justify='center' style={{ width: "100%", marginTop: "10px" }}>
                <TableStyled style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
            </Row>
            {LeaveModal(modal, setModal)}
            {PrintLeave(modalprint, setModalprint)}
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
    border-Radius:15px;
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