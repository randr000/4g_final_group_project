import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-center p-3" >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://youtu.be/dQw4w9WgXcQ">
          YMdB
        </a>
        <p>
          API courtesy of{" "}
          <a className="text-dark" href="http://www.omdbapi.com/">
            OMDb
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;