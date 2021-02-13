import React from 'react'

function ListCampaign (props){

  const currencyFormat = ( val) => {
    const options = {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 2,
    };
    const format = new Intl.NumberFormat('id-ID', options).format(val);
    return format;
  };

  if(props){
    return(
      <div className="content-box">
        {props.listCampaign.map((item,index)=>(
          <div key={index} className="campaign">
            <img src={item.image} alt=""/>
            <h3 className="title">{item.title}</h3>
            <hr/>
            <div className="content-box__desc">
              <div className="content-box__item-left">
                <p>terkumpul</p>
                <p>{currencyFormat(item.donation_received)}</p>
              </div>
              <div className="content-box__item-right">
                <p>sisa hari</p>
                <p>{item.days_remaining}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ListCampaign

// 