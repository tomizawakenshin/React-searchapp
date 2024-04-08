import React from 'react'
import './ImageGallery.css'

const ImageGallery = ({fechData}) => {
  return (
    <div>
        <div className='images-wrapper'>
            {fechData.map((data) => (
                <div className='image' key={data.id}>
                    <a href ={data.pageURL} target='blank'>
                        <img src= {data.largeImageURL} 
                        alt=""
                        />
                    </a>
                </div>
            ))}
       </div>
    </div>
  )
}

export default ImageGallery