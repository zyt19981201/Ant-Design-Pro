import {
    salesReport as sales,
    ordersReport as orders,
    visitsReport as visits,
    
  } from '@/services/report';
  
  const ReportModel = {
    namespace: 'report',
    state: {
      data: [],
    //   count:0,
      meta: {}
    },
    effects: {
      * fetch(_, {
        call,
        put
      }) {
        const response = yield call(sales);
        console.log('response', response)
        yield put({
          type: 'sales',
          payload: response,
        });
      },
      * fetchOrder(_, {
        call,
        put
      }) {
        const response = yield call(orders);
        console.log('order', response)
        yield put({
          type: 'orders',
          payload: response,
        });
      },
      * fetchVisit(_, {
        call,
        put
      }) {
        const response = yield call(visits);
        console.log('visits', response)
        yield put({
          type: 'visits',
          payload: response,
        });
      },
    },
    reducers: {
        sales(state, action) {
            const s=action.payload
            console.log("sales",s);
            return {
            ...state,
            sales: action.payload || {}
            };
        },
        orders(state,action){
            return{
                ...state,
                orders:action.payload || {}
            }
        },
        visits(state,action){
            return{
                ...state,
                visits:action.payload || {}
            }
        }
    },
  };
  export default ReportModel;
  