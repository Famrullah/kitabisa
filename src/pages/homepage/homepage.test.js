import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  HomePage from './homepage';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ({
    campaign:{
      listCampaign:campaignData, 
      loading: false
    }
  }),
}));

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

const props = {
  listCampaign:campaignData, 
  loading: false
}
 
describe('Stack', () => {
  it('renders listCampaign', () => {
    const wrapper = shallow(<HomePage />);
    const propsWrap = wrapper.props().children.props.children.props;
    expect(propsWrap.campaign).toEqual(props)
    expect(wrapper).not.toBeNull();
  });
});