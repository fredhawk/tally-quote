import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p className="Footer-madeby">Made by Fred Hawk</p>
      <a className="Footer-githublink" href="https://osycon.github.io/tally-quote/" target="_blank" rel="noopener noreferrer">
        Project on Github
        <svg
          className="Footer-github-icon"
          width="15"
          height="15"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="1.41"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.3 6.53 5.47 7.6.4.07.55-.18.55-.4v-1.35c-2.24.48-2.7-1.08-2.7-1.08-.37-.92-.9-1.17-.9-1.17-.72-.5.06-.48.06-.48.8.05 1.22.82 1.22.82.72 1.22 1.88.87 2.33.67.07-.5.28-.86.5-1.06-1.77-.2-3.63-.9-3.63-3.96 0-.87.3-1.58.82-2.14-.1-.2-.36-1.02.07-2.12 0 0 .66-.22 2.2.82.63-.18 1.3-.27 2-.27.67 0 1.35.1 2 .27 1.5-1.04 2.18-.82 2.18-.82.43 1.1.16 1.9.08 2.12.5.56.82 1.27.82 2.14 0 3.08-1.87 3.75-3.65 3.95.28.24.54.73.54 1.48v2.2c0 .2.13.46.54.38C13.7 14.53 16 11.53 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
