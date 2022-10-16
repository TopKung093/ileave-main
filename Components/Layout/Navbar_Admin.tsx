import { Button, Checkbox, Form, Input, Row, Image, Layout, Col, Card, Space,Avatar } from 'antd';
import Images from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;
const App: React.FC = () => {
    return (
        <>
            <Row  justify="start" style={{ background: '#064595', height: '70px',paddingTop:'10px' }}>
                <Colstyled span={2} style={{textAlign: 'center'}}><img src="../images/LogoW.png" width='45%'/></Colstyled>
                <Colstyle span={2} ><img src="../images/Statics.png" width='50px' height='50px' style={{padding:'5px'}}/><Link href="../Statics">Statics</Link></Colstyle>
                <Colstyle span={2}><img src="../images/AddUserW.png" width='50px' height='50px' style={{padding:'5px'}}/><Link href="../Add_User">Add User</Link></Colstyle>
                <Colstyle span={2}><img src="../images/RQW.png" width='50px' height='50px' style={{padding:'5px'}}/><Link href="../Request">Request</Link></Colstyle>
                <Colstyle span={15} style={{paddingLeft:'10px',textAlign:'right',paddingRight:'20px'}}><Avatar size={52} src="../images/profile.png" style={{padding:'5px'}}></Avatar>ADMIN
                <Link href="../login"><img src="../images/Lo.png" width='50px' height='50px' style={{padding:'5px'}}/></Link></Colstyle>
            </Row>
        </>
    );
};


const Colstyle = styled(Col)`
    color: #fff;
    font-Weight: '300';
    font-Size: 20px;
    a {
        color: #fff;
`
const Colstyled = styled(Col)`
    margin-Top: -10px;
`

export default App;