import React, { Children } from 'react'
import ProCard from '@ant-design/pro-card';
import { Line } from '@ant-design/charts';
import { Statistic, Card, Row, Col,Tooltip,Typography, Divider } from 'antd';
// import { ArrowUpOutlined, ArrowDownOutlined, CarTwoTone } from '@ant-design/icons';
import {InfoCircleOutlined} from '@ant-design/icons';
const Charts=({title,tooltip,value,footer,total})=>{
    // const {title,tooltip,value,footer,total}=this.props
    return (  
     
          <Row>
            <Row>
              <Col span={20}>
                <Typography.Text  type="secondary">{title}</Typography.Text>
              </Col>
              <Col span={4}>
                <Tooltip title={tooltip} ><InfoCircleOutlined /></Tooltip>
              </Col>
            </Row>
            <Row>
              <Col><Statistic  value={value} /></Col>
            </Row>
            <Row>
                {Children}
            </Row>
            
            <Divider type="horizontal" style={{margin:'10px 0'}} ></Divider>
            <Row>
              <Col>
              <Typography.Text  type="secondary">{{footer}}</Typography.Text> 
              </Col>
              <Col offset={3}>
              <Typography.Text  type="secondary">{{total}}</Typography.Text> 
              </Col>
            </Row>
            
          </Row>
        
    )
}
export default Charts