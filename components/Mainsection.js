"use client"
import React from 'react'
import "./mainsection.css";
import Playcard from './Playcard';
import "./playcard.css";
import { songs } from './songs'
import Player from './Player';
import { useState } from 'react';
import { Pausebtn } from './player-btns/Pausebtn';
// import view from "../public/images/Viewlist.png"


const Mainsection = ({showsidebar,setshowsidebar}) => {
  const [cardsong, setcardsong] = useState(songs[0]);
  const [song, setsong] = useState(songs[0].audio);
  const [song1,setsong1] = useState(song[0]);
  const [isplay, setisplay] = useState(false);
  const [showsonglist, setshowsonglist] = useState(false);

  return (
    <div>
      <div className="main-container">
        <div className="bar1">
          <h2 className='discover'>Discover</h2>
          <div className="search-bar">
            <input type="text" id='search' name='search' className="search" placeholder='Search your favourite song'/>
            <button className='search-btn'><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 17.5C14.9779 17.5 18 14.4779 18 10.75C18 7.02208 14.9779 4 11.25 4C7.52208 4 4.5 7.02208 4.5 10.75C4.5 14.4779 7.52208 17.5 11.25 17.5Z" stroke="white"/>
<path d="M16.2002 15.7002L20.3002 19.8002" stroke="white"/>
</svg></button>
          </div>
        </div>
        <div className="main-box">
          <div className="left-box">
            <div className="main-inner-container">
              {songs.map((item, index) => (
                <div key={index} className='card-container' onClick={()=>{setsong(songs[index].audio),setshowsonglist(!showsonglist),setcardsong(songs[index])}}>
                  <div className="card-img-box">
                    <img src={item.img}
                      alt="card image"
                      className="card-img"
                      width={150} height={160}
                    />
                  </div>
                  <div className="description-box">
                    <h3 className='title'>{item.title}</h3>
                    <p className="song-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="player-box">
              <Player song={song} song1={song1} setsong1={setsong1} isplay={isplay} setisplay={setisplay} showsonglist={showsonglist} setshowsonglist={setshowsonglist} showsidebar={showsidebar}setshowsidebar={setshowsidebar} cardsong={cardsong}/>
            </div>
          </div>
          <div  className={showsonglist?"list-section":"list1-section"}>
          <div className="library-box">
            <img src="./images/Viewlist.png" alt="pic" className='library-icon' />
            <h3 className="library-text">Library</h3>
          </div>
          <div className="right-box">
            {song.map((item,index) =>(
              <div key={index} className="song-container" onClick={()=>{setsong1(song[index])}}>
               <img src={item.songimg} alt="" className="cover-pic" width={65} height={65}/>
               <div className="song-des-box">
                <p className="songtitle">{item.titlename}</p>
                <p className="artitsname">{item.singar}</p>
               </div>
               <div className="play-now-text">Play Now</div>
               <div className="song-list-play-pause-btn">
               { isplay?item.titlename === song1.titlename ?  <Pausebtn />:<svg width="33" height="33" viewBox="0 0 25 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <g>
        <path d="M5.75 19.2902V4.70985C5.75 3.94502 6.57366 3.46331 7.24026 3.83827L20.2005 11.1284C20.8802 11.5107 20.8802 12.4893 20.2005 12.8716L7.24026 20.1617C6.57366 20.5367 5.75 20.055 5.75 19.2902Z" stroke="white"/>
        </g>
        </svg>:<svg width="33" height="33" viewBox="0 0 25 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <g>
        <path d="M5.75 19.2902V4.70985C5.75 3.94502 6.57366 3.46331 7.24026 3.83827L20.2005 11.1284C20.8802 11.5107 20.8802 12.4893 20.2005 12.8716L7.24026 20.1617C6.57366 20.5367 5.75 20.055 5.75 19.2902Z" stroke="white"/>
        </g>
        </svg>}
               </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainsection
