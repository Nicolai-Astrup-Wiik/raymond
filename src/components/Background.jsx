import React, { useEffect, useRef } from 'react';
import videoBG from '../assets/RE-bgd-v2.mp4';
import styles from '../styles/Background.module.css';
import { Header } from './header/Header';

export const Background = ({ children, isAuthenticated }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;  // Force the video to be muted
    }
  }, []);

  return (
    <div className={styles['background-video-div']}>
      <video
        ref={videoRef}
        className={styles['background-video']}
        autoPlay
        loop
        muted
        playsInline // Ensure it works on mobile
      >
        <source src={videoBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ maxWidth: "100vw" }}>
        <Header isAuthenticated={isAuthenticated} />
        {children}
      </div>
    </div>
  );
}
