import React from "react";

function Header() {
  return (
        <header id="header" className="lazy-load">
          <nav className="navbar navbar-default navbar-fixed-top menu">
            <div className="container">
              <div className="navbar-header">            
                {/* <a className="navbar-brand" href="index-register.html"><img src="images/logo.png" alt="logo" /></a> */}
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right main-menu">
                  <li className="dropdown">
                    <a href="index.html" role="button" aria-haspopup="true" aria-expanded="false">Home <span /></a>
                  </li><li className="dropdown">
                    {/* <a href="newsfeed-people-nearby.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Live Feeds<span><img src="images/down-arrow.png" alt="" /></span></a> */}
                    <ul className="dropdown-menu newsfeed-home">
                      <li><a href="newsfeed.html">Live Line Updates</a></li>
                      <li><a href="newsfeed-messages.html">Specials &amp; Cover Alerts</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    {/* <a href="timeline.html" className="dropdown-toggle pages" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account<span><img src="images/down-arrow.png" alt="" /></span></a> */}
                    <ul className="dropdown-menu page-list">
                      <li><a href="timeline.html">Profile</a></li>
                      <li><a href="edit-profile-settings.html">Account Settings</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="contact.html">Contact</a></li>
                  <form className="navbar-form navbar-right hidden-sm">
                    <div className="form-group">
                      <i className="icon ion-android-search" />
                      <input type="text" className="form-control" placeholder="Search lines, specials, & covers" />
                    </div>
                  </form>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    }

  export default Header;