import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { Home } from './components/Home/Home';
import DetailDog from './components/DetailDog/DetailDog';
import DogsCreateComponent from './components/Form/DogsCreateComponent';
function App() {
  return (
    <BrowserRouter>
      <Route exact path ={'/'} component = {LandingPage} />
      <Route path={'/home'} component={Home}/>
      <Route path={'/detail/:id'} component={DetailDog}/>
      <Route path={'/form'} component={DogsCreateComponent}/>
      
    </BrowserRouter>
    // <div className="App">
    //   <LandingPage/>
    // </div>
  );
}

export default App;
