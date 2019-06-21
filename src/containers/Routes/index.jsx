import React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';

// export const InvestmentFundListPageLodable = Loadable({
//   loader: () =>
//   import('containers/InvestmentFundListPage' /* webpackChunkName: "InvestmentFundListPage" */),
//   loading: () => <div>Loading</div>,
// });

export const HomeLodable = Loadable({
  loader: () => ('containers/Site/Home' /* webpackChunkName: "Home" */),
  loading: () => <div>Loading</div>,
});

export const PageProfissionalLodable = Loadable({
  loader: () => ('containers/Site/PageProfissional' /* webpackChunkName: "PageProfissionalLodable" */),
  loading: () => <div>Loading</div>,
});

export const RegisterPageLodable = Loadable({
  loader: () => ('containers/Register' /* webpackChunkName: "Register" */),
  loading: () => <div>Loading</div>,
});

export const LoginPageLodable = Loadable({
  loader: () => ('containers/Login' /* webpackChunkName: "Login" */),
  loading: () => <div>Loading</div>,
});

export const ProfilePageLodable = Loadable({
  loader: () => ('containers/ProfilePage' /* webpackChunkName: "ProfilePAge" */),
  loading: () => <div>Loading</div>,
});

export default () => (
  <Switch>
    <Route exact path="/" component={HomeLodable} />
    <Route exact path="/profissional/" component={PageProfissionalLodable} />
    <Route exact path="/cadastro/:id" component={RegisterPageLodable} />
    <Route exact path="/entrar" component={LoginPageLodable} />
    <Route exact path="/dashboard" component={ProfilePageLodable} />
    {/* <Route exact path="/fundos-de-investimento" component={InvestmentFundListPageLodable} /> */}
  </Switch>
);
