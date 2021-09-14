/** @format */

import React from "react";

export default function WaitingRoom({ text }) {
  return (
    <div className='flex-container flex-container--center waiting-room'>
      <div className='waiting-text'>{text} &#x1F984; &#x1F333; &#x1F577; </div>
    </div>
  );
}
