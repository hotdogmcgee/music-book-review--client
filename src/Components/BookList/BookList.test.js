import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './BookList.js'
import renderer from 'react-test-renderer'
import { STORE } from '../../store.js'

describe('BookList component', () => {

    const list = STORE.bookList
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BookList list={list}/>, div);
    ReactDOM.unmountComponentAtNode(div); 
    })

    it('renders the UI as expected,', () => {
        const tree = renderer
          .create(<BookList list={list}/>)
          .toJSON();
          expect(tree).toMatchSnapshot();
      })
})