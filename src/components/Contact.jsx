import React, { useState } from 'react';
import {
  FaLinkedin, FaGithub, FaWhatsapp, FaInstagram,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import copy from 'copy-to-clipboard';

function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');

  const HandleCopyEmail = (e) => {
    e.preventDefault();
    copy('reis_samuel@hotmail.com');
    setIsCopied(true);
    setCopyMessage('Email copied!');
    setTimeout(
      () => {
        setIsCopied(false);
        setCopyMessage('');
      },
      2000,
    );
    window.open('mailto: reis_samuel@hotmail.com', '_blank');
  };

  const HandleCopyWhats = (e) => {
    e.preventDefault();
    copy('11984478895');
    setIsCopied(true);
    setCopyMessage('Whatsapp number copied!');
    setTimeout(
      () => {
        setIsCopied(false);
        setCopyMessage('');
      },
      2000,
    );
    setTimeout(
      () => {
        window.open('https://api.whatsapp.com/send?phone=5511984478895', '_blank');
      },
      2000,
    );
  };

  return (
    <div id="contactItens">
      <div>
        <h1>Me Contacte:</h1>
      </div>
      <div>
        <label htmlFor="linkedIn">
          {' '}
          <abbr title="https://www.linkedin.com/in/samuelcovalero/">
            <a href="https://www.linkedin.com/in/samuelcovalero/" target="_blank" rel="noreferrer">
              LinkedIn:
              <FaLinkedin />
            </a>
          </abbr>
        </label>
        <label htmlFor="gitHub">
          {' '}
          <abbr title="https://github.com/imsamuelcovalero">
            <a href="https://github.com/imsamuelcovalero" target="_blank" rel="noreferrer">
              GitHub:
              <FaGithub />
            </a>
          </abbr>
        </label>
        <label htmlFor="email">
          {' '}
          <abbr title="reis_samuel@hotmail.com">
            <a href="mailto: reis_samuel@hotmail.com" target="_blank" rel="noreferrer" onClick={HandleCopyEmail}>
              Email:
              <AiOutlineMail />
            </a>
          </abbr>
        </label>
        <label htmlFor="whatsapp">
          {' '}
          <abbr title="https://api.whatsapp.com/send?phone=5511984478895">
            <a href="https://api.whatsapp.com/send?phone=5511984478895" target="_blank" rel="noreferrer" onClick={HandleCopyWhats}>
              WhatsApp:
              <FaWhatsapp />
            </a>
          </abbr>
        </label>
        <label htmlFor="instagram">
          {' '}
          <abbr title="https://www.instagram.com/imsamuelcovalero/">
            <a href="https://www.instagram.com/imsamuelcovalero/" target="_blank" rel="noreferrer">
              Instagram:
              <FaInstagram />
            </a>
          </abbr>
        </label>
        {isCopied && <p id="copyMsg">{copyMessage}</p>}
      </div>
    </div>
  );
}

export default Contact;
