import React from "react";

function Contact() {
  return (
    <div id="contact-sec">
        {/* contact information */}
      <div id="contact-info">
        <div>
          <h1 id="contact-head">Contact US</h1>
          <p>
            We would love to hear from you! Feel free to reach out with any
            questions or orders.
          </p>
        </div>
        <div>
          
          <ul>
            <li>
              <strong>Email:</strong> info@cakeshop.com
            </li>
            <li>
              <strong>Phone:</strong> +92 456 7890
            </li>
            <li>
              <strong>Address:</strong> 123 Cake Lane, Sweet Town, Cake City
            </li>
          </ul>
        </div>
      </div>

      {/* Get in touch */}
      <div id="get-in-touch">
        <div>
            <h1>
            Get In Touch
            </h1>
            </div>
        <div id="inputs">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea rows={5} placeholder="Write Your Messeage ....."></textarea>
          <button id="send-msg">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
