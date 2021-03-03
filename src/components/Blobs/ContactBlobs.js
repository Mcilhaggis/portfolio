import React from "react";
import "../styles.css";
import ContactForm from "./ContactForm"

function ContactBlobs() {
    return (
        <div className="container head-container">
            <div className="about-blobs d-flex justify-content-end">
                <div className="col-md-9 col-lg-6">

                <div className="blob-four">
                    <div className="blob-three ">
                        <ContactForm />

                    </div>
                </div>
                </div>

            </div>
        </div>


    )
}

export default ContactBlobs;