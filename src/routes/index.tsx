import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ListBranch from '../pages/Branches/ListBranch';
import EditBranch from '../pages/Branches/EditBranch';
import CreateBranch from '../pages/Branches/CreateBranch';
import ListEmploye from '../pages/Employees/ListEmploye';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/listBranch" component={ListBranch} />
      <Route path="/editBranch/:id" exact component={EditBranch} />
      <Route path="/createBranch" exact component={CreateBranch} />
      <Route path="/listEmployees" exact component={ListEmploye} />
    </Switch>
  );
};

export default Routes;
