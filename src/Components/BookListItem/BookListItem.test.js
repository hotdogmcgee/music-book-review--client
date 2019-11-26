import React from 'react';
import BookListItem from './BookListItem.js'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { STORE } from '../../store.js'


describe('BookList component', () => {

    const item = STORE.bookList[0]
    // it('renders without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<BookListItem item={item}/>, div);
    // ReactDOM.unmountComponentAtNode(div); 
    // })

    // it('renders the UI as expected,', () => {
    //     const tree = renderer
    //       .create(<BookListItem {...STORE.bookList[0]}/>)
    //       .toJSON();
    //       expect(tree).toMatchSnapshot();
    //   })

      it('renders a BookListItem by default', () => {
        const wrapper = shallow(<BookListItem />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
    
      it('renders the BookListItem given props', () => {
        const wrapper = shallow(<BookListItem item={item} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})