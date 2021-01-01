// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import {Switch, Route, Redirect } from 'react-router-dom';
import NewsFeed from './NewsFeed'
import Profile from './Profile'
import NotMesFri from './NotMesFri'

function App() {
  return (<>
 
    <Header/> 
    <LeftSidebar/>
    <RightSidebar/>
    <div className="header-spacer"/>
    <Switch>
  <Route exact path="/social-media" render={()=><NewsFeed/>}/>
  <Route exact path="/profile" render={()=><Profile/>}/>
  <Route path="/dash" render={()=><NotMesFri/>}/>
<Redirect exact path="/" to="/social-media"/>

  </Switch>
    
    </>
  );
}

export default App;
