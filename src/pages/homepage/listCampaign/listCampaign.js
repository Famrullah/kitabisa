import React from 'react'

function ListCampaign (props){
  if(props){
    return(
      <div className="content-box">
        {props.listCampaign.map((item,index)=>(
          <div key={index} className="campaign">
            <img src={item.image} alt=""/>
          </div>
        ))}
      </div>
    )
  }
}

export default ListCampaign