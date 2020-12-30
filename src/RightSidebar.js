import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'

const RightSidebar=()=>{

    var [rightSidebar, setrightSidebar] = useState(true)
    var rightSidebarClass=(rightSidebar==true)?"fixed-sidebar right":"fixed-sidebar right open";
    const setRightToggle=()=>{setrightSidebar(!rightSidebar)}

	  var [rightSidebarMobile, setrightSidebarMobile] = useState(true)
    var rightSidebarClassMobile=(rightSidebarMobile==true)?"fixed-sidebar right fixed-sidebar-responsive":"fixed-sidebar right fixed-sidebar-responsive open";
    const setRightToggleMobile=()=>{setrightSidebarMobile(!rightSidebarMobile)}

return(
<>
{/* <!-- Fixed Sidebar Right --> */}

<div className={rightSidebarClass}>
	<div className="fixed-sidebar-right sidebar--small" id="sidebar-right">

		<div className="mCustomScrollbar" data-mcs-theme="dark">
			<ul className="chat-users">
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src="img/avatar67-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src="img/avatar62-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>

				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src="img/avatar68-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>

				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src="img/avatar69-sm.jpg" className="avatar"/>
						<span className="icon-status away"></span>
					</div>
				</li>

				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src="img/avatar70-sm.jpg" className="avatar"/>
						<span className="icon-status disconected"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src="img/avatar64-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src="img/avatar71-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src="img/avatar72-sm.jpg" className="avatar"/>
						<span className="icon-status away"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src="img/avatar63-sm.jpg" className="avatar"/>
						<span className="icon-status status-invisible"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">
					<div className="author-thumb">
						<img alt="author" src="img/avatar72-sm.jpg" className="avatar"/>
						<span className="icon-status away"></span>
					</div>
				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar71-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>
				</li>
			</ul>
		</div>

		<div className="search-friend inline-items">
			<a  onClick={setRightToggle} className="js-sidebar-open">
				<svg className="olymp-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
			</a>
		</div>

		<a  className="olympus-chat inline-items js-chat-open">
			<svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
		</a>

	</div>

	<div className="fixed-sidebar-right sidebar--large" id="sidebar-right-1">

		<div className="mCustomScrollbar" data-mcs-theme="dark">

			<div className="ui-block-title ui-block-title-small">
				<a  className="title">Close Friends</a>
				<a >Settings</a>
			</div>

			<ul className="chat-users">
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar67-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Carol Summers</a>
						<span className="status">ONLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>

				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar62-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Mathilda Brinker</a>
						<span className="status">AT WORK!</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>

				</li>

				<li className="inline-items js-chat-open">


					<div className="author-thumb">
						<img alt="author" src="img/avatar68-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Carol Summers</a>
						<span className="status">ONLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>


				</li>

				<li className="inline-items js-chat-open">


					<div className="author-thumb">
						<img alt="author" src="img/avatar69-sm.jpg" className="avatar"/>
						<span className="icon-status away"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Michael Maximoff</a>
						<span className="status">AWAY</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>


				</li>

				<li className="inline-items js-chat-open">


					<div className="author-thumb">
						<img alt="author" src="img/avatar70-sm.jpg" className="avatar"/>
						<span className="icon-status disconected"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Rachel Howlett</a>
						<span className="status">OFFLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>


				</li>
			</ul>


			<div className="ui-block-title ui-block-title-small">
				<a  className="title">MY FAMILY</a>
				<a >Settings</a>
			</div>

			<ul className="chat-users">
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar64-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Sarah Hetfield</a>
						<span className="status">ONLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>
				</li>
			</ul>


			<div className="ui-block-title ui-block-title-small">
				<a  className="title">UNCATEGORIZED</a>
				<a >Settings</a>
			</div>

			<ul className="chat-users">
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar71-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Bruce Peterson</a>
						<span className="status">ONLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>


				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar72-sm.jpg" className="avatar"/>
						<span className="icon-status away"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Chris Greyson</a>
						<span className="status">AWAY</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>

				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar63-sm.jpg" className="avatar"/>
						<span className="icon-status status-invisible"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Nicholas Grisom</a>
						<span className="status">INVISIBLE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>
				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar72-sm.jpg" className="avatar"/>
						<span className="icon-status away"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Chris Greyson</a>
						<span className="status">AWAY</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>
				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar71-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Bruce Peterson</a>
						<span className="status">ONLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>
				</li>
			</ul>

		</div>

		<div className="search-friend inline-items">
			<form className="form-group" >
				<input className="form-control" placeholder="Search Friends..." type="text"/>
			</form>

			<a href="29-YourAccount-AccountSettings.html" className="settings">
				<svg className="olymp-settings-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-settings-icon"></use></svg>
			</a>

			<a  onClick={setRightToggle} className="js-sidebar-open">
				<svg className="olymp-close-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
			</a>
		</div>

		<a  className="olympus-chat inline-items js-chat-open">

			<h6 className="olympus-chat-title">OLYMPUS CHAT</h6>
			<svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
		</a>

	</div>
</div>

{/* <!-- ... end Fixed Sidebar Right --> */}


{/* <!-- Fixed Sidebar Right-Responsive --> */}

<div className={rightSidebarClassMobile} id="sidebar-right-responsive">

	<div className="fixed-sidebar-right sidebar--small">
		<a  onClick={setRightToggleMobile} className="js-sidebar-open">
			<svg className="olymp-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
			<svg className="olymp-close-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
		</a>
	</div>

	<div className="fixed-sidebar-right sidebar--large">
		<div className="mCustomScrollbar" data-mcs-theme="dark">

			<div className="ui-block-title ui-block-title-small">
				<a  className="title">Close Friends</a>
				<a >Settings</a>
			</div>

			<ul className="chat-users">
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar67-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Carol Summers</a>
						<span className="status">ONLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>

				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar62-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Mathilda Brinker</a>
						<span className="status">AT WORK!</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>

				</li>

				<li className="inline-items js-chat-open">


					<div className="author-thumb">
						<img alt="author" src="img/avatar68-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Carol Summers</a>
						<span className="status">ONLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>


				</li>

				<li className="inline-items js-chat-open">


					<div className="author-thumb">
						<img alt="author" src="img/avatar69-sm.jpg" className="avatar"/>
						<span className="icon-status away"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Michael Maximoff</a>
						<span className="status">AWAY</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>


				</li>

				<li className="inline-items js-chat-open">


					<div className="author-thumb">
						<img alt="author" src="img/avatar70-sm.jpg" className="avatar"/>
						<span className="icon-status disconected"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Rachel Howlett</a>
						<span className="status">OFFLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>


				</li>
			</ul>


			<div className="ui-block-title ui-block-title-small">
				<a  className="title">MY FAMILY</a>
				<a >Settings</a>
			</div>

			<ul className="chat-users">
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar64-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Sarah Hetfield</a>
						<span className="status">ONLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>
				</li>
			</ul>


			<div className="ui-block-title ui-block-title-small">
				<a  className="title">UNCATEGORIZED</a>
				<a >Settings</a>
			</div>

			<ul className="chat-users">
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar71-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Bruce Peterson</a>
						<span className="status">ONLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>


				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar72-sm.jpg" className="avatar"/>
						<span className="icon-status away"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Chris Greyson</a>
						<span className="status">AWAY</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>

				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar63-sm.jpg" className="avatar"/>
						<span className="icon-status status-invisible"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Nicholas Grisom</a>
						<span className="status">INVISIBLE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>
				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar72-sm.jpg" className="avatar"/>
						<span className="icon-status away"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Chris Greyson</a>
						<span className="status">AWAY</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>
				</li>
				<li className="inline-items js-chat-open">

					<div className="author-thumb">
						<img alt="author" src="img/avatar71-sm.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>

					<div className="author-status">
						<a  className="h6 author-name">Bruce Peterson</a>
						<span className="status">ONLINE</span>
					</div>

					<div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>

						<ul className="more-icons">
							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-to-conversation-icon"></use></svg>
							</li>

							<li>
								<svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-block-from-chat-icon"></use></svg>
							</li>
						</ul>

					</div>
				</li>
			</ul>

		</div>

		<div className="search-friend inline-items">
			<form className="form-group" >
            <input className="form-control" placeholder="Search Friends..." type="text"/>


			</form>

			<a href="29-YourAccount-AccountSettings.html" className="settings">
				<svg className="olymp-settings-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-settings-icon"></use></svg>
			</a>

			<a  className="js-sidebar-open">
				<svg className="olymp-close-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
			</a>
		</div>

		<a  className="olympus-chat inline-items js-chat-open">

			<h6 className="olympus-chat-title">OLYMPUS CHAT</h6>
			<svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
		</a>
	</div>

</div>

{/* <!-- ... end Fixed Sidebar Right-Responsive --> */}

</>
    );
}
export default RightSidebar;