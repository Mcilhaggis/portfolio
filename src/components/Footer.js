import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer class="footer clear-top text-center mt-5">
        <div class="container">
            <span class="text-muted">
                <p>
                Rachael McIlhagga {new Date().getFullYear()} All Rights Reserved
                </p>
            </span>
        </div>
    </footer>
  )
}

export default Footer;
