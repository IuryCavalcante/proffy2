import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherList';
import TeacherList from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherForm} />
      <Route path="/give-classes" component={TeacherList} />
    </BrowserRouter>
  );
}

export default Routes;
