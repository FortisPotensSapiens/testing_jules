import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Layout as AntLayout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'; // Import some icons for the menu

const { Sider, Content, Header } = AntLayout;

const AppLayout: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  // Define menu items with keys, icons, and labels
  const menuItems = [
    {
      key: '/',
      icon: <InfoCircleOutlined />,
      label: <Link to="/">О нас</Link>,
    },
    {
      key: '/wallet',
      icon: <UserOutlined />, // Example icon
      label: <Link to="/wallet">Кошелек</Link>,
    },
    {
      key: '/profile',
      icon: <VideoCameraOutlined />, // Example icon
      label: <Link to="/profile">Мой профиль</Link>,
      children: [{
        key: '/vouchers',
        icon: <UploadOutlined />, // Example icon
        label: <Link to="/vouchers">Ваучеры</Link>,
      }]
    },
    {
      key: '/vouchers',
      icon: <UploadOutlined />, // Example icon
      label: <Link to="/vouchers">Ваучеры</Link>,
    },
  ];

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '6px', textAlign: 'center', color: 'white', lineHeight: '32px' }}>
          {collapsed ? 'VP' : 'Voucher Producer'}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
        />
      </Sider>
      <AntLayout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }} >
          {/* You can add a header content here if needed, or remove the Header component if not used */}
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 88px)' }}>
            <Outlet />
          </div>
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default AppLayout;
