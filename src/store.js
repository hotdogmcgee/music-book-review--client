export const STORE = {
    bookList: [
        {
            instrument: 'piano',
            image: 'image',
            title: 'where the red fern grows',
            author: 'zi forgot',
            description: 'two dogs in a very sad tale',
            rating: 4,
            numReviews: 10,
            id: 1,
            published_year: 2001,
            cost: 30,
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
        },
        {
            instrument: 'guitar',
            image: 'image',
            title: 'Harry Potter and the Goblet of Fire',
            author: 'JK Rowling',
            description: 'everyone knows it by now',
            rating: 3,
            numReviews: 3,
            cost: 20,
            published_year: 1990,
            id: 2
        },
        {
            instrument: 'guitar',
            image: 'image',
            title: 'Harry Potter and the Chamber of Secrets',
            author: 'JK Rowling',
            description: 'not my fav',
            rating: 2,
            numReviews: 4,
            cost: 15,
            published_year: 1988,
            id: 3
        },
        {
            instrument: 'clarinet',
            image: 'image',
            title: 'The Only Way to Learn Clarinet',
            author: 'Sally Reed',
            description: 'the best ever',
            rating: 5,
            numReviews: 100,
            cost: 30,
            published_year: 2002,
            id: 4
        }
    ]
}