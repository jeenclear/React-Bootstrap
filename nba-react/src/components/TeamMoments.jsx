import React, {useState} from "react";

// Logo Images
import NBALogoImage from '../assets/images/NBA_logo.svg';

// Team Logos Images
import TeamImage1 from '../assets/images/NBA_teams/1610612737.svg';
import TeamImage2 from '../assets/images/NBA_teams/1610612738.svg';
import TeamImage3 from '../assets/images/NBA_teams/1610612739.svg';
import TeamImage4 from '../assets/images/NBA_teams/1610612741.svg';
import TeamImage5 from '../assets/images/NBA_teams/1610612742.svg';
import TeamImage6 from '../assets/images/NBA_teams/1610612743.svg';
import TeamImage7 from '../assets/images/NBA_teams/1610612744.svg';
import TeamImage8 from '../assets/images/NBA_teams/1610612745.svg';
import TeamImage9 from '../assets/images/NBA_teams/1610612746.svg';
import TeamImage10 from '../assets/images/NBA_teams/1610612751.svg';
import TeamImage11 from '../assets/images/NBA_teams/1610612752.svg';
import TeamImage12 from '../assets/images/NBA_teams/1610612754.svg';
import TeamImage13 from '../assets/images/NBA_teams/1610612763.svg';
import TeamImage14 from '../assets/images/NBA_teams/1610612765.svg';
import TeamImage15 from '../assets/images/NBA_teams/1610612766.svg';
import TeamImage16 from '../assets/images/NBA_teams/1610612742.svg';
import TeamImage17 from '../assets/images/NBA_teams/1610612738.svg';
import TeamImage18 from '../assets/images/NBA_teams/1610612741.svg';
import TeamImage19 from '../assets/images/NBA_teams/1610612751.svg';
import TeamImage20 from '../assets/images/NBA_teams/1610612754.svg';
import TeamImage21 from '../assets/images/NBA_teams/1610612766.svg';
import TeamImage22 from '../assets/images/NBA_teams/1610612751.svg';
import TeamImage23 from '../assets/images/NBA_teams/1610612739.svg';
import TeamImage24 from '../assets/images/NBA_teams/1610612765.svg';

function TeamMoments() {

  const styles = {
    video:{
      width: "100%",
    }
  };

  return (
    <>
      <section className="team_section css-grap20 container-fluid">
        <div className="container-fuid">
          <div class="team_moments">
            <h3>PICK YOUR</h3>
            <h2><img src={NBALogoImage} className="img-fluid rounded objectfit" alt="..." />NBA TEAM MOMENTS</h2>
          </div>
          <div className="team_text">
            <div className="row">
              <div className="team_text_left col-md-6">Official Digital Collectible of the NBA</div>
              <div className="team_text_right col-md-6">New User Offer - Buy your first ever pack for $2, get $10 back</div>
            </div>
          </div>
          <div className="team_logos">
            <div className="row">
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage1} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage2} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage3} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage4} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage5} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage6} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage7} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage8} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage9} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage10} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage11} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage12} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage13} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage14} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage15} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage16} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage17} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage18} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage19} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage20} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage21} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage22} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage23} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
              <div className="col-sm-2 col-md-1">
                <a href="#"><img src={TeamImage24} className="img-fluid rounded objectfit" alt="..." /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default TeamMoments;