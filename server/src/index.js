const { GraphQLServer } = require('graphql-yoga')

// Schema
const typeDefs = './src/schema.graphql'

// Dummy data
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]
let idCount = links.length

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: function(id) {
      if (!links[id]) {
        throw new Error('no link with id:' + id)
      }
      return "links[id]"
    }
  },
  Mutation: {
    post: (parent, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    },
    updateLink: (parent, args) => {
      links[args.id] = {
        id: args.id,
        description: args.description,
        url: args.url
      }
      return links[args.id]
    },
    deleteLink: (parent, args) => {
      links.splice(args.id, 1)
      return links[args.id]
    }
  },
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
