import { Chart, Line } from 'bizcharts';
import { Typography, Col, Row, Button, Tabs, Card } from 'antd';
import React from "react"
const data = [
  { year: '2014 年', sales: 45 },
  { year: '2015 年', sales: 47 },
  { year: '2016 年', sales: 49 },
  { year: '2017 年', sales: 57 },
  { year: '2018 年', sales: 60 },
  { year: '2019 年', sales: 66 },
  { year: '2020 年', sales: 59 },
  { year: '2021 年', sales: 51 },
];


const UpBuys = () => {

  return (

    <Card>
      <Tabs>
        <Tabs.TabPane tab="销售额日增涨" key="1">
          <Chart height={300} autoFit data={data} >
            <Line shape="smooth" position="year*sales" />
          </Chart>
        </Tabs.TabPane>

      </Tabs>
    </Card>

  )
}
export default UpBuys