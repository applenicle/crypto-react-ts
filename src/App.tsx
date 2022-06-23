import React from 'react';
import './App.css';
import { Navbar } from './components';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Home, News, Currencies, Exchanges } from './pages';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cryptocurrencies" element={<Currencies />} />
              <Route path="/crypto/:coinId" element={<Exchanges />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Name <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
