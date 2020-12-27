// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import MainContent from './MainContent'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
function App() {
  return (<>
    <Header/> 
    <LeftSidebar/>
    <RightSidebar/>
    <div className="header-spacer"/>

    <div className="container">
	<div class="row">
    <LeftContent/>
    <MainContent/>
    <RightContent/>

   {/* <LeftContent/>    */}

</div></div>
    </>
  );
}

export default App;
