import React from 'react';
import FilterSortBar from './FilterSortBar.js'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { STORE } from '../../store.js'

describe('FilterSortBar component', () => {

      it('renders a FilterSortBar by default', () => {
        const wrapper = shallow(<FilterSortBar />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
    

})