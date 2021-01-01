import React from 'react'
import { NavLink } from 'react-router-dom'

const Messages=()=>{
    return (<>
       <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
			<div className="ui-block">
				<div className="ui-block-title">
					<h6 className="title">Chat / Messages</h6>
					<a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
				</div>

				<div className="row">
					<div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 padding-r-0">

						
						{/* <!-- Notification List Chat Messages --> */}
						
						<ul className="notification-list chat-message">
							<li>
								<div className="author-thumb">
									<img src="/img/avatar8-sm.jpg" alt="author"/>
								</div>
								<div className="notification-event">
									<a href="#" className="h6 notification-friend">Diana Jameson</a>
									<span className="chat-message-item">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
									<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
								</div>
								<span className="notification-icon">
																<svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
															</span>
						
								<div className="more">
									<svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
								</div>
							</li>
						
							<li>
								<div className="author-thumb">
									<img src="/img/avatar9-sm.jpg" alt="author"/>
								</div>
								<div className="notification-event">
									<a href="#" className="h6 notification-friend">Jake Parker</a>
									<span className="chat-message-item">Great, I’ll see you tomorrow!.</span>
									<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
								</div>
								<span className="notification-icon">
																<svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
															</span>
						
								<div className="more">
									<svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
								</div>
							</li>
							<li>
								<div className="author-thumb">
									<img src="/img/avatar10-sm.jpg" alt="author"/>
								</div>
								<div className="notification-event">
									<a href="#" className="h6 notification-friend">Elaine Dreyfuss</a>
									<span className="chat-message-item">We’ll have to check that at the office and see if the client is on board with...</span>
									<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
								</div>
								<span className="notification-icon">
															<svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
														</span>
								<div className="more">
									<svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
								</div>
							</li>
						
							<li className="chat-group">
								<div className="author-thumb">
									<img src="/img/avatar11-sm.jpg" alt="author"/>
									<img src="/img/avatar12-sm.jpg" alt="author"/>
									<img src="/img/avatar13-sm.jpg" alt="author"/>
									<img src="/img/avatar10-sm.jpg" alt="author"/>
								</div>
								<div className="notification-event">
									<a href="#" className="h6 notification-friend">You, Faye, Ed & Jet +3</a>
									<span className="last-message-author">Ed:</span>
									<span className="chat-message-item">Yeah! Seems fine by me!</span>
									<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 16th at 10:23am</time></span>
								</div>
								<span className="notification-icon">
															<svg className="olymp-chat---messages-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
														</span>
								<div className="more">
									<svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
								</div>
							</li>
						</ul>
						
						{/* <!-- ... end Notification List Chat Messages --> */}

						
						{/* <!-- Popup Chat --> */}
						
						<div className="ui-block popup-chat">
							<div className="ui-block-title">
								<span className="icon-status online"></span>
								<h6 className="title">Mathilda Brinker</h6>
								<div className="more">
									<svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
									<svg className="olymp-little-delete"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
								</div>
							</div>
							<div className="mCustomScrollbar" data-mcs-theme="dark">
								<ul className="notification-list chat-message chat-message-field">
									<li>
										<div className="author-thumb">
											<img src="/img/avatar14-sm.jpg" alt="author"/>
										</div>
										<div className="notification-event">
											<span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
											<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
										</div>
									</li>
						
									<li>
										<div className="author-thumb">
											<img src="/img/author-page.jpg" alt="author"/>
										</div>
										<div className="notification-event">
											<span className="chat-message-item">Don’t worry Mathilda!</span>
											<span className="chat-message-item">I already bought everything</span>
											<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:29pm</time></span>
										</div>
									</li>
						
									<li>
										<div className="author-thumb">
											<img src="/img/avatar14-sm.jpg" alt="author"/>
										</div>
										<div className="notification-event">
											<span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
											<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
										</div>
									</li>
								</ul>
							</div>
						
							<form>
						
								<div className="form-group label-floating is-empty">
									<label className="control-label">Press enter to post...</label>
									<textarea className="form-control" placeholder=""  ></textarea>
									<div className="add-options-message">
										<a href="#" className="options-message">
											<svg className="olymp-computer-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
										</a>
										<div className="options-message smile-block">
						
											<svg className="olymp-happy-sticker-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-sticker-icon"></use></svg>
						
											<ul className="more-dropdown more-with-triangle triangle-bottom-right">
												<li>
													<a href="#">
														<img src="/img/icon-chat1.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat2.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat3.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat4.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat5.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat6.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat7.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat8.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat9.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat10.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat11.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat12.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat13.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat14.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat15.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat16.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat17.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat18.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat19.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat20.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat21.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat22.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat23.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat24.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat25.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat26.png" alt="icon"/>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="/img/icon-chat27.png" alt="icon"/>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
						
							</form>
						
						
						</div>
						
						{/* <!-- ... end Popup Chat --> */}
						

					</div>

					<div className="col col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 padding-l-0">

						
						{/* <!-- Chat Field --> */}
						
						<div className="chat-field">
							<div className="ui-block-title">
								<h6 className="title">Elaine Dreyfuss</h6>
								<a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
							</div>
							<div className="mCustomScrollbar" data-mcs-theme="dark">
								<ul className="notification-list chat-message chat-message-field">
									<li>
										<div className="author-thumb">
											<img src="/img/avatar10-sm.jpg" alt="author"/>
										</div>
										<div className="notification-event">
											<a href="#" className="h6 notification-friend">Elaine Dreyfuss</a>
											<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
											<span className="chat-message-item">Hi James, How are your doing? Please remember that next week we are going to Gotham Bar to celebrate Marina’s Birthday.</span>
										</div>
									</li>
						
									<li>
										<div className="author-thumb">
											<img src="/img/author-page.jpg" alt="author"/>
										</div>
										<div className="notification-event">
											<a href="#" className="h6 notification-friend">James Spiegel</a>
											<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:30pm</time></span>
											<span className="chat-message-item">Hi Elaine! I have a question, do you think that tomorrow we could talk to
																	the client to iron out some details before the presentation? I already finished the first screen but
																	I need to ask him something before moving on. Anyway, here’s a preview!
																</span>
											<div className="added-photos">
												<img src="/img/photo-message1.jpg" alt="photo"/>
												<img src="/img/photo-message2.jpg" alt="photo"/>
												<span className="photos-name">icons.jpeg; bunny.jpeg</span>
											</div>
										</div>
									</li>
						
									<li>
										<div className="author-thumb">
											<img src="/img/avatar10-sm.jpg" alt="author"/>
										</div>
										<div className="notification-event">
											<a href="#" className="h6 notification-friend">Elaine Dreyfuss</a>
											<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
											<span className="chat-message-item">We’ll have to check that at the office and see if the client is on board with it. I think That looks really good!</span>
										</div>
									</li>
								</ul>
							</div>
						
							<form>
						
								<div className="form-group label-floating is-empty">
									<label className="control-label">Write your reply here...</label>
									<textarea className="form-control" placeholder=""  ></textarea>
								</div>
						
								<div className="add-options-message">
									<a href="#" className="options-message">
										<svg className="olymp-computer-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
									</a>
									<a href="#" className="options-message">
										<svg className="olymp-computer-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
									</a>
									<div className="options-message smile-block">
										<svg className="olymp-happy-sticker-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-sticker-icon"></use></svg>
						
										<ul className="more-dropdown more-with-triangle triangle-bottom-right">
											<li>
												<a href="#">
													<img src="/img/icon-chat1.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat2.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat3.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat4.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat5.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat6.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat7.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat8.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat9.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat10.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat11.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat12.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat13.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat14.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat15.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat16.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat17.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat18.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat19.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat20.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat21.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat22.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat23.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat24.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat25.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat26.png" alt="icon"/>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="/img/icon-chat27.png" alt="icon"/>
												</a>
											</li>
										</ul>
									</div>
						
									<button className="btn btn-primary btn-sm">Post Reply</button>
								</div>
						
							</form>
						
						</div>
						
						{/* <!-- ... end Chat Field --> */}

					</div>
				</div>

			</div>

			
	

		</div>
        </>)
}
export default Messages