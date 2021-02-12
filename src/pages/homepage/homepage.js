import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import  campaignAction  from "../../redux/campaign/campaignAction";


function HomePage(){
  const dispatch = useDispatch()
  const { getData } = campaignAction;
  const listCampaign = useSelector(
    (state) => state.campaign
  );

  useEffect(() => {
    dispatch(getData())
  },[dispatch, getData]);
  return(
    <div className="homepage">
      {/* {listCampaign.map(item =>(
        <div>{item.title}</div>
      ))} */}
    </div>
  )
}

export default HomePage