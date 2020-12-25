import request from '@/utils/request';

export async function query({
  current,
  pageSize,
  sorter,
  number
}) {
  const params = {
    page_size: pageSize || 20,
    page: current || 1
  }

  if (sorter.paid_date) {
    const sort = sorter.paid_date === 'ascend' ? 'date' : '-date'
    params.sort = sort
  }
  if (number) {
    params.filter = {
      number
    }
  }

  return request('/api/admin/orders', {
    params
  });
}
