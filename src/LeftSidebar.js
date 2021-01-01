import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'

const LeftSidebar=()=>{
    var [leftSidebar, setleftSidebar] = useState(true)
    var leftSidebarClass=(leftSidebar==true)?"fixed-sidebar":"fixed-sidebar open";
	const setLeftToggle=()=>{setleftSidebar(!leftSidebar)}
	
	var [leftSidebarMobile, setleftSidebarMobile] = useState(true)
    var leftSidebarClassMobile=(leftSidebarMobile==true)?"fixed-sidebar fixed-sidebar-responsive":"fixed-sidebar fixed-sidebar-responsive open";
	const setLeftToggleMobile=()=>{setleftSidebarMobile(!leftSidebarMobile)}
	const closeSidebarMobile=()=>setLeftToggleMobile(true)
	

    return(
        <>
         {/* Fixed Sidebar Left */}

<div className={leftSidebarClass}>
	<div className="fixed-sidebar-left sidebar--small" id="sidebar-left">

		<NavLink to="/social-media" className="logo">
			<div className="img-wrap">
				<img src="img/logo.png" alt="Ro'Codes"/>
			</div>
		</NavLink>

		<div className="mCustomScrollbar" data-mcs-theme="dark">
			<ul className="left-menu">
				<li>
					<a href="#" onClick={setLeftToggle} className="js-sidebar-open">
						<svg className="olymp-menu-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="OPEN MENU"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
					</a>
				</li>
				<li>
					<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"   data-original-title="NEWSFEED"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
					</NavLink>
				</li>
				<li>

				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-happy-faces-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FRIEND GROUPS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use></svg>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-headphones-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-headphones-icon"></use></svg>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-weather-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="WEATHER APP"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-weather-icon"></use></svg>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-calendar-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="CALENDAR AND EVENTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-badge-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Community Badges"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-badge-icon"></use></svg>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-cupcake-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Friends Birthdays"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-stats-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Account Stats"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-stats-icon"></use></svg>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-manage-widgets-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Manage Widgets"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"></use></svg>
					</NavLink>
				</li>
			</ul>
		</div>
	</div>

	<div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
	<NavLink to="/social-media" className="logo">
			<div className="img-wrap">
				<img src="img/logo.png" alt="Ro'Codes"/>
			</div>
			<div className="title-block">
				<h6 className="logo-title">Ro'Codes</h6>
			</div>
		</NavLink>

		<div className="mCustomScrollbar" data-mcs-theme="dark">
			<ul className="left-menu">
				<li>
					<a href="#" onClick={setLeftToggle} className="js-sidebar-open">
						<svg className="olymp-close-icon left-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
						<span className="left-menu-title">Collapse Menu</span>
					</a>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">

						<svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"   data-original-title="NEWSFEED"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
						<span className="left-menu-title">Newsfeed</span>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">

						<svg className="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
						<span className="left-menu-title">Fav Pages Feed</span>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-happy-faces-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FRIEND GROUPS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use></svg>
						<span className="left-menu-title">Friend Groups</span>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-headphones-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-headphones-icon"></use></svg>
						<span className="left-menu-title">Music & Playlists</span>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-weather-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="WEATHER APP"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-weather-icon"></use></svg>
						<span className="left-menu-title">Weather App</span>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-calendar-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="CALENDAR AND EVENTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
						<span className="left-menu-title">Calendar and Events</span>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-badge-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Community Badges"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-badge-icon"></use></svg>
						<span className="left-menu-title">Community Badges</span>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-cupcake-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Friends Birthdays"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
						<span className="left-menu-title">Friends Birthdays</span>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-stats-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Account Stats"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-stats-icon"></use></svg>
						<span className="left-menu-title">Account Stats</span>
					</NavLink>
				</li>
				<li>
				<NavLink onClick={setLeftToggle} to="/social-media">
						<svg className="olymp-manage-widgets-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Manage Widgets"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"></use></svg>
						<span className="left-menu-title">Manage Widgets</span>
					</NavLink>
				</li>
			</ul>

			<div className="profile-completion">

				<div className="skills-item">
					<div className="skills-item-info">
						<span className="skills-item-title">Profile Completion</span>
						<span className="skills-item-count"><span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="76" data-from="0"></span><span className="units">76%</span></span>
					</div>
					<div className="skills-item-meter">
						<span className="skills-item-meter-active bg-primary" style={{width:" 76%"}}></span>
					</div>
				</div>

				<span>Complete<NavLink onClick={closeSidebarMobile} to="/social-media">your profile</NavLink>
				 so people can know more about you!</span>

			</div>
		</div>
	</div>
</div>

{/* <!-- ... end Fixed Sidebar Left --> */}


{/* <!-- Fixed Sidebar Left --> */}

<div className={leftSidebarClassMobile}>

	<div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
		<a href="#" onClick={setLeftToggleMobile} className="logo js-sidebar-open">
			<img src="img/logo.png" alt="Ro'Codes"/>
		</a>

	</div>

	<div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
		<a href="#" className="logo">
			<div className="img-wrap">
				<img src="img/logo.png" alt="Ro'Codes"/>
			</div>
			<div className="title-block">
				<h6 className="logo-title">Ro'Codes</h6>
			</div>
		</a>

		<div className="mCustomScrollbar" data-mcs-theme="dark">

			<div className="control-block">
				<div className="author-page author vcard inline-items">
					<div className="author-thumb">
						<img alt="author" src="img/author-page.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>
					<NavLink onClick={closeSidebarMobile} to="/" className="author-name fn">
						<div className="author-title">
							Rohit Parakh <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
						</div>
						<span className="author-subtitle">Professional Cricketer</span>
					</NavLink>
				</div>
			</div>

			<div className="ui-block-title ui-block-title-small">
				<h6 className="title">MAIN SECTIONS</h6>
			</div>

			<ul className="left-menu mobile">
				<li>
					<a href="#" onClick={setLeftToggleMobile} className="js-sidebar-open">
						<svg className="olymp-close-icon left-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
						<span className="left-menu-title">Collapse Menu</span>
					</a>
				</li>
				<li>
					<NavLink onClick={closeSidebarMobile} to="/social-media">
						<svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"   data-original-title="NEWSFEED"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
						<span className="left-menu-title">Newsfeed</span>
					</NavLink>
				</li>
				<li>
				
				<NavLink onClick={closeSidebarMobile} to="/social-media">
						<svg className="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
						<span className="left-menu-title">Fav Pages Feed</span>
					</NavLink>
				</li>
				<li>
			
				<NavLink onClick={closeSidebarMobile} to="/social-media">
						<svg className="olymp-happy-faces-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FRIEND GROUPS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use></svg>
						<span className="left-menu-title">Friend Groups</span>
					</NavLink>
				</li>
				<li>

				<NavLink onClick={closeSidebarMobile} to="/social-media">
						<svg className="olymp-headphones-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-headphones-icon"></use></svg>
						<span className="left-menu-title">Music & Playlists</span>
					</NavLink>
				</li>
				<li>
				
				<NavLink onClick={closeSidebarMobile} to="/social-media">
						<svg className="olymp-weather-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="WEATHER APP"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-weather-icon"></use></svg>
						<span className="left-menu-title">Weather App</span>
					</NavLink>
				</li>
				<li>
				
				<NavLink onClick={closeSidebarMobile} to="/social-media">
						<svg className="olymp-calendar-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="CALENDAR AND EVENTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
						<span className="left-menu-title">Calendar and Events</span>
					</NavLink>
				</li>
				<li>
					
				<NavLink onClick={closeSidebarMobile} to="/social-media">
						<svg className="olymp-badge-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Community Badges"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-badge-icon"></use></svg>
						<span className="left-menu-title">Community Badges</span>
					</NavLink>
				</li>
				<li>
				
				<NavLink onClick={closeSidebarMobile} to="/social-media">
						<svg className="olymp-cupcake-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Friends Birthdays"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
						<span className="left-menu-title">Friends Birthdays</span>
					</NavLink>
				</li>
				<li>
					
				<NavLink onClick={closeSidebarMobile} to="/social-media">
						<svg className="olymp-stats-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Account Stats"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-stats-icon"></use></svg>
						<span className="left-menu-title">Account Stats</span>
					</NavLink>
				</li>
				<li>
				
				<NavLink onClick={closeSidebarMobile} to="/social-media">	
						<svg className="olymp-manage-widgets-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Manage Widgets"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"></use></svg>
						<span className="left-menu-title">Manage Widgets</span>
					</NavLink>
				</li>
			</ul>

			<div className="ui-block-title ui-block-title-small">
				<h6 className="title">YOUR ACCOUNT</h6>
			</div>

			<ul className="account-settings">
				<li>
										<NavLink onClick={closeSidebarMobile} to="/social-media">


						<svg className="olymp-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>

						<span>Profile Settings</span>
					</NavLink>
				</li>
				<li>
										<NavLink onClick={closeSidebarMobile} to="/social-media">

						<svg className="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>

						<span>Create Fav Page</span>
					</NavLink>
				</li>
				<li>
										<NavLink onClick={closeSidebarMobile} to="/social-media">

						<svg className="olymp-logout-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-logout-icon"></use></svg>

						<span>Log Out</span>
					</NavLink>
				</li>
			</ul>

			<div className="ui-block-title ui-block-title-small">
				<h6 className="title">About Ro'Codes</h6>
			</div>

			<ul className="about-olympus">
				<li>
										<NavLink onClick={closeSidebarMobile} to="/social-media">

						<span>Terms and Conditions</span>
					</NavLink>
				</li>
				<li>
										<NavLink onClick={closeSidebarMobile} to="/social-media">

						<span>FAQs</span>
					</NavLink>
				</li>
				<li>
										<NavLink onClick={closeSidebarMobile} to="/social-media">

						<span>Careers</span>
					</NavLink>
				</li>
				<li>
										<NavLink onClick={closeSidebarMobile} to="/social-media">

						<span>Contact</span>
					</NavLink>
				</li>
			</ul>

		</div>
	</div>
</div>

</>
    )
}
export default LeftSidebar