import React from 'react';
import Header from '../app/Header';
import PostList from './PostList';
import DashboardSearch from './DashboardSearch';

const DashboardPage  = () => (
    <div>
        <Header />
        Welcome to your dashboard!
        <DashboardSearch />
        <PostList />
    </div>
)

export default DashboardPage;