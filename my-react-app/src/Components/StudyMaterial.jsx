import React from 'react'
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image5 from '../assets/image5.png';
import './StudyMaterial.css';

export const StudyMaterial = () => {
  return (
    <div className='material-container'>
      <h2 className='study-material-heading'>ACCESS <span id="material">PREMIUM</span> STUDY MATERIAL</h2>
      <div className="explore-more"><strong>EXPLORE MORE ></strong></div>
      <div className="all-materials">
        <div className="box">
            <img src={image3} alt="" className='box-img' />
            <div class="rating"><strong>4.7 <span class="star">★★★★★</span></strong></div>
            <hr></hr>
            <div class="class">CLASS 7TH</div>
        </div>
        <div className="box">
            <img src={image2} alt="" className='box-img' />
            <div class="rating"><strong>4.7 <span class="star">★★★★★</span></strong></div>
            <hr></hr>
            <div class="class">CLASS 8TH</div>
        </div>
        <div className="box">
            <img src={image5} alt="" className='box-img' />
            <div class="rating"><strong>4.7 <span class="star">★★★★★</span></strong></div>
            <hr></hr>
            <div class="class">CLASS 9TH</div>
        </div>
      </div>
    </div>
  )
}
export default StudyMaterial