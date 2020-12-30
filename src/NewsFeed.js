import { NavLink } from 'react-router-dom';
import React from 'react'
import MainContent from './MainContent'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const NewsFeed=()=>{
return (
    <>
<div className="container">
	<div className="row">
    <LeftContent/>
    <MainContent/>
    <RightContent/>
</div>
</div>
    </>
)
}
export default NewsFeed