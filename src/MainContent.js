import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'

const MainContent=()=>{
    return(
        <>
        <main className="col col-xl-6 order-xl-2 col-lg-6 order-lg-2 order-md-1 order-sm-1 order-1 col-md-12 col-sm-12 col-12">

<div className="ui-block">
    
    {/* <!-- News Feed Form  --> */}
    
    <div className="news-feed-form">
        {/* <!-- Nav tabs --> */}
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
                <a className="nav-link active inline-items" data-toggle="tab" href="#home-1" role="tab" aria-expanded="true">
    
                    <svg className="olymp-status-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-status-icon"></use></svg>
    
                    <span>Status</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link inline-items" data-toggle="tab" href="#profile-1" role="tab" aria-expanded="false">
    
                    <svg className="olymp-multimedia-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-multimedia-icon"></use></svg>
    
                    <span>Multimedia</span>
                </a>
            </li>
    
            <li className="nav-item">
                <a className="nav-link inline-items" data-toggle="tab" href="#blog" role="tab" aria-expanded="false">
                    <svg className="olymp-blog-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-blog-icon"></use></svg>
    
                    <span>Blog Post</span>
                </a>
            </li>
        </ul>
    
        {/* <!-- Tab panes --> */}
        <div className="tab-content">
            <div className="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
                <form>
                    <div className="author-thumb">
                        <img src="img/author-page.jpg" alt="author"/>
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                        <label className="control-label">Share what you are thinking here...</label>
                        <textarea className="form-control" placeholder=""></textarea>
                    </div>
                    <div className="add-options-message">
                        <a href="#" className="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD PHOTOS">
                            <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"></use></svg>
                        </a>
                        <a href="#" className="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="TAG YOUR FRIENDS">
                            <svg className="olymp-computer-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
                        </a>
    
                        <a href="#" className="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD LOCATION">
                            <svg className="olymp-small-pin-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon"></use></svg>
                        </a>
    
                        <button className="btn btn-primary btn-md-2">Post Status</button>
                        <button   className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>
    
                    </div>
    
                </form>
            </div>
    
            <div className="tab-pane" id="profile-1" role="tabpanel" aria-expanded="true">
                <form>
                    <div className="author-thumb">
                        <img src="img/author-page.jpg" alt="author"/>
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                        <label className="control-label">Share what you are thinking here...</label>
                        <textarea className="form-control" placeholder=""  ></textarea>
                    </div>
                    <div className="add-options-message">
                        <a href="#" className="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD PHOTOS">
                            <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"></use></svg>
                        </a>
                        <a href="#" className="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="TAG YOUR FRIENDS">
                            <svg className="olymp-computer-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
                        </a>
    
                        <a href="#" className="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD LOCATION">
                            <svg className="olymp-small-pin-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon"></use></svg>
                        </a>
    
                        <button className="btn btn-primary btn-md-2">Post Status</button>
                        <button   className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>
    
                    </div>
    
                </form>
            </div>
    
            <div className="tab-pane" id="blog" role="tabpanel" aria-expanded="true">
                <form>
                    <div className="author-thumb">
                        <img src="img/author-page.jpg" alt="author"/>
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                        <label className="control-label">Share what you are thinking here...</label>
                        <textarea className="form-control" placeholder=""  ></textarea>
                    </div>
                    <div className="add-options-message">
                        <a href="#" className="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD PHOTOS">
                            <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"></use></svg>
                        </a>
                        <a href="#" className="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="TAG YOUR FRIENDS">
                            <svg className="olymp-computer-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
                        </a>
    
                        <a href="#" className="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD LOCATION">
                            <svg className="olymp-small-pin-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon"></use></svg>
                        </a>
    
                        <button className="btn btn-primary btn-md-2">Post Status</button>
                        <button   className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>
    
                    </div>
    
                </form>
            </div>
        </div>
    </div>
    
    {/* <!-- ... end News Feed Form  -->		 */}
    	</div>

<div id="newsfeed-items-grid">

    <div className="ui-block">
        
        <article className="hentry post video">
        
            <div className="post__author author vcard inline-items">
                <img src="img/avatar7-sm.jpg" alt="author"/>
        
                <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">Marina Valentine</a> shared a <a href="#">link</a>
                    <div className="post__date">
                        <time className="published" dateTime="2004-07-24T18:18">
                            March 4 at 2:05pm
                        </time>
                    </div>
                </div>
        
                <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <ul className="more-dropdown">
                        <li>
                            <a href="#">Edit Post</a>
                        </li>
                        <li>
                            <a href="#">Delete Post</a>
                        </li>
                        <li>
                            <a href="#">Turn Off Notifications</a>
                        </li>
                        <li>
                            <a href="#">Select as Featured</a>
                        </li>
                    </ul>
                </div>
        
            </div>
        
            <p>Hey <a href="#">Cindi</a>, you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!</p>
        
            <div className="post-video">
                <div className="video-thumb">
                    <img src="img/video-youtube1.jpg" alt="photo"/>
                    <a href="https://youtube.com/watch?v=excVFQ2TWig" className="play-video">
                        <svg className="olymp-play-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-play-icon"></use></svg>
                    </a>
                </div>
        
                <div className="video-content">
                    <a href="#" className="h4 title">Iron Maid - ChillGroves</a>
                    <p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua...
                    </p>
                    <a href="#" className="link-site">YOUTUBE.COM</a>
                </div>
            </div>
        
            <div className="post-additional-info inline-items">
        
                <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                    <span>18</span>
                </a>
        
                <ul className="friends-harmonic">
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic9.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic11.jpg" alt="friend"/>
                        </a>
                    </li>
                </ul>
        
                <div className="names-people-likes">
                    <a href="#">Jenny</a>, <a href="#">Robert</a> and
                    <br/>18 more liked this
                </div>
        
                <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
        
                        <span>0</span>
                    </a>
        
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
        
                        <span>16</span>
                    </a>
                </div>
        
        
            </div>
        
            <div className="control-block-button post-control-button">
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-like-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
                </a>
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                </a>
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                </a>
        
            </div>
        
        </article>
    </div>

    <div className="ui-block">

        
        <article className="hentry post">
        
            <div className="post__author author vcard inline-items">
                <img src="img/avatar10-sm.jpg" alt="author"/>
        
                <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">Elaine Dreyfuss</a>
                    <div className="post__date">
                        <time className="published" dateTime="2004-07-24T18:18">
                            9 hours ago
                        </time>
                    </div>
                </div>
        
                <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <ul className="more-dropdown">
                        <li>
                            <a href="#">Edit Post</a>
                        </li>
                        <li>
                            <a href="#">Delete Post</a>
                        </li>
                        <li>
                            <a href="#">Turn Off Notifications</a>
                        </li>
                        <li>
                            <a href="#">Select as Featured</a>
                        </li>
                    </ul>
                </div>
        
            </div>
        
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.
            </p>
        
            <div className="post-additional-info inline-items">
        
                <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                    <span>24</span>
                </a>
        
                <ul className="friends-harmonic">
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic9.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic11.jpg" alt="friend"/>
                        </a>
                    </li>
                </ul>
        
                <div className="names-people-likes">
                    <a href="#">You</a>, <a href="#">Elaine</a> and
                    <br/>22 more liked this
                </div>
        
        
                <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                        <span>17</span>
                    </a>
        
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                        <span>24</span>
                    </a>
                </div>
        
        
            </div>
        
            <div className="control-block-button post-control-button">
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-like-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
                </a>
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                </a>
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                </a>
        
            </div>
        
        </article>
        
        {/* <!-- Comments --> */}
        
        <ul className="comments-list">
            <li className="comment-item">
                <div className="post__author author vcard inline-items">
                    <img src="img/author-page.jpg" alt="author"/>
        
                    <div className="author-date">
                        <a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                        <div className="post__date">
                            <time className="published" dateTime="2004-07-24T18:18">
                                38 mins ago
                            </time>
                        </div>
                    </div>
        
                    <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
        
                </div>
        
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>
        
                <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                    <span>3</span>
                </a>
                <a href="#" className="reply">Reply</a>
            </li>
            <li className="comment-item">
                <div className="post__author author vcard inline-items">
                    <img src="img/avatar1-sm.jpg" alt="author"/>
        
                    <div className="author-date">
                        <a className="h6 post__author-name fn" href="#">Mathilda Brinker</a>
                        <div className="post__date">
                            <time className="published" dateTime="2004-07-24T18:18">
                                1 hour ago
                            </time>
                        </div>
                    </div>
        
                    <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
        
                </div>
        
                <p>Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum
                    quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
        
                <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                    <span>8</span>
                </a>
                <a href="#" className="reply">Reply</a>
            </li>
        </ul>
        
        {/* <!-- ... end Comments --> */}

        <a href="#" className="more-comments">View more comments <span>+</span></a>

        
        {/* <!-- Comment Form  --> */}
        
        <form className="comment-form inline-items">
        
            <div className="post__author author vcard inline-items">
                <img src="img/author-page.jpg" alt="author"/>
        
                <div className="form-group with-icon-right ">
                    <textarea className="form-control" placeholder=""></textarea>
                    <div className="add-options-message">
                        <a href="#" className="options-message" data-toggle="modal" data-target="#update-header-photo">
                            <svg className="olymp-camera-icon">
                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        
            <button className="btn btn-md-2 btn-primary">Post Comment</button>
        
            <button className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">Cancel</button>
        
        </form>
        
        {/* <!-- ... end Comment Form  --> */}
    </div>

    <div className="ui-block">
        
        <article className="hentry post has-post-thumbnail">
        
            <div className="post__author author vcard inline-items">
                <img src="img/avatar5-sm.jpg" alt="author"/>
        
                <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">Green Goo Rock</a>
                    <div className="post__date">
                        <time className="published" dateTime="2004-07-24T18:18">
                            March 8 at 6:42pm
                        </time>
                    </div>
                </div>
        
                <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <ul className="more-dropdown">
                        <li>
                            <a href="#">Edit Post</a>
                        </li>
                        <li>
                            <a href="#">Delete Post</a>
                        </li>
                        <li>
                            <a href="#">Turn Off Notifications</a>
                        </li>
                        <li>
                            <a href="#">Select as Featured</a>
                        </li>
                    </ul>
                </div>
        
            </div>
        
            <p>Hey guys! We are gona be playing this Saturday of <a href="#">The Marina Bar</a> for their new Mystic Deer Party.
                If you wanna hang out and have a really good time, come and join us. We’l be waiting for you!
            </p>
        
            <div className="post-thumb">
                <img src="img/post__thumb1.jpg" alt="photo"/>
            </div>
        
            <div className="post-additional-info inline-items">
        
                <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                    <span>49</span>
                </a>
        
                <ul className="friends-harmonic">
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic9.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic11.jpg" alt="friend"/>
                        </a>
                    </li>
                </ul>
        
                <div className="names-people-likes">
                    <a href="#">Jimmy</a>, <a href="#">Andrea</a> and
                    <br/>47 more liked this
                </div>
        
        
                <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                        <span>264</span>
                    </a>
        
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                        <span>37</span>
                    </a>
                </div>
        
        
            </div>
        
            <div className="control-block-button post-control-button">
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-like-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
                </a>
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                </a>
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                </a>
        
            </div>
        
        </article>
    </div>

    <div className="ui-block">
        
        <article className="hentry post has-post-thumbnail">
        
            <div className="post__author author vcard inline-items">
                <img src="img/avatar3-sm.jpg" alt="author"/>
        
                <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">Sarah Hetfield</a>
                    <div className="post__date">
                        <time className="published" dateTime="2004-07-24T18:18">
                            March 2 at 9:06am
                        </time>
                    </div>
                </div>
        
                <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <ul className="more-dropdown">
                        <li>
                            <a href="#">Edit Post</a>
                        </li>
                        <li>
                            <a href="#">Delete Post</a>
                        </li>
                        <li>
                            <a href="#">Turn Off Notifications</a>
                        </li>
                        <li>
                            <a href="#">Select as Featured</a>
                        </li>
                    </ul>
                </div>
        
            </div>
        
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
            </p>
        
            <div className="post-additional-info inline-items">
        
                <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                    <span>0 Likes</span>
                </a>
        
                <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                        <span>0 Comments</span>
                    </a>
        
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                        <span>2 Shares</span>
                    </a>
                </div>
        
        
            </div>
        
            <div className="control-block-button post-control-button">
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-like-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
                </a>
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                </a>
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                </a>
        
            </div>
        
        </article>
    </div>

    <div className="ui-block">
        
        <article className="hentry post has-post-thumbnail">
        
            <div className="post__author author vcard inline-items">
                <img src="img/avatar2-sm.jpg" alt="author"/>
        
                <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">Nicholas Grissom</a>
                    <div className="post__date">
                        <time className="published" dateTime="2004-07-24T18:18">
                            March 2 at 8:34am
                        </time>
                    </div>
                </div>
        
                <div className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <ul className="more-dropdown">
                        <li>
                            <a href="#">Edit Post</a>
                        </li>
                        <li>
                            <a href="#">Delete Post</a>
                        </li>
                        <li>
                            <a href="#">Turn Off Notifications</a>
                        </li>
                        <li>
                            <a href="#">Select as Featured</a>
                        </li>
                    </ul>
                </div>
        
            </div>
        
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
            </p>
        
            <div className="post-additional-info inline-items">
        
                <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                    <span>22</span>
                </a>
        
                <ul className="friends-harmonic">
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic9.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic11.jpg" alt="friend"/>
                        </a>
                    </li>
                </ul>
        
                <div className="names-people-likes">
                    <a href="#">Jimmy</a>, <a href="#">Andrea</a> and
                    <br/>47 more liked this
                </div>
        
        
                <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                        <span>0</span>
                    </a>
        
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                        <span>2</span>
                    </a>
                </div>
        
        
            </div>
        
            <div className="control-block-button post-control-button">
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-like-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
                </a>
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-comments-post-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                </a>
        
                <a href="#" className="btn btn-control">
                    <svg className="olymp-share-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                </a>
        
            </div>
        
        </article>
    </div>

</div>

<a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid"><svg className="olymp-three-dots-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>

</main>

        </>
    )
}

export default MainContent