import React , { Component }from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Typography, Col,Row,Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less'; 
import ProCard,{ProCardTabs} from '@ant-design/pro-card';
// import { Line } from '@ant-designarts';
import DayBuys from '@/components/Charts/DayBuys';
import OrdersNum from '@/components/Charts/OrdersNum';
import UsersNum from '@/components/Charts/UsersNum';
import UndeliveredOrders from '@/components/Charts/UndeliveredOders';
import UpOrder from '@/components/Charts/UpOder';


// const CodePreview = ({ children }) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );

export default () => {
  const intl = useIntl();
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

  const config = {
    data,
    width: 300,
    height:230,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
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
        <Row >
           
            <UpOrder/>
          
        </Row>
      
    </PageContainer>
  );
};