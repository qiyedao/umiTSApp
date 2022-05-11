import { Settings as LayoutSettings } from '@ant-design/pro-layout';
// layout 的配置
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'title',
  pwa: false,
  logo: 'logo',
  iconfontUrl: '',
};

export default Settings;
