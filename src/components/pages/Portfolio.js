import React from 'react';
import "../style/portfolio.css";
import '../style/allpages.css';
//import "./HeaderSocials";
import HeaderSocials from "./HeaderSocials";
import { SocialIcon } from 'react-social-icons';
import p21 from "../../assets/book-search-engine.jpg";
import p22 from "../../assets/fashion-fanatics.jpg";
import p18 from "../../assets/social-network-api.jpg";
import p15 from "../../assets/job-search-engine.jpg";
import p14 from "../../assets/MVC-tech-blog.jpg";

import p19 from "../../assets/text-editor.jpg";
import p13 from "../../assets/e-commerce-backend.jpg";
import p12 from "../../assets/content-management-system.jpg";
import p11 from "../../assets/note-taker-express.jpg";
import p10 from "../../assets/team-profile-generator.jpg";
import p9 from "../../assets/generate-readme-nodejs.jpg";
import p8 from "../../assets/weather.jpg";
import p7 from "../../assets/foodies.jpg";
import p6 from "../../assets/online-scheduler.jpg";
import p5 from "../../assets/quiz.jpg";
import p4 from "../../assets/password.jpg";
import p3 from "../../assets/fanpage.jpg";


export default function Portfolio() {
    const mystyle = {
        height: "300px",
        width: "350px"
      };
  return (
    <div className="container">
      <br></br>
      <h2> Portfolio </h2>
      <br></br>
      <section id="portfolio">
      
      <div className="container portfolio__container">

      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p22} alt="Fashion Fanatics" class="image" style={mystyle}/>
          
          <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Fashion-Fanatics" target="__blank"/>
          <a
            href="https://github.com/niralikap/Fashion-Fanatics"
            target="__blank"
          >
          </a>
          <a
            href="https://young-reaches-17728.herokuapp.com/"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a>
          </div>
          </div>
          <h3>Fashion Fanatics</h3>
          
          
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p21} alt="Book Search Engine" class="image" style={mystyle}/>
          
          <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Book-Search-Engine-MERN" target="__blank"/>
          <a
            href="https://github.com/niralikap/Book-Search-Engine-MERN"
            target="__blank"
          >
          </a>
          <a
            href="https://tranquil-headland-49059.herokuapp.com/"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a>
          </div>
          </div>
          <h3>Book Search Engine - MERN</h3>
          
          
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p18} alt="Social Network API" class="image" style={mystyle}/>
          
          <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Social-Network-API" target="__blank"/>
          <a
            href="https://github.com/niralikap/Social-Network-API"
            target="__blank"
          >
          </a>
          <a
            href="https://drive.google.com/file/d/1u42TTaUOBEkcAiZ_qyXnH-mNXTnRF7ZF/view?usp=share_link"
            className="btn btn-light"
            target="__blank"
          >
            Live Demo
          </a> 
          </div>
          </div>
          <h3>Social Network API</h3>
          
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p15} alt="Job Search Engine" class="image" style={mystyle}/>
            
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Job-search-engine" target="__blank"/>
            <a
            href="https://github.com/niralikap/Job-search-engine"
            className="link"
            target="__blank">

            </a>
          <br></br>

            <a
            href="https://radiant-coast-98799.herokuapp.com/"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a>
          </div>
          </div>
          <h3>Job Search Engine</h3>
           
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p14} alt="MVC Tech Blog" class="image" style={mystyle}/>
          
          <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/MVC-Tech-Blog" target="__blank"/>
          
          <a
            href="https://github.com/niralikap/MVC-Tech-Blog"
            target="__blank">
            
          </a>
          <a
            href="https://safe-earth-31761.herokuapp.com"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a>
          </div>
          </div>
          <h3>MVC Tech Blog</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p19} alt="Text Editor" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Text-Editor-PWA" target="__blank"/>
          <a
            href="https://github.com/niralikap/Text-Editor-PWA"
            target="__blank"
          >

          </a>
          <a
            href="https://lit-chamber-86652.herokuapp.com/"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a>
          </div>
          </div>
          <h3>Text Editor</h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p13} alt="ECommerce Backend" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Ecommerce-back-end" target="__blank"/>
          <a
            href="https://github.com/niralikap/Ecommerce-back-end"
            target="__blank"
          >
            
          </a>
          <a
            href="https://drive.google.com/file/d/17B27IoHyCN22jLaEp8pGuV_NZD0iArl5/view?usp=share_link"
            className="btn btn-light"
            target="__blank"
          >
            Live Demo
          </a> 
          </div>
          </div>
          <h3>ECommerce Backend</h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p12} alt="Content Management System" class="image" style={mystyle}/>
            
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Content-management-system-using-NodeJS-SQL" target="__blank"/>
          <a
            href="https://github.com/niralikap/Content-management-system-using-NodeJS-SQL"
            target="__blank"
          >
            
          </a>
          <a
            href="https://drive.google.com/file/d/1NgqnbHn4GRjEDw2k73w1xGhIcEK6O8Ru/view?usp=share_link"
            className="btn btn-light"
            target="__blank"
          >
            Live Demo
          </a> 
          </div>
          </div>
          <h3>Content Management System</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p11} alt="Note Taker Express" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Note-Taker-using-Express" target="__blank"/>
          <a
            href="https://github.com/niralikap/Note-Taker-using-Express"
            target="__blank"
          >
            
          </a>
          <a
            href="https://mysterious-depths-74933.herokuapp.com"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a>
          </div>
          </div>
          <h3>Note Taker Express</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p10} alt="Team Profile Generator" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Note-Taker-using-Express" target="__blank"/>
          <a
            href="https://github.com/niralikap/Team-Profile-Generator-Node-JS"
            target="__blank"
          >
            
          </a>
         <a
            href="https://drive.google.com/file/d/1oxgdRamgSFAVDlO05dYWxAk9a9-8E2Y6/view?usp=share_link"
            className="btn btn-light"
            target="__blank"
          >
            Live Demo
          </a> 
          </div>
          </div>
          <h3>Team Profile Generator</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p9} alt="Generate ReadMe NodeJS" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Generate-README-using-Node-js" target="__blank"/>
          <a
            href="https://github.com/niralikap/Generate-README-using-Node-js"
            target="__blank"
          >
            
          </a>
         <a
            href="https://drive.google.com/file/d/13auyi0wyMG3fqvxiizPch7RYH8Ej0pQ6/view?usp=share_link"
            className="btn btn-light"
            target="__blank"
          >
            Live Demo
          </a> 
          </div>
          </div>
          <h3>Generate ReadMe using NodeJS</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p7} alt="Foodies" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Foodies" target="__blank"/>
          <a
            href="https://github.com/niralikap/Foodies"
            target="__blank"
          >
            
          </a>
         <a
            href="https://niralikap.github.io/Foodies/"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a> 
          </div>
          </div>
          <h3>Foodies</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p8} alt="Weather Forecast Dashboard" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Weather-dashboard" target="__blank"/>
          <a
            href="https://github.com/niralikap/Weather-dashboard"
            target="__blank"
          >
            
          </a>
         <a
            href="https://niralikap.github.io/Weather-dashboard/"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a> 
          </div>
          </div>
          <h3>Weather Forecast Dashboard</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p6} alt="Work Day Scheduler" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Save-events-calendar" target="__blank"/>
          <a
            href="https://github.com/niralikap/Save-events-calendar"
            target="__blank"
          >
            
          </a>
         <a
            href="https://niralikap.github.io/Save-events-calendar/"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a> 
          </div>
          </div>
          <h3>Work Day Scheduler</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p5} alt="Timed Coding Quiz" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Timed-coding-quiz" target="__blank"/>
          <a
            href="https://github.com/niralikap/Timed-coding-quiz"
            target="__blank"
          >
            
          </a>
         <a
            href="https://niralikap.github.io/Timed-coding-quiz/"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a> 
          </div>
          </div>
          <h3>Timed Coding Quiz</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p4} alt="Random Password Generator" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/Random-Password-Generator" target="__blank"/>
          <a
            href="https://github.com/niralikap/Random-Password-Generator"
            target="__blank"
          >
            
          </a>
         <a
            href="https://niralikap.github.io/Random-Password-Generator/"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a> 
          </div>
          </div>
          <h3>Random Password Generator</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={p3} alt="Fanpage" class="image" style={mystyle}/>
          
            <div className="project-hov">
          <SocialIcon url="https://github.com/niralikap/fanpage" target="__blank"/>
          <a
            href="https://github.com/niralikap/fanpage"
            target="__blank"
          >
            
          </a>
         <a
            href="https://niralikap.github.io/fanpage/"
            className="btn btn-light"
            target="__blank"
          >
            App Link
          </a> 
          </div>
          </div>
          <h3>Fanpage</h3>
        </article>


    </div>

</section>

</div>
  );
};




