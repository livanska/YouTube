import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UnauthenticatedRouter, routes as unauthenticatedRoutes } from './UnauthenticatedRouter';

//check if authenticated in future
export const routes = unauthenticatedRoutes;
export const RootRouter = () => (

    <Router><UnauthenticatedRouter/></Router>

  );