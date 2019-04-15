import React from 'react';
import Header from '../app/Header';
import PostList from './PostList';

const DashboardPage  = () => (
    <div>
        <Header />
        Welcome to your dashboard!
        <PostList />
    </div>
)

export default DashboardPage;