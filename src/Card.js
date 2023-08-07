import React from 'react'

function Card(props) {
   const a=`${props.clg}`
   
  return (
    <div style={{margin:"30px auto"}}>
        <div style={{height:"250px", width:"190px", boxShadow:"1px 1px 10px black", margin:"20px"}}>
        <div style={{height:"60%", width:"100%", backgroundColor:a}}>

        </div>
        <div style={{margin:"10px"}}>
        <h2> {props.code}</h2>
        <h3 style={{marginTop:"-20px", color:a}}>{props.name}</h3>
        </div>
    </div>
    </div>
  )
}

export default Card