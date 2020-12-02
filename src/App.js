//Global Styles
//Import Global Styles
import GlobalStyle from './components/GlobalStyle';

//Import Pages
import About from './pages/About';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
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

        <Route path="/work" exact>
          <OurWork/>
        </Route>

        <Route path="/work/:id">
          <MovieDetail/>
        </Route>
      
        <Route path="/contact">
          <ContactUs/>
        </Route>
        

      </Switch>
    </div>
  );
}

export default App;
