import React from 'react';
import AboutPage from './AboutPage'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('AboutPage component', () => {

    it('renders a AboutPage by default', () => {
        const wrapper = shallow(<AboutPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})