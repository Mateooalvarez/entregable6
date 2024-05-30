import { useState } from 'react'
import './styles/SliderImgs.css'

const SliderImgs = ({ hotel }) => {

  const [imgSelected, setImgSelected] = useState(0)


 const objStyle = {
     transform: `translateX(calc((-${imgSelected}/${hotel?.images.length})*100%))`,
     width: `${hotel?.images.length * 100}%`
 }

const handlePrevImg = () => {
    if (imgSelected - 1 >= 0) {
     setImgSelected(imgSelected - 1)
    }
}


 const handleNextImg = () => {
    const lengthImgs = hotel?.images.length - 1
    setImgSelected(state => (state + 1 <= lengthImgs) ? state + 1 : 0)
 }

    return (
        <div className='center__slider'> 
 <div className='slider'>
    <button onClick={handlePrevImg} className='slider__btn'>&lt;</button>
    <div className='slider__interior'>
    <div style={objStyle} className='slider__movable'>
        {
            hotel?.images.map(imgInfo => (
            <div key={imgInfo.id} className='slider__img__container'>
                <img className='slider__img' src={imgInfo.url} alt="" />
            </div>
           ))
        }
    </div>
    </div>
    <button onClick={handleNextImg} className='slider__btn slider__btn__next'>&gt;</button>
 </div>
           </div>
)
}

export default SliderImgs