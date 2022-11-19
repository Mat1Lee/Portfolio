import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation
} from "react-router-dom";
import Header from './Components/Header/Header';
import {createBrowserHistory} from 'history'
import AboutMe from './Components/AboutMe/AboutMe';
import { AnimatePresence } from 'framer-motion';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
// import Blog from './Components/Blog/Blog';

export const history = createBrowserHistory()
function App() {
  let location = useLocation();
  return (<>
      <Header></Header>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location}>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <AboutMe></AboutMe>
          </Route>
          <Route path='/resume'>
            <Resume></Resume>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/projects'>
            <Projects></Projects>
          </Route>
        
        </Switch>
      </AnimatePresence>
      </>
  );
}

export default App;
