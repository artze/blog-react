import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardPage from '../components/dashboard/DashboardPage';
import AddPostPage from '../components/post-mgmt/AddPostPage';
import EditPostPage from '../components/post-mgmt/EditPostPage';
import ViewPostPage from '../components/post-mgmt/ViewPostPage';

const AppRouter = () => (
    <BrowserRouter>
        <Route path='/' component={DashboardPage} exact={true}></Route>
        <Route path='/create' component={AddPostPage}></Route>
        <Route path='/edit/:id' component={EditPostPage}></Route>
        <Route path='/post/:id' component={ViewPostPage}></Route>
    </BrowserRouter>
)

export default AppRouter;