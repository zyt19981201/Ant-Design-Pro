 
// import { ChartCard, Field, MiniArea, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts';
// import Trend from 'ant-design-pro/lib/Trend';
// import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import { Row, Col, Statistic, Tooltip,Typography, Divider, Card  } from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';
import React from 'react';
import {
  Chart,
  Area,
  Tooltip as Tt
} from 'bizcharts';
 

 
const OrdersNum=()=>{
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ];
      
       
return(
 
    <div style={{ width:'100%'}} >
    <Row>
      <Col span={20}>
        <Typography.Text  type="secondary">订单数量</Typography.Text>
      </Col>
      <Col span={4}>
        <Tooltip title="订单数量" ><InfoCircleOutlined /></Tooltip>
      </Col>
    </Row>
    <Row style={{  }}>
      <Col><Statistic  value={8846} /></Col>
    </Row>
    <Row style={{ width: "100%", height: 50 }} >
         
        <Chart pure height={50}  data={data} autoFit>
            <Tt /> 
            <Area position="year*value" />
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
export default OrdersNum