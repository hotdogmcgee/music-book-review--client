import React from 'react';
import BookPage from './BookPage'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('BookPage component', () => {

    it('renders a BookPage by default', () => {
        const wrapper = shallow(<BookPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})