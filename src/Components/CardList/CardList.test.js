import React from 'react';
import CardList from './CardList'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('CardList component', () => {
    const instrumentList = [
        { title: "guitar" },
        { title: "piano" },
        { title: "clarinet" },
        { title: "violin" }
      ];
    it('renders a CardList by default', () => {
        const wrapper = shallow(<CardList />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the CardList given props', () => {
        const wrapper = shallow(<CardList instruments={instrumentList} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})
