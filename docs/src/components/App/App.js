import React from 'react';
import { Route, Switch } from 'react-router';
import { StyleGuideProvider } from 'seek-asia-style-guide/react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from 'Home/Home';
import PageLayout from 'PageLayout/PageLayout';
import Typography from 'Typography/Typography';
import Colors from 'Colors/Colors';
import Playground from 'Playground/Playground';
import LoadSandbox from 'Sandbox/LoadSandbox';
import SketchExports from 'SketchExports/SketchExports';
import Demo from 'Demo/Demo';
import demoSpecExports from '../../../../react/*/*.demo.js';
import jobStreetDemoExports from '../../../../jobStreet/*/*.demo.js';
import jobsDBDemoExports from '../../../../jobsDB/*/*.demo.js';

import JobsDBHeader from '../../../../jobsDB/Header/Header';
import JobsDBFooter from '../../../../jobsDB/Footer/Footer';
import JobStreetHeader from '../../../../jobStreet/Header/Header';
import JobStreetFooter from '../../../../jobStreet/Footer/Footer';

const demoSpecs = demoSpecExports.concat(jobStreetDemoExports, jobsDBDemoExports).map(x => x.default);

const demoRoutes = demoSpecs.map(demoSpec => {
  const DemoRoute = () => <Demo spec={demoSpec} />;
  return <Route key={demoSpec.title} path={demoSpec.route} component={DemoRoute} />;
});

const tenant = process.env.APP_TENANT;

export default () => (
  <StyleGuideProvider fullScreen={true} title="SEEK Style Guide" enableWebFont={true}>
    <Header tenant={tenant} />
    <Route path="/" exact component={Home} />
    <Route path="/typography" component={Typography} />
    <Route path="/Colors" component={Colors} />
    <Route path="/page-layout" component={PageLayout} />
    <Route path="/playground" component={Playground} />
    <Route
      path="/sandbox"
      render={props => (
        <LoadSandbox {...props} brandedComponents={{ JobsDBFooter, JobsDBHeader, JobStreetHeader, JobStreetFooter }} />
      )}
    />
    <Route path="/sketch-exports" component={SketchExports} />
    { demoRoutes }
    <Switch>
      <Route path="/sandbox" render={() => null} />
      <Route component={Footer} />
    </Switch>
  </StyleGuideProvider>
);
