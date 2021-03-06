import React, { Component } from "react";
import Button from "../buttons";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <div className="social-links">
          <Button className="facebook-btn" name="Facebook" />
          <Button className="twitter-btn" name="Twitter" />
        </div>
        <div className="copyright">&copy; NiteLeague 2018</div>
        <Button className="contact-btn" name="Contact Us" />
      </div>
    );
  }
}

export default Footer;
