import CampaingAction from './campaignAction';
import { fakeServer } from 'sinon';


describe('actions', () => {
  beforeEach(() => {
    let server = fakeServer.create();
  
    server.respondWith(
      'GET',
      `https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json`,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify({'response': 'ok'})
      ]
    );
  });

  it('creates an action to set list campaign', () => {
    const campaignData = [
      {
        "id": 94597,
        "order": 1,
        "parent_project_id": 0,
        "title": "#BisaBangkit Bersama Kitabisa",
        "expired": 2147483647,
        "image": "https://img.staging.kitabisa.cc/size/664x357/0f9a7205-79ef-49c9-a95a-49347fbd00a6.jpg",
        "days_remaining": 0,
        "donation_received": 178613497,
        "campaigner": "Kitabisa.com",
        "campaigner_type": "PERSONAL",
        "campaigner_badge": "https://assets.kitabisa.com/images/icon__verified-user.svg",
        "campaigner_is_verified": true,
        "category_name": "Bencana Alam",
        "is_forever_running": true,
        "is_open_goal": false,
        "request_userdata": false,
        "donation_target": 500000000,
        "donation_percentage": 0.357227,
        "short_url": "bisabangkit",
        "is_featured": 0,
        "custom_fb_pixel": ""
      },
    ];

    const expectedAction = {
      type: CampaingAction.GET_DATA,
      payload:campaignData
    };

    expect(CampaingAction.setData(campaignData)).toEqual(expectedAction);
  });
  
})
