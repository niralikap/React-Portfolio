import React from 'react';
import myimage from '../../assets/myimage.jpg';
import '../style/allpages.css';

export default function AboutMe() {
  return (
    <div className="container">
      <h3> About me </h3>
<br></br>
            <img src={myimage} alt="" width="95" height="100"/>  
        <br></br>
        <br></br>
      <p>
      I have about 15 years of experience in the tech industry. I have worked for multiple companies - Visa, Gap, Apple, Levi Strauss & Company, Specialty's Cafe & Bakery, BareMinerals, Williams-Sonoma, Smart ERP Solutions, Tata Teleservices, etc.
<br></br>
<br></br>
Currently, I work as a Software Test Automation Manager at Visa and I have completed the full stack web development boot camp at UC Berkeley. I am a Computer Science major. Also, I have earned MBA degree with specialization in Information Technology.
<br></br>
<br></br>
      </p>
    </div>
  );
}
