import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/home/home.page'
import Projects from './pages/projects/projects.page'
// import CV from './pages/CV/CV.page'
import Footer from './components/footer/footer.component';
function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/projects' exact component={Projects} />
         <Route path='/cv' exact component={Projects} />
         <Route path='/blog' component={() => { 
     window.location.replace('https://medium.com/@dumitru.alex0');
     return null; }} />
         <Route path='/GitHub' component={() => { 
     window.location.replace('https://github.com/dumitru-alex'); 
     return null; }} />
         <Route path='/LinkedIn' component={() => { 
     window.location.replace('https://www.linkedin.com/in/alexandru-paul-dumitru'); 
     return null; }} />
       </Switch>
       <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
