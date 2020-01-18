import gql from 'graphql-tag'

export const USERS = gql`
  query AllUsers {
    users{
      id
      name
      email
    }
  }
`