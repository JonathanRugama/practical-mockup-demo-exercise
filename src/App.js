
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './components/assets/css/layout.css'
import MainContainerLayout from './components/layout/main-container.layout';
import HeaderLayout from './components/layout/header.layout';
import MainContentLayout from './components/layout/main-content.layout';
import FooterLayout from './components/layout/footer.layout';

import IndexPage from './components/pages';


function App() {
  return (
    <BrowserRouter>
      <MainContainerLayout>
          <HeaderLayout/>
          <MainContentLayout>
            <Switch>
              <Route exact path="/" component={IndexPage}></Route>
            </Switch>
          </MainContentLayout>
          <FooterLayout/>
      </MainContainerLayout>
    </BrowserRouter>
  );
}

export default App;
