import React, { useState, useEffect } from 'react';
import { Layout, Card, Col, Row,  Button, Divider} from 'antd';
import { query as queryCustomers } from '@/services/customer';

const { Header, Footer, Sider, Content } = Layout;
import { useIntl, FormattedMessage } from 'umi';
import { queryID } from '@/services/customer';
import { Table, Tag, Space } from 'antd';


export default () => {


  const [ID, setID] = useState(window.location.href?.substring(window.location.href?.lastIndexOf("/") + 1));
  const [res, setRes] = useState({});
  useEffect(async () => {
    // 更新文档的标题
    const res = await queryID(window.location.href?.substring(window.location.href?.lastIndexOf("/") + 1))
    setRes(res)
    console.log(res);

  }, [ID]);


  // 商品详情
  const dataSource0 = [
    {
      key: '1',
      order_item_id:res?.line_items&&res.line_items[0]?.order_item_id,
      order_item_name:res?.line_items&&res.line_items[0]?.order_item_name,
      price:res?.line_items&&res.line_items[0]?.price,
      qty:res?.line_items&&res.line_items[0]?.qty + '件',
      line_subtotal_tax:res?.line_items&&res.line_items[0]?.line_subtotal_tax
    },
  ];
  const columns0 = [
    {
      title: '商品编号',
      dataIndex: 'order_item_id',
      key: 'order_item_id',
      align: 'center'
    },
    {
      title: '商品名称',
      dataIndex: 'order_item_name',
      key: 'order_item_name',
      align: 'center'
    },
    {
      title: '商品价格',
      dataIndex: 'price',
      key: 'price',
      align: 'center'
    },
    {
      title: '件数',
      dataIndex: 'qty',
      key: 'qty',
      align: 'center'
    },
    {
      title: '优惠金额',
      dataIndex: 'line_subtotal_tax',
      key: 'line_subtotal_tax',
      align: 'center'
    },
  ];

  // 订单总览
  const dataSource1 = [
    {
      key: '1',
      number: res.number,
      name: res.post_name,
      post_date: res.post_date,
      status: res.post_status,
      methods: res.payment_method_title,
      order_shipping: res.order_currency + res.order_shipping,
      order_total: res.order_currency + res.order_total,
      date: res.paid_date,
      username: res.billing_user_name,
      note:res.note,
    },
  ];
  const columns1 = [
    {
      title: '订单号',
      dataIndex: 'number',
      key: 'number',
      align: 'center'
    },
    {
      title: '发布名称',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: '发布日期',
      dataIndex: 'post_date',
      key: 'post_date',
      align: 'center'
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      key: 'status',
      align: 'center'
    },
    {
      title: '付款方式',
      dataIndex: 'methods',
      key: 'methods',
      align: 'center'
    },
    {
      title: '物流费用',
      dataIndex: 'order_shipping',
      key: 'order_shipping',
      align: 'center'
    },
    {
      title: '订单总价',
      dataIndex: 'order_total',
      key: 'order_total',
      align: 'center'
    },
    {
      title: '付款日期',
      dataIndex: 'date',
      key: 'date',
      align: 'center'
    },
    {
      title: '账单用户名',
      dataIndex: 'username',
      key: 'username',
      align: 'center'
    },
    {
      title: '买家备注',
      dataIndex: 'note',
      key: 'note',
      align: 'center'
    },
  ];

  // 账单地址
  const dataSource2 = [
    {
      key: '1',
      first_name: res?.billing_address?.first_name,
      last_name: res?.billing_address?.last_name,
      address_1: res?.billing_address?.address_1,
      postcode: res?.billing_address?.postcode,
      city: res?.billing_address?.city,
      email: res?.billing_address?.email,
      phone: res?.billing_address?.phone,
      address_index: res?.billing_address?.address_index
    }
  ];
  const columns2 = [
    {
      title: '名字',
      dataIndex: 'first_name',
      key: 'first_name',
      align: 'center'
    },
    {
      title: '姓氏',
      dataIndex: 'last_name',
      key: 'last_name',
      align: 'center'
    },
    {
      title: '地址',
      dataIndex: 'address_1',
      key: 'address_1',
      align: 'center'
    },
    {
      title: '邮编',
      dataIndex: 'postcode',
      key: 'postcode',
      align: 'center'
    },
    {
      title: '城市编码',
      dataIndex: 'city',
      key: 'city',
      align: 'center'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      align: 'center'
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'phone',
      align: 'center'
    },
    {
      title: '详细地址',
      dataIndex: 'address_index',
      key: 'address_index',
      align: 'center'
    },
  ];

  // 账单地址
  const dataSource3 = [
    {
      key: '1',

    }
  ];
  const columns3 = [
    {
      title: '名字',
      dataIndex: 'first_name',
      key: 'first_name',
      align: 'center'
    },
  ];


  return (
    <Layout>
      <Layout >
            <Row >
              <Col span={18} style={{ margin: '10px' }}>
                <span>
                  订单编号:
                </span>
                <span>
                  {res.ID}
                </span>
              </Col>
              <Col span={18} style={{ margin: '10px' }}>
                <Card title="商品详情" bordered={false}>
                  <Table pagination={false} dataSource={dataSource0} columns={columns0} />
                </Card>
                <Card title="订单总览" bordered={true}>
                  <Table pagination={false} dataSource={dataSource1} columns={columns1} />
                </Card>
                <Card title="订单详情" bordered={false}>
                  <Table pagination={false} dataSource={dataSource2} columns={columns2} />
                </Card>
              </Col>
              <Col style={{ margin: '10px' }} span={5}>
            <Card title="订单信息" bordered={false}>
              <div>
                <span>订单状态:{res.post_status}</span>
              </div>
              <div>
              <span>订单金额:{'$' + res.order_total}</span>
              </div>
              <Divider />
              <div>
                <span>订单编号:{res.number}</span>
              </div>
              <div>
                <span>事务编号:{res.transaction_id}</span>
              </div>
              <div>
                <span>付款方式:{res.payment_method_title}</span>
              </div>
              <div>
                <span>生成时间:{res.post_date}</span>
              </div> 
              <div>
                <span>付款时间:{res.paid_date}</span>
              </div>
              <div>
                <span>订单物流:{'$' + res.order_shipping}</span>
              </div>
              <div>
                <span>买家备注:{res.note}</span>
              </div>             
            </Card>
          </Col>
            </Row>
            <Row type="flex" justify="center" align="middle" style={{marginTop:'10px'}}>
              <Button type="primary" >发货</Button>
            </Row>
      </Layout>
    </Layout>
  );
}
