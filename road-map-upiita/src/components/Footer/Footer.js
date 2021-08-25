/** @format */

import React from "react";
import "./Footer.css";

import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='footer'>
      <a href='https://github.com/leoopez' target='_blank' rel='noreferrer'>
        <div className='icons--default github--icon'>
          <FaGithub size='100%' color='#fff3bf' />
        </div>
      </a>
    </div>
  );
}
