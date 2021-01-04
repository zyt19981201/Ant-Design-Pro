/*
 * @Author: your name
 * @Date: 2020-12-24 11:50:36
 * @LastEditTime: 2021-01-04 11:09:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AntDesignPro\src\services\order.js
 */
import request from '@/utils/request';

export async function query({
  current,
  pageSize,
  sorter,
  number,
  order_total,
  paid_date,
  post_status,
  fulfillment_status,
  post_modified
}) {
  const params = {
    page_size: pageSize || 20,
    page: current || 1
  }

  if (sorter.paid_date) {
    const sort = sorter.paid_date === 'ascend' ? 'date' : '-date'
    params.sort = sort
  }
  // 根据订单编号查询
  if (number) {
    params['filter[search]']=number
  }
  
  // 根据付款时间查询
  if (paid_date) {
    params['filter[date]'] = paid_date
  }

  // 根据订单修改时间查询
  if (post_modified) {
    params['filter[post_modified_gmt]'] = post_modified
  }

  // 根据订单金额查询
  if (order_total) {
    params['filter[search]']=order_total
  }

  // 根据状态查询
  if (post_status) {
    params['filter[status]'] = post_status
  }

  // 根据发货状态查询
  if (fulfillment_status) {
    params['filter[fulfillment_status]'] = fulfillment_status
  }

  return request('/api/admin/orders', {
    params
  });
}
