import React from "react";
import "../styles.css";


function ContactForm() {
return(


<div class="row ">
<div class="col-md-10" id="form_container">
<p className="intro">Contact Me</p>

    <p>
      Send me a message, I'll get back to you at the earliest!
    </p>
    <form method="post" id="reused_form">

        <div class="row ">
            <div class="col-sm-12 form-group">
                <textarea class="form-control" type="textarea" name="message" id="message" maxlength="6000" rows="5"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 form-group">
                <label for="name">
                    Your Name:</label>
                <input type="text" class="form-control" id="name" name="name" required></input>
            </div>
            <div class="col-sm-6 form-group">
                <label for="email">
                    Email:</label>
                <input type="email" class="form-control" id="email" name="email" required></input>
            </div>
        </div>


        <div class="row">
            <div class="col-sm-12 form-group">
                <button type="submit" class="btn btn-lg btn-default pull-right" >Send →</button>
            </div>
        </div>

    </form>
    {/* <div id="success_message">
        <h3>Posted your message successfully!</h3>
    </div>
    <div id="error_message"
            >
                <h3>Error</h3>
                Sorry there was an error sending your form.

    </div> */}
</div>
</div>)
}

export default ContactForm;