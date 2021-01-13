 
import { Row, Col, Statistic, Tooltip,Typography, Divider, Card  } from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';
import React from 'react';
import {
  Chart,
  Area,
  Tooltip as Tt
} from 'bizcharts';
 
import {ordersReport} from "@/services/report"
const data1=async()=>{
  let res=await ordersReport({start:'2020-09-01 00:00',end:'2020-09-10 00:00'})
  let count = res.data?.reduce((num,item)=>num+item.value,0)
  console.log("data1",res.data,count);
  return res;
}
 
const OrdersNum=()=>{
  // console.log(data1());

    const data = 
     [
        { datetime: '1991', value: 3 },
        { datetime: '1992', value: 4 },
        { datetime: '1993', value: 3.5 },
        { datetime: '1994', value: 5 },
        { datetime: '1995', value: 4.9 },
        { datetime: '1996', value: 6 },
        { datetime: '1997', value: 7 },
        { datetime: '1998', value: 9 },
        { datetime: '1999', value: 13 },
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
            <Area  shape="smooth" position="datetime*value" />
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