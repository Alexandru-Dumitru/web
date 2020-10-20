import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Home from './pages/home/home.page'
import Projects from './pages/projects/projects.page'
import Blog from './pages/blog/blog.page'
import Calendar from './pages/calendar/calendar.page'
import CV from './pages/cv/cv.page'
import Footer from './components/footer/footer.component';
function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/projects' exact component={Projects} />
         <Route path='/cv' exact component={CV} />
         <Route path='/blog' exact component={Blog} />
         <Route path='/calendar' exact component={Calendar} />
       </Switch>
       <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
