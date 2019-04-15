import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardPage from '../components/dashboard/DashboardPage';
import AddPostPage from '../components/add-post/AddPostPage';

const AppRouter = () => (
    <BrowserRouter>
        <Route path='/' component={DashboardPage} exact={true}></Route>
        <Route path='/create' component={AddPostPage}></Route>
    </BrowserRouter>
)

export default AppRouter;