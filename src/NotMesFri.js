//Notification - Messages - Friends Dashboard
import './NotMesFri.css'
import Notifications from './Notifications'
import Messages from'./Messages'
import Friends from './Friends'
import React, { useState } from 'react'
import {NavLink,Route,Switch} from 'react-router-dom'
const NotMesFri=()=>{

    // Responsive header icons content toggle-messages
		var [profileSettingsIcon, setprofileSettingsIcon] = useState(true)
		var profileSettingsIconClass=(profileSettingsIcon==true)?"profile-settings":"profile-settings open";
		var profileSettingsTabPaneClass=(profileSettingsIcon==true)?"profile-settings-responsive":"profile-settings-responsive open";
		const setProfileSettingsIconToggle=()=>{
			setprofileSettingsIcon(!profileSettingsIcon)
			}
    
    return(
        <>

<div className={profileSettingsIconClass}>

	<a href="#c" onClick={setProfileSettingsIconToggle} className="js-profile-settings-open profile-settings-open">
		<i className="fa fa-angle-right" aria-hidden="true"></i>
		<i className="fa fa-angle-left" aria-hidden="true"></i>
	</a>
	<div className="mCustomScrollbar" data-mcs-theme="dark">
		<div className="ui-block">
			<div className="your-profile">
				<div className="ui-block-title ui-block-title-small">
					<h6 className="title">Your PROFILE</h6>
				</div>

				<div id="accordion1" role="tablist" aria-multiselectable="true">
					<div className="card">
						<div className="card-header" role="tab" id="headingOne-1">
							<h6 className="mb-0">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-1" aria-expanded="true" aria-controls="collapseOne">
									Profile Settings
									<svg className="olymp-dropdown-arrow-icon"><use xlinkHref="/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
								</a>
							</h6>
						</div>

						<div id="collapseOne-1" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
							<ul className="your-profile-menu">
								<li>
									<a href="28-YourAccount-PersonalInformation.html">Personal Information</a>
								</li>
								<li>
									<a href="29-YourAccount-AccountSettings.html">Account Settings</a>
								</li>
								<li>
									<a href="30-YourAccount-ChangePassword.html">Change Password</a>
								</li>
								<li>
									<a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
								</li>
								<li>
									<a href="32-YourAccount-EducationAndEmployement.html">Education and Employement</a>
								</li>
							</ul>
						</div>
					</div>
				</div>


				<div className="ui-block-title">
                <NavLink to="/dash/notifications" className="h6 title">Notifications</NavLink>
					<a href="#" className="items-round-little bg-primary">8</a>
				</div>
				<div className="ui-block-title">
                <NavLink to="/dash/messages" className="h6 title">Chat / Messages</NavLink>
				</div>
				<div className="ui-block-title">
                <NavLink to="/dash/friends" className="h6 title">Friend Requests</NavLink>
					<a href="#" className="items-round-little bg-blue">4</a>
				</div>
				<div className="ui-block-title ui-block-title-small">
					<h6 className="title">FAVOURITE PAGE</h6>
				</div>
				<div className="ui-block-title">
					<a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Create Fav Page</a>
				</div>
				<div className="ui-block-title">
					<a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Fav Page Settings</a>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="main-header">
	<div className="content-bg-wrap bg-account"></div>
	<div className="container">
		<div className="row">
			<div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
				<div className="main-header-content">
					<h1>Your Account Dashboard</h1>
					<p>Welcome to your account dashboard! Here you’ll find everything you need to change your profile
	information, settings, read notifications and requests, view your latest messages, change your pasword and much
	more! Also you can create or manage your own favourite page, have fun!</p>
				</div>
			</div>
		</div>
	</div>
	<img className="img-bottom" src="/img/account-bottom.png" alt="friends"/>
</div>

<div className="container">
	<div className="row">
			<Switch>
               
                  <Route exact path="/dash/notifications" render={()=><Notifications/>}/>
  <Route exact path="/dash/messages" render={()=><Messages/>}/>
  <Route exact path="/dash/friends" render={()=><Friends/>}/>
                
            </Switch>
            {/* <Notifications/> */}
			{/* <!-- Pagination --> */}
			
			{/* <nav aria-label="Page navigation">
				<ul className="pagination justify-content-center">
					<li className="page-item disabled">
						<a className="page-link" href="#" tabindex="-1">Previous</a>
					</li>
					<li className="page-item"><a className="page-link" href="#">1<div className="ripple-container"><div className="ripple ripple-on ripple-out" style={{left:" -10.3833px", top: "-16.8333px", backgroundColor: "rgb(255, 255, 255)", transform: "scale(16.7857)"}}></div></div></a></li>
					<li className="page-item"><a className="page-link" href="#">2</a></li>
					<li className="page-item"><a className="page-link" href="#">3</a></li>
					<li className="page-item"><a className="page-link" href="#">...</a></li>
					<li className="page-item"><a className="page-link" href="#">12</a></li>
					<li className="page-item">
						<a className="page-link" href="#">Next</a>
					</li>
				</ul>
			</nav>*/}
			{/* <!-- ... end Pagination --> */}

		
		<div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none">
			<div className="ui-block">

				{/* <!-- Your Profile  --> */}
				
				<div className="your-profile">
					<div className="ui-block-title ui-block-title-small">
						<h6 className="title">Your PROFILE</h6>
					</div>
				
					<div id="accordion" role="tablist" aria-multiselectable="true">
						<div className="card">
							<div className="card-header" role="tab" id="headingOne">
								<h6 className="mb-0">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										Profile Settings
										<svg className="olymp-dropdown-arrow-icon"><use xlinkHref="/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
									</a>
								</h6>
							</div>
				
							<div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
								<ul className="your-profile-menu">
									<li>
										<a href="28-YourAccount-PersonalInformation.html">Personal Information</a>
									</li>
									<li>
										<a href="29-YourAccount-AccountSettings.html">Account Settings</a>
									</li>
									<li>
										<a href="30-YourAccount-ChangePassword.html">Change Password</a>
									</li>
									<li>
										<a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
									</li>
									<li>
										<a href="32-YourAccount-EducationAndEmployement.html">Education and Employement</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				
					<div className="ui-block-title">
                    <NavLink to="/dash/notifications" className="h6 title">Notifications</NavLink>
						<a href="#" className="items-round-little bg-primary">8</a>
					</div>
					<div className="ui-block-title">
                    <NavLink to="/dash/messages" className="h6 title">Chat / Messages</NavLink>
					</div>
					<div className="ui-block-title">
                    <NavLink to="/dash/friends" className="h6 title">Friend Requests</NavLink>
						<a href="#" className="items-round-little bg-blue">4</a>
					</div>
					<div className="ui-block-title ui-block-title-small">
						<h6 className="title">FAVOURITE PAGE</h6>
					</div>
					<div className="ui-block-title">
						<a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Create Fav Page</a>
					</div>
					<div className="ui-block-title">
						<a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Fav Page Settings</a>
					</div>
				</div>
				
				{/* <!-- ... end Your Profile  --> */}

			</div>
		</div>
	</div>
</div>


        </>
    )
}

export default NotMesFri