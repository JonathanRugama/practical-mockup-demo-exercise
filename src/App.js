
import './App.css';

import './components/assets/css/layout.css'
import MainContainerLayout from './components/layout/main-container.layout';
import HeaderLayout from './components/layout/header.layout';
import MainContentLayout from './components/layout/main-content.layout';
import FooterLayout from './components/layout/footer.layout';

function App() {
  return (
    <MainContainerLayout>
        <HeaderLayout/>
        <MainContentLayout>

        </MainContentLayout>
        <FooterLayout/>
    </MainContainerLayout>
  );
}

export default App;
