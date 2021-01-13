import request from '@/utils/request';

export async function salesReport({
  start,end
}) { 
const params={}
if(start && end){ 
  params.filter={
    start:start  ||'2020-09-09 00:00',
    end:end  ||'2020-09-10 00:00'
  }
} 
  return request('/api/admin/reports/sales',{
    params
  });
}
export async function ordersReport({start,end}){
  const params={}
  if(start && end){ 
    params.filter={
      start:start  ||'2020-09-09 00:00',
      end:end  ||'2020-09-10 00:00'
    }
  } 
  return request('/api/admin/reports/orders',{
    params
  })
}
export async function visitsReport({start,end}){
  const params={}
  if(start && end){ 
    params.filter={
      start:start  ||'2020-09-09 00:00',
      end:end  ||'2020-09-10 00:00'
    }
  } 
  return request('/api/admin/reports/visits',{
    params
  })
}
// params[`filter[start]`]=''