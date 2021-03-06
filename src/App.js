
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './components/assets/css/layout.css'
import MainContainerLayout from './components/layout/main-container.layout';
import HeaderLayout from './components/layout/header.layout';
import MainContentLayout from './components/layout/main-content.layout';
import FooterLayout from './components/layout/footer.layout';

import IndexPage from './components/pages';
import CreateEmployee from './components/pages/create-employee';
import UpdateEmployee from './components/pages/update-employee';


function App() {
  return (
    <BrowserRouter>
      <MainContainerLayout>
          <HeaderLayout/>
          <MainContentLayout>
            <Switch>
              <Route exact path="/" component={IndexPage}></Route>
              <Route exact path="/employee/new" component={CreateEmployee}></Route>
              <Route exact path="/employee/:employeeId/edit" component={UpdateEmployee}></Route>
            </Switch>
          </MainContentLayout>
          <FooterLayout/>
      </MainContainerLayout>
    </BrowserRouter>
  );
}

export default App;
