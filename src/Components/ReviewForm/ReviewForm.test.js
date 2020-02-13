import React from 'react';
import ReviewForm from './ReviewForm'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('ReviewForm component', () => {

    it('renders a ReviewForm by default', () => {
        const wrapper = shallow(<ReviewForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})