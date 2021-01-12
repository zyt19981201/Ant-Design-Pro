import { Chart, Interval } from 'bizcharts';
import { Typography, Col,Row,Button,Tabs,Card } from 'antd';
import React from "react"
const data = [
  { year: '2014 年', sales: 38 },
  { year: '2015 年', sales: 52 },
  { year: '2016 年', sales: 61 },
  { year: '2017 年', sales: 45 },
  { year: '2018 年', sales: 48 },
  { year: '2019 年', sales: 38 },
  { year: '2020 年', sales: 38 },
  { year: '2021 年', sales: 38 },
];
const operations = <Button>Extra Action</Button>;


const UpOrder=()=> {

  return (
    
<Card>
<Tabs tabBarExtraContent={operations}>
        <Tabs.TabPane tab="订单趋势" key="1">
            <Chart height={300} autoFit data={data} >
                <Interval position="year*sales"  />
            </Chart> 
        </Tabs.TabPane>
         
      </Tabs>
</Card>
    
  )
}
export default UpOrder