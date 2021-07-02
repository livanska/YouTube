import React from 'react';
import Layout from '../components/layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom';
import { UnauthenticatedRouter, routes as unauthenticatedRoutes } from './UnauthenticatedRouter';

//check if authenticated in future
export const routes = unauthenticatedRoutes;
export const RootRouter = () => (
  <Layout>
    <Router><UnauthenticatedRouter/></Router>
    </Layout>
  );