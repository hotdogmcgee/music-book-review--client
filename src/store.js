export const STORE = {
  bookList: [
    {
      instrument: "piano",
      image: "image",
      title: "where the red fern grows",
      description: "two dogs in a very sad tale",
      rating: 4,
      numReviews: 10,
      id: 1,
      published_year: 2001,
      cost: 30,
      authors: [
        {
          first_name: "Suzie",
          last_name: "Violin"
        },
        {
          first_name: "Will",
          last_name: "Superstar"
        }
      ],

      reviews: [
        {
          user: {
            full_name: "dave bones"
          },
          rating: 3,
          id: 1,
          text: "it was pretty good"
        }
      ]
    },
    {
      instrument: "guitar",
      image: "image",
      title: "Harry Potter and the Goblet of Fire",
      description: "everyone knows it by now",
      rating: 3,
      numReviews: 3,
      cost: 20,
      authors: [
        {
          first_name: "Suzie",
          last_name: "Violin"
        }
      ],
      published_year: 1990,
      id: 2,
      reviews: [
        {
          user: {
            full_name: "dave bones"
          },
          rating: 3,
          id: 1,
          text: "not good"
        }
      ]
    },
    {
      instrument: "guitar",
      image: "image",
      title: "Harry Potter and the Chamber of Secrets",
      description: "not my fav",
      rating: 2,
      numReviews: 4,
      cost: 15,
      reviews: [],
      authors: [
        {
            first_name: "Jim",
            last_name: "Cool"
          }
      ],
      published_year: 1988,
      id: 3
    },
    {
      instrument: "clarinet",
      image: "image",
      title: "The Only Way to Learn Clarinet",
      description: "the best ever",
      rating: 5,
      numReviews: 100,
      cost: 30,
      authors: [
        {
            first_name: "Mister",
            last_name: "Clarinet"
          }
      ],
      published_year: 2002,
      id: 4,
      reviews: [
        {
          user: {
            full_name: "dave bones"
          },
          rating: 3,
          id: 1,
          text: "it was pretty good"
        },
        {
            user: {
              full_name: "joe joe"
            },
            rating: 5,
            id: 1,
            text: "amazing!"
          }
      ]
    }
  ]
};
