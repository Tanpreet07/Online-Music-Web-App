import React from 'react'

const Playcard = (props) => {
  return (
    <div className='card-container'>
      <div className="card-img-box">
        <img src={props.img1} alt="card image" className="card-img" width={150} height={160}/>
      </div>
      <div className="description-box">
        <h3 className='title'>{props.title1}</h3>
        <p className="song-description">{props.des1}</p>
      </div>
    </div>
  )
}

export default Playcard
