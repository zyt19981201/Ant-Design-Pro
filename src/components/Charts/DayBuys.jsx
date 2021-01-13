import React from 'react'
import ProCard from '@ant-design/pro-card';
// import { Line } from '@ant-design/charts';
import { Statistic, Card, Row, Col,Tooltip,Typography, Divider } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CarTwoTone } from '@ant-design/icons';
import {InfoCircleOutlined} from '@ant-design/icons';
// import Charts from '@/components/Charts';
import {salesReport} from "@/services/report"
 
const data=async ()=>{
    const res=await salesReport({start:'2020-09-01 00:00',end:'2020-09-12 23:59'})
    const count = res.data?.reduce((num,item)=>num+item.value,0)
    console.log("data",res.data,count);
    return {data:res.data };
    }

const DayBuys=()=>{ 

  // console.log(data());  

    return (  
             
          <div style={{ width:'100%'}}>
            <Row>
              <Col span={20}>
                <Typography.Text  type="secondary">商品总额</Typography.Text>
              </Col>
              <Col span={4}>
                <Tooltip title="商品总销售额" ><InfoCircleOutlined /></Tooltip>
              </Col>
            </Row>
            <Row>
              <Col><Statistic  value={112893} /></Col>
            </Row>
            <Row justify="space-between" gutter={18}>
              <Col > 
                <Statistic
                  title="周同比"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600',fontSize:'15px' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Col> 
              <Col >
                <Statistic
                  title="日同比"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322',fontSize:'15px'  }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                /> 
              </Col>
            </Row>
            <Divider type="horizontal" style={{margin:'10px 0'}} ></Divider>
            <Row>
              <Col>
              <Typography.Text  type="secondary">商品总额</Typography.Text> 
              </Col>
              <Col offset={3}>
              <Typography.Text  type="secondary"> ¥ 12,423</Typography.Text> 
              </Col>
            </Row>
            
          </div>
        
    )
}
export default DayBuys



// <Charts title="商品总额" 
//               tooltip="商品销售总额" 
//               value="112893"
//               footer="商品总额"
//               total=" ¥ 12,423" >
//               <Row justify="space-between" gutter={18} key={1} >
//                 <Col > 
//                   <Statistic
//                     title="周同比"
//                     value={11.28}
//                     precision={2}
//                     valueStyle={{ color: '#3f8600',fontSize:'15px' }}
//                     prefix={<ArrowUpOutlined />}
//                     suffix="%"
//                   />
//                 </Col> 
//                 <Col >
//                   <Statistic
//                     title="日同比"
//                     value={9.3}
//                     precision={2}
//                     valueStyle={{ color: '#cf1322',fontSize:'15px'  }}
//                     prefix={<ArrowDownOutlined />}
//                     suffix="%"
//                   /> 
//                 </Col>
//               </Row>  
//             </Charts>