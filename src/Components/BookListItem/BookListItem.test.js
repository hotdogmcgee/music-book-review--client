import React from 'react';
import ReactDOM from 'react-dom';
import BookListItem from './BookListItem.js'
import renderer from 'react-test-renderer'
import { STORE } from '../../store.js'


describe('BookList component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BookListItem {...STORE.bookList[0]}/>, div);
    ReactDOM.unmountComponentAtNode(div); 
    })

    it('renders the UI as expected,', () => {
        const tree = renderer
          .create(<BookListItem {...STORE.bookList[0]}/>)
          .toJSON();
          expect(tree).toMatchSnapshot();
      })
})