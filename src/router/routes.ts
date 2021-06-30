export const HomeRoute = '/';

export interface IRoute {
    path: string;
    component: React.ComponentType<any>;
    title?: string;
    exact?: boolean;
  }