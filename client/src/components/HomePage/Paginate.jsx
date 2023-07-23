import React from 'react'
import "./Paginate.css"
export default function Paginate({page,handleButton,handleNext,handlePrevious,arr}) {
    console.log(page.currentPage)
    console.log(arr)
  return (
    <div>
          {page.currentPage !== 1 ? <button id="Previous" onClick={handlePrevious}>Previous</button> : null}
                {arr.map((n) => (
                    <button value={n} id={n!==page.currentPage?"Buttons":"Buttons1"} onClick={handleButton}>{n}</button>
                ))}
                {page.currentPage < arr.length && arr.length !== 1 ? <button id="Next" onClick={handleNext}>Next</button> : null}
                
    </div>
  )
}
