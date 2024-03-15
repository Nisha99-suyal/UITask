import React from "react";

const Footer = () => {
  return (
    <div className="footer row">
      <div className="footer-left col-6 px-lg-4">
        <div>LOGO</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="footer-right col-lg-2 col-sm-12">
        <h6>App</h6>
        <ul>
          <li>
            <a href="#home">Lending</a>
          </li>
          <li>
            <a href="#about">Stake</a>
          </li>
          <li>
            <a href="#services">Swap</a>
          </li>
          <li>
            <a href="#contact">Bride</a>
          </li>
        </ul>
      </div>
      <div className="footer-right col-lg-2 col-sm-12">
        <h6>Docs</h6>
        <ul>
          <li>
            <a href="#home">GitHub</a>
          </li>
          <li>
            <a href="#about">Documents</a>
          </li>
          <li>
            <a href="#services">Medium</a>
          </li>
          <li>
            <a href="#contact">Audit</a>
          </li>
        </ul>
      </div>
      <div className="footer-right col-lg-2 col-sm-12">
        <h6>Social</h6>
        <ul>
          <li>
            <a href="#about">Twitter</a>
          </li>
          <li>
            <a href="#services">Community</a>
          </li>
          <li>
            <a href="#contact">Telegram</a>
          </li>
          <li>
            <a href="#home">Discord</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
