import React from 'react';
import BookList from './BookList.js'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { STORE } from '../../store.js'

describe('BookList component', () => {

    const list = STORE.bookList

      it('renders a BookList by default', () => {
        const wrapper = shallow(<BookList />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
    
      it('renders the BookList given props', () => {
        const wrapper = shallow(<BookList bookList={list} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})