import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import BookPage from './BookPage'

describe.only(`BookPage component`, () => {
  const props = {
    image: 'an image',
            title: 'where the red fern grows',
            author: 'i forgot',
            description: 'two dogs in a very sad tale',
            rating: 4,
            numReviews: 10,
            id: 1,
            reviews: [
                {
                    user: {
                        full_name: 'dave bones'
                    },
                    rating: 3,
                    id: 1,
                    text: 'it was pretty good'
                }
            ]
  }

  it('renders a BookPage by default', () => {
    const wrapper = shallow(<BookPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Book given props', () => {
    const wrapper = shallow(<BookPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})