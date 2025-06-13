import React from 'react';
import { Button, message, Space } from 'antd';

const WalletPage: React.FC = () => {
  const handleClick = (): void => {
    message.success('Нажато!');
  };

  return (
    <Space direction="vertical" style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <h1>Привет это ваш кошелек.</h1>
      <Button type="primary" onClick={handleClick}>
        Нажми меня
      </Button>
    </Space>
  );
};

export default WalletPage;
