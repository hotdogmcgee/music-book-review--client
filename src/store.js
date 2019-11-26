export const STORE = {
    bookList: [
        {
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
        },
        {
            image: 'another image',
            title: 'Harry Potter and the Goblet of Fire',
            author: 'JK Rowling',
            description: 'everyone knows it by now',
            rating: 3,
            numReviews: 3,
            id: 2
        }
    ]
}