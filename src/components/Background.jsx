import React from 'react';
// @ts-ignore
import videoBG from '../assets/RE-bgd-v2.mp4';
import styles from '../styles/Background.module.css';  
import { Header } from './Header';

export const Background = ({children}) => {
  return (
    <div className={styles['background-video-div']}>  
      <video className={styles['background-video']} autoPlay loop muted src={videoBG} />
      <Header />
      {children}
    </div>
  );
}
