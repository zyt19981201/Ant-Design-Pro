import React from 'react'
import ProCard from '@ant-design/pro-card';
import { Line } from '@ant-design/charts';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const DayBuys=()=>{
    return (
        <ProCard title="总销售额" tooltip="商品总销售额"  colSpan={8}>
            <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </ProCard>
    )
}
export default DayBuys