import React, { useState } from "react";
import "./contact.scss";
import { LinkedIn, GitHub, Instagram } from "@material-ui/icons";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
const theme = createTheme({
  typography: {
    button: {
      fontSize: "1rem",
    },
  },
  buttonPadding: {
    paddingLeft: "30px",
    margin: "0 auto",
    // color:{$secColor},
  },
});

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/thanks.png" alt="" />
        </div>
        <div className="socials">
          <ul>
            <li className="lin">
              <LinkedIn className="icon" />
              <ThemeProvider theme={theme}>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={theme.buttonPadding}
                  href="https://www.linkedin.com/in/rayipallivamsikrishna/"
                >
                  LINKED IN
                </Button>
              </ThemeProvider>
            </li>
            <li className="github">
              <GitHub className="icon" />
              <ThemeProvider theme={theme}>
              <Button
                  variant="outlined"
                  color="inherit"
                  className={theme.buttonPadding}
                  href="https://github.com/rvkrishna268"
                >                GITHUB</Button>
              </ThemeProvider>
            </li>
            <li className="insta">
              <Instagram className="icon" />
              <ThemeProvider theme={theme}>
              <Button
                  variant="outlined"
                  color="inherit"
                  className={theme.buttonPadding}
                  href="https://instagram.com/vamsi_krishna.268"
                >INSTAGRAM</Button>
              </ThemeProvider>
            </li>
          </ul>
        </div>
        <div className="footer">
          <p>© Copyright, All Rights Reserved</p>
          <p>Designed and Developed by RVK</p>
        </div>
      </div>
      <div className="right">
        <h2>GET IN TOUCH</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :) </span>}
        </form>
        <div className="wrapper">
      <a href="#intro">
          <img src="assets/down1.png" className="reverse" alt="" />
        </a>
      </div>
      </div>
    </div>
  );
}
