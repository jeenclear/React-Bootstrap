import React, {useState} from "react";
import VideoItemImage1 from '../assets/images/1500x973_MP_POST__5_.webp';
import VideoItemImage2 from '../assets/images/1500x500_TW_COVER__7_.webp';

function Video() {

  const styles = {
    video:{
      width: "100%",
    }
  };

  return (
    <>
      <section className="video_section css-grap20 container-fluid">
        <div className="container-fuid">
          <div className="row">
            
            <div className="col-md-8">
              <div id="trailer" className="video_wrap section d-flex justify-content-center embed-responsive embed-responsive-4by3">
                <video className="embed-responsive-item" style={styles.video} autoPlay loop muted controls>
                  <source  src="https://player.vimeo.com/external/325698769.sd.mp4?s=4e70164190f4b472059c9f4ca74ca0ca58056ce4&profile_id=165" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video_caption">
                  <div className="video_box">
                    <div className="video_detail">
                      <div className="video_text">
                        <h2>The First-ever 1-of-1<br /> Releasing on NBA<br/> Top Shot</h2>
                      </div>
                      <div className="video_btn">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div class="video_post">
                <div className="video_item marbottom">
                  <a href="#">
                    <div className="video_item_img">
                      <span><img src={VideoItemImage1} className="img-fluid rounded objectfit" alt="..." /></span>
                    </div>
                    <div className="video_item_text css-129w13">
                      <p className="css-d8ovqs">Packs Oversubscribed & Delivering</p>
                      <p className="css-y1t2g4">SCOOP SECONDARY</p>
                    </div>
                  </a>
                </div>

                <div className="video_item marbottom">
                  <a href="#">
                    <div className="video_item_img">
                      <span><img src={VideoItemImage2} className="img-fluid rounded objectfit" alt="..." /></span>
                    </div>
                    <div className="video_item_text css-129w13">
                      <p className="css-d8ovqs">Packs Oversubscribed & Delivering</p>
                      <p className="css-y1t2g4">COMPLETE NEW CHALLENGES</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
};

export default Video;