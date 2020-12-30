// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import {Switch, Route } from 'react-router-dom';
import NewsFeed from './NewsFeed'
import Profile from './Profile'

function App() {
  return (<>
 
    <Header/> 
    <LeftSidebar/>
    <RightSidebar/>
    <div className="header-spacer"/>
    <Switch>
  <Route exact path="/" render={()=><NewsFeed/>}/>
  <Route exact path="/profile" render={()=><Profile/>}/>

  </Switch>
    
    </>
  );
}

export default App;
