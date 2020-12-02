//Global Styles
//Import Global Styles
import GlobalStyle from './components/GlobalStyle';

//Import Pages
import About from './pages/About';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';

//Router
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <About/>
        </Route>

        <Route path="/work">
          <OurWork/>
        </Route>
      
        <Route path="/contact">
          <ContactUs/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
