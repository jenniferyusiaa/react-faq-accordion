import "./footer.scss";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://i.pinimg.com/564x/ac/e8/e2/ace8e2bcc19eb6197c63036f5aa1155b.jpg">
          <FaInstagram />
        </a>
        <a href="https://github.com/jenniferyusiaa?tab=repositories">
          <FaGithub />
        </a>
        <p>designed by jenniferyusiaa.</p>
      </div>
    </div>
  );
};

export default Footer;
