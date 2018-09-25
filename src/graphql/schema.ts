import {makeExecutableSchema} from 'graphql-tools'


const users: any[] = [
   { 
        id:1,
        name:'Julio',
        email:'julio.santana@gmail.com'
   },
   { 
    id:2,
    name:'Jon',
    email:'jon@email.com'
 }

]

const typeDefs = `

    type User{
        id: ID!
        name: String!
        email: String!
    }

    type Query{
        allUsers: [User!]!
    }
`;

const resolvers = {
    Query:{
        allUsers: () => users
    }
};

export default makeExecutableSchema({typeDefs, resolvers});
