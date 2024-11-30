import React, { useEffect, useState } from 'react';

const Play = ({ play }) => {
  const {id,title,thumbnail,videoUrl,mainImage}=play;


  return (
    <div>
      <video src={videoUrl} controls width="600px">
      </video>
      <h1>{title}</h1>
    </div>
  );
};

export default Play;
