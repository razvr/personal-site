import React from 'react'
import '../styles/homepage.scss'
import Link from 'gatsby-link'

class Template extends React.Component {
  item = {
    title: "TITLE",
    description: "desc.",
    image: ""
  }

  render() {
    return (
      <div className="item">
        {/* <div className="title">
          {this.title}
        </div>
        <div className="description">
          {this.description}
        </div>
         <div className="image">

          <img src={this.image} alt=""/>

         </div> */}
      <h2>Previous work at Forkspot</h2>
       <p>
         Please enquire about examples for print production.
       </p>
        <div className="one">
          <img src={require("../imgs/folio/forkspot/City.png")} alt="" />
        </div>
        <div className="four" style={{paddingBottom: "0"}}>
          <img src={require("../imgs/folio/forkspot/screen1.png")} alt="" style={{backgroundColor:"white"}} />
          <img src={require("../imgs/folio/forkspot/screen2.png")} alt="" />
          <img src={require("../imgs/folio/forkspot/screen4.png")} alt="" />
          <img src={require("../imgs/folio/forkspot/screen5.png")} alt="" />
        </div>
        <div className="four" style={{paddingBottom: "0"}}>
          <img src={require("../imgs/folio/forkspot/screen3.png")} alt="" />
          {/* <img src={require("../imgs/folio/forkspot/marketplace_screen.png")} alt="" style={{width: "73%" }} /> */}
        </div>
        {/* <div className="two" style={{margin: "1%", padding: "1%", backgroundColor:"white", textAlign: "center"}}>
          <img src={require("../imgs/folio/forkspot/marketplace-logo.png")} alt="" style={{paddingBottom: "0"}} />
        </div> */}

        <br/><br/><br/>

      <h2>Mobile App Design - Savage Wellness</h2>
        <div className="four">
          <img src={require("../imgs/folio/savage-wellness/LOGIN.png")} alt="" />
          <img src={require("../imgs/folio/savage-wellness/HOME.png")} alt="" />
          <img src={require("../imgs/folio/savage-wellness/COMPLETED-CHALLENGES.png")} alt="" />
          <img src={require("../imgs/folio/savage-wellness/WEEKLY-WELLNESS.png")} alt="" />
        </div>



        <h2>Video Thumbnails</h2>
        <div className="two">
          <img src={require("../imgs/folio/vid-thumbnails/sombra-vid.png")} alt="" />

          <img src={require("../imgs/folio/vid-thumbnails/ISA.jpg")} alt="" />
        </div>

        <h2>Banners - Twitter</h2>
        <div className="two">
          <img src={require("../imgs/folio/twitter/CBD_mm.jpg")} alt="" />

          <img src={require("../imgs/folio/twitter/RMU_Ahri.png")} alt="" />
        </div>

        <h2>Logo Design</h2>
        <div className="two">
          <img src={require("../imgs/folio/logos/razur_logo.png")} alt="" />

          <img src={require("../imgs/folio/logos/CBD_mm_logo.jpg")} alt="" />
        </div>



        <h2>Illustration</h2>
        <div className="two">
          <img src={require("../imgs/folio/illustrator/SEO_13-01.png")} alt="" />
          <img src={require("../imgs/folio/illustrator/SEO_25-01.png")} alt="" />
        </div>



        <h2>Web Design</h2>
        <div className="two">
          <img src={require("../imgs/folio/web-design/Smogon.jpg")} alt="" />
        </div>



        <h2>Web Banners</h2>
        <div className="three">
          <img src={require("../imgs/folio/banners/ISA-037-01.png")} alt="" />
          <img src={require("../imgs/folio/banners/ISA-037-02.png")} alt="" />
          <img src={require("../imgs/folio/banners/ISA-037-03.png")} alt="" />
        </div>



        <h2>Banner Ads</h2>
        {/* <div className="three"> */}
        <img src={require("../imgs/folio/banners/2.13.H_Conversational_Banner_300x600.jpg")} alt="" />
        <img src={require("../imgs/folio/banners/2.13.H_Conversational_Banner_160x600.jpg")} alt="" />
        <img src={require("../imgs/folio/banners/2.13.H_Conversational_Banner_300x250.jpg")} alt="" />
        {/* </div> */}
        <div className="two">
        <img src={require("../imgs/folio/banners/2.13.H_Conversational_Banner_728x90.jpg")} alt="" />
        <img src={require("../imgs/folio/banners/FSBP298_Polyiso_728x90_FINAL.gif")} alt="" />
        </div>



        <h2>Instagram Ads</h2>
        <div className="two">
          <img src={require("../imgs/folio/instagram/FSBPR020_1.jpg")} alt="" />

          <img src={require("../imgs/folio/instagram/FSBPR020_2.jpg")} alt="" />

          <img src={require("../imgs/folio/instagram/FSBPR020_3.jpg")} alt="" />

          <img src={require("../imgs/folio/instagram/FSBPR020_20.jpg")} alt="" />
        </div>



        <h2>Stream Sponsor rolling gif</h2>
        <img src={require("../imgs/folio/RMU-Twitch-Sponsor-GIF.gif")} alt="" />

        <br/><br/><br/><br/>




        {/* <h2>Email</h2>
        <a href="../imgs/folio/ITW_q4-email.html"><button>ITW Q4 Email</button></a>

        <br/><br/><br/><br/> */}

      </div>
    )
  }
}
export default Template
