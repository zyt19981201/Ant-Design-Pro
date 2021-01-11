import React , { Component }from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Typography, Col,Row } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less'; 
import ProCard from '@ant-design/pro-card';
import { Line } from '@ant-design/charts';
import DayBuys from '@/components/Charts/DayBuys';
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
    width: 350,
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
        <ProCard direction="row" gutter={[0,8]} ghost>
          <ProCard colSpan={12} layout="center" bordered title="总销售额" tooltip="商品总销售额"> 
            <Line {...config} />
          </ProCard>
          <ProCard colSpan={12} layout="center" bordered>
            <DayBuys/>
          </ProCard>
        </ProCard>
       
      
    </PageContainer>
  );
};
