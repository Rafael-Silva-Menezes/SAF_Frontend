import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import ListBranch from '../pages/Branches/ListBranch';
import EditBranch from '../pages/Branches/EditBranch';
import CreateBranch from '../pages/Branches/CreateBranch';
import DeleteBranch from '../pages/Branches/DeleteBranch';

import ListEmploye from '../pages/Employees/ListEmploye';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/createBranch" exact component={CreateBranch} isPrivate />
      <Route path="/listBranch" component={ListBranch} isPrivate />
      <Route path="/editBranch/:id" exact component={EditBranch} isPrivate />
      <Route
        path="/deleteBranch/:id"
        exact
        component={DeleteBranch}
        isPrivate
      />

      <Route
        path="/listEmployees/:id"
        exact
        component={ListEmploye}
        isPrivate
      />
    </Switch>
  );
};

export default Routes;
