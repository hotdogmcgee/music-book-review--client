import React from 'react';
import CategoryPage from './CategoryPage'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('CategoryPage component', () => {

    it('renders a CategoryPage by default', () => {
        const wrapper = shallow(<CategoryPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})