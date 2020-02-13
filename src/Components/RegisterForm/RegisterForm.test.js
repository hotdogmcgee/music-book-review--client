import React from 'react';
import RegisterForm from './RegisterForm'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('RegisterForm component', () => {

    it('renders a RegisterForm by default', () => {
        const wrapper = shallow(<RegisterForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})