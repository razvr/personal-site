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
