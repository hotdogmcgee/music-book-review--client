export const STORE = {
    bookList: [
        {
            instrument: 'piano',
            image: 'an image',
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
            image: 'another image',
            title: 'Harry Potter and the Goblet of Fire',
            author: 'JK Rowling',
            description: 'everyone knows it by now',
            rating: 3,
            numReviews: 3,
            cost: 20,
            published_year: 1990,
            id: 2
        }
    ]
}