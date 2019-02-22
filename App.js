import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import AlertPage from 'pages/AlertPage';
import AuthModalPage from 'pages/AuthModalPage';
import AuthPage from 'pages/AuthPage';
import BadgePage from 'pages/BadgePage';
import ButtonGroupPage from 'pages/ButtonGroupPage';
import ButtonPage from 'pages/ButtonPage';
//import CardPage from 'pages/CardPage';
import ChartPage from 'pages/ChartPage';
import CreateService from 'pages/servicetype/ServicetypeCreate';
import EditService from 'pages/servicetype/ServicetypeEdit';
import IndexService from 'pages/servicetype/ServicetypeIndex';
import CreateServiceStation from 'pages/servicestation/ServicestationCreate';
import EditServiceStation from 'pages/servicestation/ServicestationEdit';
import IndexServiceStation from 'pages/servicestation/ServicestationIndex';
// pages
import DashboardPage from 'pages/DashboardPage';
import DropdownPage from 'pages/DropdownPage';
import FormPage from 'pages/FormPage';
import InputGroupPage from 'pages/InputGroupPage';
import ModalPage from 'pages/ModalPage';
import ProgressPage from 'pages/ProgressPage';
import TablePage from 'pages/TablePage';
import TypographyPage from 'pages/TypographyPage';
import WidgetPage from 'pages/WidgetPage';
import Testk from 'pages/Testk';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import './styles/reduction.css';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />
            <LayoutRoute
              exact
              path="/login-modal"
              layout={MainLayout}
              component={AuthModalPage}
            />
            <LayoutRoute
              exact
              path="/"
              layout={MainLayout}
              component={DashboardPage}
            />
            <LayoutRoute
              exact
              path="/buttons"
              layout={MainLayout}
              component={ButtonPage}
            />
            <LayoutRoute
              exact
              path="/test"
              layout={MainLayout}
              component={Testk}
            />
            <LayoutRoute
              exact
              path="/create_service"
              layout={MainLayout}
              component={CreateService}
            />
            <LayoutRoute
              exact
              path="/edit_service/:id"
              layout={MainLayout}
              component={EditService}
            />
             <LayoutRoute
              exact
              path="/service-type-list"
              layout={MainLayout}
              component={IndexService}
            />   
            <LayoutRoute
              exact
              path="/create_servicestation"
              layout={MainLayout}
              component={CreateServiceStation}
            />
            <LayoutRoute
              exact
              path="/edit_servicestation/:id"
              layout={MainLayout}
              component={EditServiceStation}
            />
             <LayoutRoute
              exact
              path="/service-station-list"
              layout={MainLayout}
              component={IndexServiceStation}
            />
           
            <LayoutRoute
              exact
              path="/widgets"
              layout={MainLayout}
              component={WidgetPage}
            />
            <LayoutRoute
              exact
              path="/typography"
              layout={MainLayout}
              component={TypographyPage}
            />
            <LayoutRoute
              exact
              path="/alerts"
              layout={MainLayout}
              component={AlertPage}
            />
            <LayoutRoute
              exact
              path="/tables"
              layout={MainLayout}
              component={TablePage}
            />
            <LayoutRoute
              exact
              path="/badges"
              layout={MainLayout}
              component={BadgePage}
            />
            <LayoutRoute
              exact
              path="/button-groups"
              layout={MainLayout}
              component={ButtonGroupPage}
            />
            <LayoutRoute
              exact
              path="/dropdowns"
              layout={MainLayout}
              component={DropdownPage}
            />
            <LayoutRoute
              exact
              path="/progress"
              layout={MainLayout}
              component={ProgressPage}
            />
            <LayoutRoute
              exact
              path="/modals"
              layout={MainLayout}
              component={ModalPage}
            />
            <LayoutRoute
              exact
              path="/forms"
              layout={MainLayout}
              component={FormPage}
            />
            <LayoutRoute
              exact
              path="/input-groups"
              layout={MainLayout}
              component={InputGroupPage}
            />
            <LayoutRoute
              exact
              path="/charts"
              layout={MainLayout}
              component={ChartPage}
            />
            <LayoutRoute
              exact
              path="/register"
              layout={MainLayout}
              component={AuthPage}
            />
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
