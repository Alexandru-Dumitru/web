import React from 'react';
import '../../App.css';
import backgroundVideo from '../../videos/video-1.mp4';

const Home = () => (
  <>
    <video src={backgroundVideo} autoPlay loop muted />
  </>
);

export default Home;
