//import { FaLinkedin } from 'react-icons/fa'
//import { FaGithub } from 'react-icons/fa'
//import { FaStackOverflow } from 'react-icons/fa'
import React from 'react';
import '../style/headersocials.css';
//import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
//ReactDOM.render(<SocialIcon url="https://www.linkedin.com/in/nirali-kapadia-30013b17/" />, document.body);


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <SocialIcon url="https://www.linkedin.com/in/nirali-kapadia-30013b17/" target="__blank"/>
      <a href="https://www.linkedin.com/in/nirali-kapadia-30013b17/" target="__blank">
       
      </a>
      <SocialIcon url="https://github.com/niralikap" target="__blank"/>
      <a href="https://github.com/niralikap" target="__blank">
        
      </a>
      {/* <SocialIcon url="https://stackoverflow.com/users/19273555/nirali" target="__blank"/>
       <a
        href="https://stackoverflow.com/users/19273555/nirali"
        target="__blank"
      >
        
      </a>
      <SocialIcon url="https://twitter.com/Nirali_Kap" target="__blank"/>
      <a
        href="https://twitter.com/Nirali_Kap"
        target="__blank"
      > 
        
      </a>  */}
    </div>
  );
}

export default HeaderSocials