/** @format */

import React from "react";

import { Link } from "react-router-dom";

export default function NavLink({ to, href, target }) {
  return (
    <Link to={to} className='flex-container flex-container--center nav--item'>
      {to}
    </Link>
  );
}
