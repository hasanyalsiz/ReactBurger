import React from "react";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p> &copy; 2023 Tüm Hakları Saklıdır</p>
        <ul>
          <li>
            <a target="_blank" href="https://www.instagram.com/hasanyalsiz/">
              <i class="fa-brands fa-instagram instagram"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/hasanyalsiz/">
              <i class="fa-brands fa-whatsapp whatsapp"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/hasanyalsiz/">
              <i class="fa-brands fa-twitter twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
