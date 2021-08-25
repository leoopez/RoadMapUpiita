/** @format */

import React from "react";

export default function NavLink({ to, href, target }) {
  return (
    <li>
      <a className='nav--item' href={href}>
        {to}
      </a>
    </li>
  );
}
