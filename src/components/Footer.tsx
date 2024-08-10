import { IconContext } from "react-icons";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <section className="footer-whole">
            <div className="footer-container">
                <p>&copy; Copyright Nursify Eduction, 2024</p>
                <div className="social-media">
                    <IconContext.Provider value={{ size: "25px", color: "var(--accent-color)" }}>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTiktok />
                        <FaXTwitter />
                        <FaYoutube />
                    </ IconContext.Provider>
                </div>
                <div className="legal-links">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>

            </div>
        </section>
    </>
  )
}

export default Footer