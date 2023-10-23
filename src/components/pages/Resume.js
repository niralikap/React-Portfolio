import React from 'react';
import "../style/resume.css"
import '../style/allpages.css';

export default function Resume() {
    return (
      <div className="container">
        <br></br>
        <h2>Resume</h2>
        <br></br>
        <h5> Download my 
        <a
            href="https://docs.google.com/document/d/18G_rHj8nH62ET54bhnq1I5f9CEqfYLp9/edit"
            class="btn btn-link"
            target="__blank"> Resume
        </a>
        </h5>
        <br></br>
        <h2> Front-end Proficiencies</h2>
        <br></br>
        <div class="btn-group-vertical">
        <button type="button" class="btn btn-outline-light">HTML</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">CSS</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">Javascript</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">JQuery</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">Responsive design</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">React</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">Bootstrap</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">HandleBars</button>
        </div>

        <br></br>
        <br></br>
        <h2> Back-end Proficiencies</h2>
        <br></br>
        <div class="btn-group-vertical">
        <button type="button" class="btn btn-outline-light">APIs / Controllers</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">Node</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">Express</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">MySQL, Sequelize</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">MongoDB, Mongoose</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">REST</button>
        <br></br>
        <button type="button" class="btn btn-outline-light">GraphQL</button>
        <br></br>
        </div>

      </div>
    );
  }
  