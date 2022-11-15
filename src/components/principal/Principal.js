import React from 'react'
import './principal.css'
import { useTranslation } from 'react-i18next';


const Principal = () => {

  const { t, i18n } = useTranslation();


  return (
    <div class="wrapper">
    <div class="header">
     <div class="search-bar">
      <input type="text" placeholder="Search" />
     </div>
     <div class="user-settings">
      <img class="user-img" src="https://images.unsplash.com/photo-1587918842454-870dbd18261a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=943&q=80" alt="" />
      <div class="user-name">Thomas</div>
      <svg viewBox="0 0 492 492" fill="currentColor">
       <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
      </svg>
      <div class="notify">
       <div class="notification"></div>
       <svg viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z" />
       </svg>
      </div>
     </div>
    </div>
    <div class="main-container">
     <div class="main-header anim">{t('TituloYSubtitulo.1')}</div>
     <div class="main-blogs">
      <div class="main-blog anim" >
       <div class="main-blog__title">{t('Card.1')}</div>
       <div class="main-blog__author">
        <div class="author-img__wrapper">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
          <path d="M20 6L9 17l-5-5" />
         </svg>
         <img class="author-img" src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
        </div>
        <div class="author-detail">
         <div class="author-name">Thomas Hope</div>
         <div class="author-info">53K {t('tiempo.1')} <span class="seperate"></span>{t('tiempo.3')}</div>
        </div>
       </div>
       <div class="main-blog__time">7 {t('tiempo.4')}</div>
      </div>
      <div class="main-blog anim" >
       <div class="main-blog__title">{t('Card.2')}</div>
       <div class="main-blog__author tips">
        <div class="main-blog__time">7 {t('tiempo.4')}</div>
        <div class="author-img__wrapper">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
          <path d="M20 6L9 17l-5-5" />
         </svg>
         <img class="author-img" src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div class="author-detail">
         <div class="author-name">Tony Andrew</div>
         <div class="author-info">53K {t('tiempo.1')} <span></span>{t('tiempo.3')}</div>
        </div>
       </div>
      </div>
     </div>
     <div class="small-header anim" >{t('TituloYSubtitulo.2')}</div>
     <div class="videos">
      <div class="video anim" >
       <div class="video-time">8 {t('tiempo.4')}</div>
       <div class="video-wrapper">
        <video muted="">
         <source src="https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div class="author-img__wrapper video-author">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
          <path d="M20 6L9 17l-5-5" />
         </svg>
         <img class="author-img" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
       </div>
       <div class="video-by">Andy William</div>
       <div class="video-name">{t('Minicard1.1')}</div>
       <div class="video-view">54K {t('tiempo.1')}<span class="seperate video-seperate"></span>{t('tiempo.2')}</div>
      </div>
      <div class="video anim" >
       <div class="video-time">5 {t('tiempo.4')}</div>
       <div class="video-wrapper">
        <video muted="">
         <source src="https://player.vimeo.com/external/449972745.sd.mp4?s=9943177fe8a6147b7bc4598259401f06ec57878a&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div class="author-img__wrapper video-author">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
          <path d="M20 6L9 17l-5-5" />
         </svg>
         <img class="author-img" src="https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
       </div>
       <div class="video-by offline">Gerard Bind</div>
       <div class="video-name">{t('Minicard1.2')}</div>
       <div class="video-view">42K {t('tiempo.1')}<span class="seperate video-seperate"></span>{t('tiempo.2')}</div>
      </div>
      <div class="video anim" >
       <div class="video-time">7 min</div>
       <div class="video-wrapper">
        <video muted="">
         <source src="https://player.vimeo.com/external/436553499.sd.mp4?s=0e44527f269278743db448761e35c5e39cfaa52c&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div class="author-img__wrapper video-author">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
          <path d="M20 6L9 17l-5-5" />
         </svg>
         <img class="author-img" src="https://images.pexels.com/photos/1870163/pexels-photo-1870163.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
       </div>
       <div class="video-by offline">John Wise</div>
       <div class="video-name">{t('Minicard1.3')}</div>
       <div class="video-view">64K {t('tiempo.1')}<span class="seperate video-seperate"></span>{t('tiempo.3')}</div>
      </div>
      <div class="video anim" >
       <div class="video-time">6 {t('tiempo.4')}</div>
       <div class="video-wrapper">
        <video muted="">
         <source src="https://player.vimeo.com/external/361861493.sd.mp4?s=19d8275ca755d653042a87ef28b2f0b2eabf57d0&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div class="author-img__wrapper video-author">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
          <path d="M20 6L9 17l-5-5" />
         </svg>
         <img class="author-img" src="https://images.pexels.com/photos/2889942/pexels-photo-2889942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
       </div>
       <div class="video-by">Budi Hakim</div>
       <div class="video-name">{t('Minicard1.4')}</div>
       <div class="video-view">50K {t('tiempo.1')}<span class="seperate video-seperate"></span>{t('tiempo.2')}</div>
      </div>
     </div>
    </div>
   </div>
  )
}

export default Principal
