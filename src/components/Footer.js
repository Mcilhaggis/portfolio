import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer clear-top text-center mt-5 ">
        <div className="container">
            <span className="text-muted">
                <p>
                Rachael McIlhagga {new Date().getFullYear()} All Rights Reserved
                </p>
            </span>
        </div>
    </footer>
  )
}

export default Footer;
