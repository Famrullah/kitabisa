import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import  campaignAction  from "../../redux/campaign/campaignAction";
import ListCampaignComponent from './listCampaign/listCampaign'


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
      <ListCampaignComponent {...listCampaign}/>
    </div>
  )
}

export default HomePage