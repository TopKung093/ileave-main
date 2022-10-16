import React from 'react';
import { Col, Typography, Divider, Row, Button } from 'antd';
import styled from 'styled-components';

const HeaderTitle = (props: any) => {

  const title: string = props?.header
  const divider: boolean = props?.isDivider
  const isText: string = props.isText

  return (
    <>
      <Row style={{width: "100%"}}>
        <Col span={18}>
          <Typography
            style={{ fontSize: "46px", fontWeight: 200, fontFamily: "SukhumvitSet-Bold" }}
          >{title}
          </Typography>
        </Col>
        <Col span={6}>
          {isText !== "" && 
          <Typography className='summary-text'
            style={{ lineHeight: "46px", marginTop: "20px", fontWeight: 900 }}>{isText}
          </Typography>}
        </Col>
        {divider ? 
          <DividerStyled /> : <></>
        }
      </Row>
    </>
  )
}

const DividerStyled = styled(Divider)`
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  height: 2px !important;
  background: #516BFF;
  margin: 0px !important;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export default HeaderTitle