import React from 'react'

function ListCampaign (props){
  console.log(props)
  if(props){
    return(
      <div className="content-box">
        {props.listCampaign.map((item,index)=>(
          <div key={index} className="campaign">
            <img src={item.image} alt=""/>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default ListCampaign

// 