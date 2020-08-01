import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Loader } from "./components";
import { linkPath1, linkPath2, linkPath3 } from "./variables";

const LinkPath1: React.LazyExoticComponent<() => JSX.Element> = lazy(() =>
  import("./pages/Main")
);
const LinkPath2: React.LazyExoticComponent<() => JSX.Element> = lazy(() =>
  import("./pages/Users")
);
const LinkPath3: React.LazyExoticComponent<() => JSX.Element> = lazy(() =>
  import("./pages/Design")
);

export default (): JSX.Element => (
  <Suspense fallback={<Loader size="large" />}>
    <Switch>
      <Route exact path={linkPath1}>
        <LinkPath1 />
      </Route>
      <Route exact path={linkPath2}>
        <LinkPath2 />
      </Route>
      <Route exact path={linkPath3}>
        <LinkPath3 />
      </Route>
      <Redirect to={linkPath1} />
    </Switch>
  </Suspense>
);
