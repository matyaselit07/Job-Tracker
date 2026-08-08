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
          <img className="footer-logo" src={instagram} alt="instagram.svg" />
        </a>
        <a href="#">
          <img className="footer-logo" src={youtube} alt="youtube.svg" />
        </a>
      </div>
      <h3><a href="tel:+36702768140">+36 70 276 8140</a></h3>
      <h3><a href="mailto:matyaselit07@gmail.com">matyaselit07@gmail.com</a></h3>
      <h3>Copyright{new Date().getFullYear()}&copy;matyaselit07</h3>
    </footer>
  );
}
