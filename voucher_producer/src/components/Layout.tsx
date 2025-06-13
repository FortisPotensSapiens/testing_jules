import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Layout as AntLayout, Menu } from 'antd';

const { Header, Content } = AntLayout;

const AppLayout: React.FC = () => {
  const location = useLocation();

  const items = [
    { key: '/', label: <Link to="/">О нас</Link> },
    { key: '/wallet', label: <Link to="/wallet">Кошелек</Link> },
    { key: '/profile', label: <Link to="/profile">Мой профиль</Link> },
    { key: '/vouchers', label: <Link to="/vouchers">Ваучеры</Link> },
  ];

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
          style={{ lineHeight: '64px' }}
        />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Outlet />
        </div>
      </Content>
    </AntLayout>
  );
};

export default AppLayout;
