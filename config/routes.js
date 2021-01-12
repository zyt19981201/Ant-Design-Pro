/*
 * @Author: your name
 * @Date: 2020-12-24 10:58:44
 * @LastEditTime: 2021-01-12 10:30:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AntDesignPro\config\routes.js
 */
export default [{
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [{
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [{
          name: 'login',
          path: '/user/login',
          component: './user/login',
        }, ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [{
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              // 主页
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              // 订单
              {
                name: 'order',
                icon: 'file-text',
                path: '/list',
                // component: './ListTableList',
                routes: [{
                  path: '/list/allOrder',
                  name: 'list',
                  component: './ListTableList',
                  authority: ['admin'],
                },
                {
                  path: '/list/allOrder/:id',
                  name: 'detail',
                  component: './ListTableList/Detail',
                  hideInMenu:true,
                  authority: ['admin'],
                },
              ],
              },
              // 商品
              {
                path: '/goods',
                name: 'goods',
                icon: 'bars',
                // component: './Products',
                authority: ['admin'],
                routes: [{
                    path: '/goods/list',
                    name: '商品列表',
                    component: './Products',
                    authority: ['admin'],
                  },
                  {
                    path: '/goods/category',
                    name: '分类列表',
                    component: './Category',
                    authority: ['admin'],
                  },
                ],
              },
              // 顾客
              {
                name: 'list.customer-list',
                icon: 'user',
                path: '/customer',
                component: './CustomerList',
              },
              // 管理员
              // {
              //   path: '/admin',
              //   name: 'admin',
              //   icon: 'crown',
              //   component: './Admin',
              //   authority: ['admin'],
              //   routes: [{
              //     path: '/admin/sub-page',
              //     name: 'sub-page',
              //     icon: 'smile',
              //     component: './Welcome',
              //     authority: ['admin'],
              //   }, ],
              // },
              // 设置
              {
                name: 'list.setting-list',
                icon: 'setting',
                path: '/setting',
                component: './Setting',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
