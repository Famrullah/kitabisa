import campaignAction from './campaignAction';

const initState = {
  listCampaign:[],
  loading:true
};

export default function campaignReducer(state = initState, action) {
  switch (action.type) {
    case campaignAction.GET_DATA:
      return {
        ...state,
        listCampaign:action.payload.data,
        loading:false
      };
    default:
      return state;
  }
}
