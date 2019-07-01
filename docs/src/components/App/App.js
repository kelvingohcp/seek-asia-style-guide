import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { StyleGuideProvider, Constants } from 'seek-asia-style-guide/react';
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
import JobStreetHeader from '../../../../jobStreet/Header/Header';

const demoSpecs = demoSpecExports.concat(jobStreetDemoExports, jobsDBDemoExports).map(x => x.default);

const demoRoutes = demoSpecs.map(demoSpec => {
  const DemoRoute = () => <Demo spec={demoSpec} />;
  return <Route key={demoSpec.title} path={demoSpec.route} component={DemoRoute} />;
});

export default class App extends Component {
  state = {
    tenant: Constants.SEEKASIA
  };

  changeTenant = tenant => {
    this.setState({ tenant });
  }

  render() {
    const { tenant } = this.state;
    return (
      <StyleGuideProvider fullScreen={true} enableWebFont={true} tenant={tenant} >
        <Header country="hk" changeTenant={this.changeTenant} />
        <Route path="/" exact component={Home} />
        <Route path="/typography" component={Typography} />
        <Route path="/Colors" component={Colors} />
        <Route path="/page-layout" component={PageLayout} />
        <Route path="/playground" component={Playground} />
        <Route
          path="/sandbox"
          render={props => (
            <LoadSandbox {...props} brandedComponents={{ JobsDBHeader, JobStreetHeader }} />
          )}
        />
        <Route path="/sketch-exports" component={SketchExports} />
        {demoRoutes}
        <Switch>
          <Route path="/sandbox" render={() => null} />
          <Route component={Footer} />
        </Switch>
      </StyleGuideProvider>);
  }
}
