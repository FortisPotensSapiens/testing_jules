import React from 'react';
import { Button, message, Space } from 'antd';

const ProfilePage: React.FC = () => {
  const handleClick = (): void => {
    message.success('Нажато!');
  };

  return (
    <Space direction="vertical" style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 150px)' }}>
      <h1>Привет! Тут описание вашего профиля.</h1>
      <Button type="primary" onClick={handleClick}>
        Нажми меня
      </Button>
    </Space>
  );
};

export default ProfilePage;
