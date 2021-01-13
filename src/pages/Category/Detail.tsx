import React, { useState, useEffect } from 'react';
import { Layout, Card, Col, Row, Button, Divider, Input, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { query as queryCategories } from '@/services/categories';

const { Header, Footer, Sider, Content } = Layout;
import { useIntl, FormattedMessage } from 'umi';
import { queryID } from '@/services/categories';
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
  const id = res.term_taxonomy_id

  return (
    <Layout>
      <Row>
        <Col span={24}>
          <Card style={{ width: '80%', marginLeft: '20px' }}>
            <h1 style={{ fontWeight: 'bold' }}>分类名称</h1>
            {res?.term_taxonomy_id && <Input defaultValue={res.term_taxonomy_id} style={{ width: '30%' }} />}
            <Divider />
            <h1 style={{ fontWeight: 'bold' }}>商品图片</h1>
            {res?.thumbnail_url && <img src={res.thumbnail_url} style={{ width: '100px', height: '100px' }} />}
            <Divider />
            <h1 style={{ fontWeight: 'bold' }}>分类描述</h1>
            <p>富文本编辑器</p>
          </Card>,
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle" style={{ marginTop: '10px' }}>
        <Button type="primary" onClick={() => {
          console.log('保存');
        }}>保存</Button>
      </Row>

    </Layout>
  );
}
