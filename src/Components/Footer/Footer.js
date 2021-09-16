/** @format */

import React from "react";
import "./Footer.css";

import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='footer'>
      <a
        href='https://github.com/leoopez/RoadMapUpiita'
        target='_blank'
        rel='noreferrer'>
        <span className='icon--container github--icon'>
          <FaGithub size='100%' color='#fff3bf' />
        </span>
      </a>
    </div>
  );
}
