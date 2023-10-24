import React from 'react'
import data from "./data.json"
import { Header } from './Header'
import model from "./glassesImage/model.jpg"
import g1 from "./glassesImage/g1.jpg"
import g2 from "./glassesImage/g2.jpg"
import { useState } from 'react'

export const BTState = () => {
    const [imgSrc, setimgSrc] = useState(data[0].url)
    
    
  return (
    <div className="main container-fluid img-fluid">
        <div className='header'><Header />
        </div>
        <div className="body row justify-content-center pt-5">
            <div className="col-lg-6 ">
                <div className="model-left text-center ">
                   <img src={model} alt="..." />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="model-right text-center">
                <img src={model} alt="..." />
                    <div className="glasses">
                        <img src={imgSrc} alt="..." />
                    </div>
                </div>
            </div>
        </div>
        <div className="footer  mt-3">
            <div className="row bg-dark">
            <div className="col-lg-2">
                <img className='btn img-fluid ' onClick={() =>{
                setimgSrc(data[0].url)
            }} src={g1} alt="..." />
                <div className="card-title">{data[0].name}</div>
            </div>
            <div className="col-lg-2">
                <img className='btn img-fluid' onClick={() =>{
                setimgSrc(data[1].url)
            }} src={g2} alt="..." />
                <div className="card-title">{data[1].name}</div>
            </div>            
            <div className="col-lg-2">
                <img className='btn img-fluid' onClick={() =>{
                setimgSrc(data[2].url)
            }} src="./glassesImage/g3.jpg" alt="" />
                <div className="card-title">{data[2].name}</div>
            </div>
            <div className="col-lg-2">
            <img className='btn img-fluid ' onClick={() =>{
                setimgSrc(data[3].url)
            }} src="./glassesImage/g4.jpg" alt="" />
                <div className="card-title">{data[3].name}</div>
            </div>
            <div className="col-lg-2">
            <img className='btn img-fluid ' onClick={() =>{
                setimgSrc(data[4].url)
            }} src="./glassesImage/g5.jpg" alt="" />
                <div className="card-title">{data[4].name}</div>
            </div>
            <div className="col-lg-2">
            <img className='btn img-fluid ' onClick={() =>{
                setimgSrc(data[5].url)
            }} src="./glassesImage/g6.jpg" alt="" />
                <div className="card-title">{data[5].name}</div>
            </div>
            <div className="col-lg-2">
            <img className='btn img-fluid ' onClick={() =>{
                setimgSrc(data[6].url)
            }} src="./glassesImage/g7.jpg" alt="" />
                <div className="card-title">{data[6].name}</div>
            </div>
            <div className="col-lg-2">
            <img className='btn img-fluid ' onClick={() =>{
                setimgSrc(data[7].url)
            }} src="./glassesImage/g8.jpg" alt="" />
                <div className="card-title">{data[7].name}</div>
            </div>
            <div className="col-lg-2">
            <img className='btn img-fluid' onClick={() =>{
                setimgSrc(data[8].url)
            }} src="./glassesImage/g9.jpg" alt="" />
                <div className="card-title">{data[8].name}</div>
            </div>
            
            </div>
            
        </div>
    </div>
    
    

  )
}
