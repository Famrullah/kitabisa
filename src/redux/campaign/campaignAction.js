import {api} from '../../api'

const campaignAction = {
  GET_DATA:'GET_CAMPAIGN',

  setData:(data)=>{
    return {
      type: "GET_CAMPAIGN",
      payload:data
    }
  },

  getData: () => {
    return (dispatch) => {
      api.get('/southern-waters-642.appspot.com/fe_code_challenge/campaign.json')
      .then(({data}) => {
        dispatch(
          campaignAction.setData(data)
        )
      })
    }
  },
};

export default campaignAction;