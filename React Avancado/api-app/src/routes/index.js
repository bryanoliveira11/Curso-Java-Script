import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import StudentDelete from '../pages/Student/StudentDelete';
import StudentEdit from '../pages/Student/StudentEdit';
import Students from '../pages/Students';
import Photos from '../pages/Photos';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Switch>
      <MyRoute
        exact
        path="/student/:id/edit"
        component={StudentEdit}
        isClosed
      />
      <MyRoute
        exact
        path="/student/:id/delete"
        component={StudentDelete}
        isClosed
      />
      <MyRoute exact path="/" component={Students} isClosed={false} />
      <MyRoute exact path="/photos/:id" component={Photos} isClosed />
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute exact path="/register" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
