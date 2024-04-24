import React, { useEffect, useState } from 'react'
import {reviews} from './testimonials'
export default function Testimonial() {
    var [index,setIndex]=useState(0)
    function next(){
        setIndex(oldIndex=>{
            if(oldIndex===reviews.length-1){
                return 0
            }
            else{
                return oldIndex+1
            }
        })
    }
    function prev(){
        setIndex(oldIndex=>{
            if(oldIndex===0){
                return reviews.length-1
            }
            else{
                return oldIndex-1
            }
        })
    }
    return (
        <div>
            <h1>Testimonial</h1>
            <ul class="d-flex justify-content-center align-items-center">
                
                    <i class="bi bi-arrow-left-square-fill" onClick={()=>{prev()}}></i>
                    {
                        <li className='w-25'>
                            <img className='w-100 thumbnail'  src={reviews[index].image} alt="" />
                            <h3>{reviews[index].name}</h3>
                            <i>{reviews[index].job}</i>
                            <p>{reviews[index].text}</p>
                        </li>
                    }
                    <i class="bi bi-arrow-right-square-fill" onClick={()=>{next()}}></i>
                
                
            </ul>
        </div>
    )
}
