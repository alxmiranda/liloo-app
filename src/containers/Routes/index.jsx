import React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';

// export const InvestmentFundListPageLodable = Loadable({
//   loader: () =>
//   import('containers/InvestmentFundListPage' /* webpackChunkName: "InvestmentFundListPage" */),
//   loading: () => <div>Loading</div>,
// });

export const HomeLodable = Loadable({
  loader: () =>
  import('components/Home' /* webpackChunkName: "Home" */),
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

export default () => (
  <Switch>
    <Route exact path="/" component={HomeLodable} />
    <Route exact path="/cadastro" component={RegisterPageLodable} />
    <Route exact path="/entrar" component={LoginPageLodable} />
    {/* <Route exact path="/fundos-de-investimento" component={InvestmentFundListPageLodable} /> */}
  </Switch>
);

<Route exact path="/cadastro" component={RegisterPageLodable} />