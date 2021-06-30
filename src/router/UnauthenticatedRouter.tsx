import Home from '../pages/Home/Home'
import { Switch, Route } from 'react-router-dom'
import { HomeRoute, IRoute } from './routes'

export const routes: IRoute[] = [
    {
        path: HomeRoute,
        component: Home,
        exact: true
    }]

export const UnauthenticatedRouter = () => (
    <Switch>
        {routes.map(route => {
            return <Route key={route.path} {...route} />;
        })}
    </Switch>
);