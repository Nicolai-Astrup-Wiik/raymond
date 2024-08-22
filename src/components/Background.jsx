import React, { useEffect, useRef } from 'react';
// @ts-ignore
import videoBG from '../assets/RE-bgd-v2.mp4';
import styles from '../styles/Background.module.css';
import { Header } from './Header';

export const Background = ({ children }) => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;  // Force the video to be muted
    }
  }, []);

  return (
    <div className={styles['background-video-div']}>
      <video src="https://mega.nz/embed/7JVTwbSC#XUDUNNwJgr1TmEVqR_RI6DBvlxNeglndiwyOFRbhYk8" className={styles['background-video']} autoPlay loop muted src={videoBG} />
      <div style={{ maxWidth: "100vw" }}>

        <Header />
        {children}
      </div>
    </div>
  );
}
