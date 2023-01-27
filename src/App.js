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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUirqAArdwX2sNRjRjzzuw1ZFtaCRKDa8",
  authDomain: "portfolio-bfd57.firebaseapp.com",
  projectId: "portfolio-bfd57",
  storageBucket: "portfolio-bfd57.appspot.com",
  messagingSenderId: "807431456604",
  appId: "1:807431456604:web:85dc3b7bd237dba2b5e399",
  measurementId: "G-EHGG6MVPCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const history = createBrowserHistory()
function App() {
  let location = useLocation();
  return (<>
      <Header></Header>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch history={history} location = {location}>
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
