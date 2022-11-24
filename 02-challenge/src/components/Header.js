// import "../components/style/contact.css";

import background from '../assets/portfolio.jpg';
import myimage from '../assets/myimage.jpg';

function Header() {
const myStyle={
    backgroundImage: `url(${background})`,
    height:'85vh',
    marginTop:'-250px',
    fontSize:'5px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
return (
  <div style={myStyle}>
      
    <h1>Nirali Kapadia</h1>
    <h5 className="text-light">Software Automation Manager</h5>
  </div>
);
}

export default Header;