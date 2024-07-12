import { registerMicroApps } from '@ranger-theme/qiankun'

export const bootstrap = async () => {
  const isProd: boolean = import.meta.env.PROD

  await registerMicroApps([
    {
      name: 'ocloud__cms', // 必须与微应用注册名字相同
      entry: isProd ? '/ocloud/cms/' : 'http://127.0.0.1:3001', // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
      container: '#ocloud__cms', // 微应用挂载的节点
      activeRule: '/MES/CMS', // 当访问路由为 /MES/CMS/ 时加载微应用
      props: {
        namespace: 'cms' // 主应用向微应用传递参数
      }
    },
    {
      name: 'ocloud__i18n',
      entry: isProd ? '/ocloud/i18n/' : 'http://127.0.0.1:3002',
      container: '#ocloud__i18n',
      activeRule: '/MES/I18N',
      props: {
        namespace: 'i18n'
      }
    },
    {
      name: 'ocloud__seo',
      entry: isProd ? '/ocloud/seo/' : 'http://127.0.0.1:3003',
      container: '#ocloud__semo',
      activeRule: '/MES/SEO',
      props: {
        namespace: 'seo'
      }
    }
  ])
}
