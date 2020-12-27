import React, { useState } from 'react'

const RightContent=()=>{
    return(
        <>
	<aside className="col col-xl-3 order-xl-3 col-lg-3 order-lg-3 order-md-3 order-sm-3 order-3 col-md-6 col-sm-6 col-12">

<div className="ui-block">
    
    {/* <!-- W-Birthsday-Alert --> */}
    
    <div className="widget w-birthday-alert">
        <div className="icons-block">
            <svg className="olymp-cupcake-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
            <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
        </div>
    
        <div className="content">
            <div className="author-thumb">
                <img src="img/avatar48-sm.jpg" alt="author"/>
            </div>
            <span>Today is</span>
            <a href="#" className="h4 title">Marina Valentine’s Birthday!</a>
            <p>Leave her a message with your best wishes on her profile page!</p>
        </div>
    </div>
    
    {/* <!-- ... end W-Birthsday-Alert -->		 */}
    	</div>

<div className="ui-block">
    <div className="ui-block-title">
        <h6 className="title">Friend Suggestions</h6>
        <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
    </div>

    
    
    {/* <!-- W-Action --> */}
    
    <ul className="widget w-friend-pages-added notification-list friend-requests">
        <li className="inline-items">
            <div className="author-thumb">
                <img src="img/avatar38-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Francine Smith</a>
                <span className="chat-message-item">8 Friends in Common</span>
            </div>
            <span className="notification-icon">
                <a href="#" className="accept-request">
                    <span className="icon-add without-text">
                        <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                    </span>
                </a>
            </span>
        </li>
    
        <li className="inline-items">
            <div className="author-thumb">
                <img src="img/avatar39-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Hugh Wilson</a>
                <span className="chat-message-item">6 Friends in Common</span>
            </div>
            <span className="notification-icon">
                <a href="#" className="accept-request">
                    <span className="icon-add without-text">
                        <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                    </span>
                </a>
            </span>
        </li>
    
        <li className="inline-items">
            <div className="author-thumb">
                <img src="img/avatar40-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Karen Masters</a>
                <span className="chat-message-item">6 Friends in Common</span>
            </div>
            <span className="notification-icon">
                <a href="#" className="accept-request">
                    <span className="icon-add without-text">
                        <svg className="olymp-happy-face-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                    </span>
                </a>
            </span>
        </li>
    
    </ul>
    
    {/* <!-- ... end W-Action --> */}
</div>

<div className="ui-block">

    <div className="ui-block-title">
        <h6 className="title">Activity Feed</h6>
        <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
    </div>

    
    {/* <!-- W-Activity-Feed --> */}
    
    <ul className="widget w-activity-feed notification-list">
        <li>
            <div className="author-thumb">
                <img src="img/avatar49-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Marina Polson</a> commented on Jason Mark’s <a href="#" className="notification-link">photo.</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">2 mins ago</time></span>
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar9-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Jake Parker </a> liked Nicholas Grissom’s <a href="#" className="notification-link">status update.</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">5 mins ago</time></span>
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar50-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Mary Jane Stark </a> added 20 new photos to her <a href="#" className="notification-link">gallery album.</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">12 mins ago</time></span>
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar51-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Nicholas Grissom </a> updated his profile <a href="#" className="notification-link">photo</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">1 hour ago</time></span>
            </div>
        </li>
        <li>
            <div className="author-thumb">
                <img src="img/avatar48-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Marina Valentine </a> commented on Chris Greyson’s <a href="#" className="notification-link">status update</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">1 hour ago</time></span>
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar52-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Green Goo Rock </a> posted a <a href="#" className="notification-link">status update</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">1 hour ago</time></span>
            </div>
        </li>
        <li>
            <div className="author-thumb">
                <img src="img/avatar10-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Elaine Dreyfuss  </a> liked your <a href="#" className="notification-link">blog post</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">2 hours ago</time></span>
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar10-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Elaine Dreyfuss  </a> commented on your <a href="#" className="notification-link">blog post</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">2 hours ago</time></span>
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar53-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Bruce Peterson </a> changed his <a href="#" className="notification-link">profile picture</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">15 hours ago</time></span>
            </div>
        </li>
    
    </ul>
    
    {/* <!-- .. end W-Activity-Feed --> */}
</div>


<div className="ui-block">

    
    {/* <!-- W-Action --> */}
    
    <div className="widget w-action">
    
        <img src="img/logo.png" alt="Ro'Codes"/>
        <div className="content">
            <h4 className="title">Ro'Codes</h4>
            <span>THE BEST SOCIAL NETWORK THEME IS HERE!</span>
            <a href="01-LandingPage.html" className="btn btn-bg-secondary btn-md">Register Now!</a>
        </div>
    </div>
    
    {/* <!-- ... end W-Action --> */}
</div>

</aside>
        </>
    )
}

export default RightContent