import React from 'react';
import BrowseDropdown from './BrowseDropdown'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('BrowseDropdown component', () => {

    it('renders a BrowseDropdown by default', () => {
        const wrapper = shallow(<BrowseDropdown />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})