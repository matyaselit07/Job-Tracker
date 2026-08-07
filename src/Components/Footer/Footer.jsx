import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="#">
          <img className="footer-logo" src={facebook} alt="facebook.svg" />
        </a>
        <a href="#">
          <img className="footer-logo" src={instagram} alt="facebook.svg" />
        </a>
        <a href="#">
          <img className="footer-logo" src={youtube} alt="facebook.svg" />
        </a>
      </div>
      <h3>+36 70 276 8140</h3>
      <h3>matyaselit07@gmail.com</h3>
      <h3>Copyright{new Date().getFullYear()}&copy;matyaselit07</h3>
    </footer>
  );
}
