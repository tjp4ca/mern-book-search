import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
        _id
        username
        email
        bookCount
        books {
            bookId
            authors
            description
            title
            image
            link
            }
        }
    }
`;
