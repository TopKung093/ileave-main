import { Button, Checkbox, Form, Input, Row, notification, Layout, Col, Card, Space } from 'antd';
import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import axios from "axios";
import Cookies from "js-cookie";
import CryptoJS from 'crypto-js';
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"

const { Header, Footer } = Layout;
const App: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation("translation")

  // const [username, setusername] = useState({ username: "" });
  // const [password, setpassword] = useState({ password: "" });

  const onFinish = async (values: any) => {
    console.log(
      "encypt : ",
      CryptoJS.AES.encrypt(values?.password, `${process.env.SECRET}`)
    )
    try {
      const encryptPassword = CryptoJS.AES.encrypt(
        values?.password,
        `${process.env.SECRET}`
      ).toString()
      const data = {
        username: values?.username,
        password: encryptPassword.trim(),
      }
      const result = await axios({
        method: "post",
        url: `/api/auth/login`,
        data: data,
      })
      if (result?.status === 200) {
        const user = result?.data?.data
        Cookies.set(
          "user",
          JSON.stringify({
            token: user?.token,
            username: user?.username,
            id: user?._id
          })
        )
        notification["success"]({
          message: t("loginpage-success"),
        })

        if (Cookies.get("user") !== undefined) {
          router.push("/")
        }
      } else if (result?.status === 500) {
        notification["error"]({
          message: t("loginpage-failed"),
        })
      }
    } catch (err) {
      console.log("error here :", err)
      notification["error"]({
        message: t("loginpage-failed"),
      })
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }


  return (
    <>

      <Row style={{ background: '#516BFF', height: '70px', paddingTop: '10px' }}>
        <Colstyled span={2} offset={1} ><Link href="../Statics"><img src="../images/LogoW.png" width='45%' /></Link></Colstyled>
      </Row>

      <Row justify="center" style={{ paddingTop: '100px' }}>

      </Row>

      <Row justify="center"
        style={{ marginTop: "0px", marginBottom: "100px" }}>
        <Col span={12} offset={18}>
          <Space direction="vertical" style={{ display: 'flex' }}>
            <Card style={{ borderRadius: "55px", background: "#fff", height: '100%', width: '50%', boxShadow: '5px 5px 10px lightblue' }} >
              <Formstyle
                name="basic"
                layout="vertical"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <img src="../images/iapp-test.png" width='100%' style={{ marginLeft: '-10px' }} />
                <Form.Item wrapperCol={{ offset: 3, span: 24 }} label="Username" name="username" required
                  rules={[{ required: true, message: 'Please input your username!' }]}
                  style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>
                  <Input name="username"
                    style={{ borderRadius: "24px", width: '300px', height: '40px' }} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 3, span: 24 }} label="Password" name="password" required
                  rules={[{ required: true, message: 'Please input your password!' }]}
                  style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', paddingTop: '10px' }}>
                  <Input.Password name="password" style={{ borderRadius: "20px", width: '300px', height: '40px' }} />
                </Form.Item>

                <Row justify="center">
                  <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 1, span: 24 }} >
                    <Checkbox style={{ fontSize: '16px', paddingTop: '20px' }}>Remember me</Checkbox>
                  </Form.Item></Row>
                <Row justify="center">
                  <Form.Item wrapperCol={{ offset: 1, span: 16 }}>
                    <Button type="primary" htmlType="submit"
                      style={{ borderRadius: "25px", fontWeight: "bold", height: '50px', width: '120px' }}>submit</Button>
                  </Form.Item></Row>
              </Formstyle>
            </Card>
          </Space></Col>
      </Row>

      <Footer style={{ background: '#516BFF', height: '80px' }}></Footer>

    </>
  );
};

const Formstyle = styled(Form)`
.ant-form-item-label > label {
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  height: 32px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  padding-left: 40px;
  color: #000;
}
`
const Colstyled = styled(Col)`
    margin-Top: -10px;
`

export default App;