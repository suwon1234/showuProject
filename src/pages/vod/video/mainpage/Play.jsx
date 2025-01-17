import React from 'react';

const Play = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '700px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <video src={`/video/testplay.mp4`} controls width="700px"></video>
      <h1>Play Video</h1>
    </div>
  );
};

export default Play;
