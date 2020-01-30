import React from 'react';
import Header from './Header.js'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe('Header component', () => {

    it('renders a Header by default', () => {
        const wrapper = shallow(<Header />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it("renders the UI as expected", () => {
        const tree = renderer
          .create(
            <BrowserRouter>
              <Header />
            </BrowserRouter>
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

})