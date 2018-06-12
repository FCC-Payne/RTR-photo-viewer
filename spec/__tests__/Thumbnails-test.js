import React from 'react';
import { shallow } from 'enzyme';
import Thumbnails from '../../client/Thumbnails.jsx';
import Thumbnail from '../../client/Thumbnail.jsx';
import Arrow from '../../client/Arrow.jsx';


const photos = ['url1', 'url2', 'url3', 'url4'];

const wrapper = shallow(<Thumbnails photos={photos} />, {lifecycleExperimental: true});

describe('Thumbnails', () => {
  it('should render 4 Thumbnail components', () => {
    expect(wrapper.find(Thumbnail)).toHaveLength(4);
  });
  it('should render 2 Arrow components', () => {
    expect(wrapper.find(Arrow)).toHaveLength(2);
  });
});
