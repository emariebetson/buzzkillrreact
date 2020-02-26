import React from "react";

function LiveProfile() {
  return (
        <div id="page-contents">
          <div className="container">
            <div className="row">
              <div className="col-md-3 static">
                <div className="profile-card">
                  <img src="http://placehold.it/300x300" alt="user" className="profile-photo" />
                  <h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
                  <a href="#" className="text-white"><i className="ion ion-android-person-add" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  export default LiveProfile;