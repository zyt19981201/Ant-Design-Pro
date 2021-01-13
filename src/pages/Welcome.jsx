import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Col,Row } from 'antd'; 
import styles from './Welcome.less'; 
import ProCard  from '@ant-design/pro-card'; 
import DayBuys from '@/components/Charts/DayBuys';
import OrdersNum from '@/components/Charts/OrdersNum';
import UsersNum from '@/components/Charts/UsersNum';
import UndeliveredOrders from '@/components/Charts/UndeliveredOders';
import UpOrder from '@/components/Charts/UpOder';
import UpUser from '@/components/Charts/UpUser';
import UpBuys from '@/components/Charts/UpBuys';
 

export default () => {
 
  return (
    <PageContainer>  
        <ProCard direction="row" gutter={[18,18]} ghost> 
           
          <ProCard colSpan={6} layout="center" bordered bodyStyle={{ padding: 10 }}  >
           <DayBuys/>
          </ProCard>
          <ProCard colSpan={6} layout="center" bordered bodyStyle={{ padding: 10 }} >
            <OrdersNum/>
          </ProCard>
          <ProCard colSpan={6}  Layout="center" bordered>
            <UsersNum/>
          </ProCard>
          <ProCard colSpan={6}   layout="center" bordered>
            <UndeliveredOrders/>
          </ProCard>
        </ProCard>
        <Row gutter={[0,18]}>
           <Col span={24}><UpOrder/>
           </Col> 
        </Row>
      <Row gutter={[18,0]}>
        <Col span={12}>
          <UpUser/>
        </Col>
        <Col span={12}>
           <UpBuys/>
        </Col>
      </Row>
    </PageContainer>
  );
};
