import { FaFacebookF, FaWhatsapp, FaTiktok, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>© 2025 FL-AGROLEADER. Tous droits réservés. Politiques et Confidentialités</p>
        <div style={iconsContainer}>
          <a href="https://www.facebook.com/FL-AGROLEADER" target="_blank" rel="noopener noreferrer" style={iconLink}>
            <FaFacebookF />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={iconLink}>
            <FaWhatsapp />
          </a>
          <a href="https://www.tiktok.com/@fl-agroleader" target="_blank" rel="noopener noreferrer" style={iconLink}>
            <FaTiktok />
          </a>
          <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer" style={iconLink}>
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/company/fl-agroleader" target="_blank" rel="noopener noreferrer" style={iconLink}>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#222",
  color: "white",
  padding: "20px 0",
  textAlign: "center",
  position: "relative",
  bottom: 0,
  width: "100%",
  zIndex: 1000,
};

const containerStyle = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 20px",
  gap: "15px",
};

const iconsContainer = {
  display: "flex",
  gap: "15px",
  fontSize: "1.5rem",
};

const iconLink = {
  color: "white",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

export default Footer;
