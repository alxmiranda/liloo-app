import React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';
import PrivateRoute from './private-route';

// export const InvestmentFundListPageLodable = Loadable({
//   loader: () =>
//   import('containers/InvestmentFundListPage' /* webpackChunkName: "InvestmentFundListPage" */),
//   loading: () => <div>Loading</div>,
// });

export const HomeLodable = Loadable({
  loader: () =>
  import('containers/Site/Home' /* webpackChunkName: "Home" */),
  loading: () => <div>Loading</div>,
});

export const PageProfissionalLodable = Loadable({
  loader: () =>
  import('containers/Site/PageProfissional' /* webpackChunkName: "PageProfissionalLodable" */),
  loading: () => <div>Loading</div>,
});

export const RegisterPageLodable = Loadable({
  loader: () =>
  import('containers/Register' /* webpackChunkName: "Register" */),
  loading: () => <div>Loading</div>,
});

export const LoginPageLodable = Loadable({
  loader: () =>
  import('containers/Login' /* webpackChunkName: "Login" */),
  loading: () => <div>Loading</div>,
});

export const ProfilePageLodable = Loadable({
  loader: () =>
  import('containers/ProfilePage' /* webpackChunkName: "ProfilePage" */),
  loading: () => <div>Loading</div>,
});

export default () => (
  <Switch>
    <Route exact path="/" component={HomeLodable} />
    <Route exact path="/entrar" component={LoginPageLodable} />
    <Route exact path="/cadastro/:id" component={RegisterPageLodable} />
    <PrivateRoute exact path="/profissional/" component={PageProfissionalLodable} />
    <PrivateRoute exact path="/dashboard" component={ProfilePageLodable} />
    {/* <Route exact path="/fundos-de-investimento" component={InvestmentFundListPageLodable} /> */}
  </Switch>
);
