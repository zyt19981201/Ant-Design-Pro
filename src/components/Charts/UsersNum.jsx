import { Row, Col, Statistic, Tooltip,Typography, Divider, Card  } from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';
import React from 'react';
import {
  Chart,
  Interval,
  Tooltip as Tt
} from 'bizcharts';
 

 
const UsersNum=()=>{
    const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 155 },
        { genre: 'Action', sold: 230 },
        { genre: 'Shooter', sold: 250 },
        { genre: 'Other', sold: 450 },
        { genre: 'qa', sold: 23 },
        { genre: 'wqqa', sold: 245 },
        { genre: 'dfdgg', sold: 222 } 
      ];
       
return(
 
    <div style={{ width:'100%'}} >
    <Row>
      <Col span={20}>
        <Typography.Text  type="secondary">用户数量</Typography.Text>
      </Col>
      <Col span={4}>
        <Tooltip title="用户数量" ><InfoCircleOutlined /></Tooltip>
      </Col>
    </Row>
    <Row style={{  }}>
      <Col><Statistic  value={8846} /></Col>
    </Row>
    <Row style={{ width: "100%", height: 50 }} >
        <Chart data={data} autoFit pure >
            <Tt/>
            <Interval position="genre*sold" />
        </Chart> 
    </Row>
    <Divider type="horizontal" style={{margin:'10px 0'}} ></Divider>
    <Row>
      <Col>
      <Typography.Text  type="secondary">今日新增</Typography.Text> 
      </Col>
      <Col offset={3}>
      <Typography.Text  type="secondary"> 12,423</Typography.Text> 
      </Col>
    </Row>
    
  </div>
      
 
)}
export default UsersNum