# HEy API

## Plugins

- Core
- Clients
- Validators
- State Management
- Mocks
- Web Frameworks
- Concepts
- Custom
  - Plugin
  - Client

### Core

`Apart from being responsible for the default output, core plugins are the foundation for other plugins. Instead of creating their own primitives, other plugins can reuse the artifacts from core plugins. This results in a smaller output size and a better user experience.`

- TypeScript
  - Note: You can customize the naming and casing pattern for requests and responses types using the .name and .case options.

- SDK
  - Note 1: You can change this to your preferred name, which you can do using operation.containerName.
  - Note 2: Validating data at runtime comes with a performance cost, which is why it's not enabled by default.

- Transformers
  - Note 1: To convert date strings into Date objects.
  - Note 2: To natively type all BigInts as bigint instead of number

- Schemas
  - Note: You can modify the contents of schemas.gen.ts whether json or form.

### Clients

`We all send HTTP requests in a slightly different way. Hey API doesn't force you to use any specific technology. What we do, however, is support your choice with great clients. All seamlessly integrated with our other features.`

- Fetch API
- Angular
- Axios
- Ky
- Next.js
- Nuxt
- OFetch
- Effect (soon)
- Got (soon)

### Validators

`There are times when you cannot blindly trust the server to return the correct data. You might be working on a critical application where any mistakes would be costly, or you're simply dealing with a legacy or undocumented system.

Whatever your reason to use validators might be, you can rest assured that you're working with the correct data.`

- Valibot
- Zod
- Ajv (soon)
- Arktype (soon)
- Joi (soon)
- TypeBox (soon)
- Yup (soon)

### State Management

`Any reasonably large application will have to deal with state management at some point. State-related code is often one of the biggest boilerplates in your codebase. Well, at least until you start using our state management plugins.`

- Pinia Colada
- TanStack Query
- SWR (soon)
- Zustand (soon)

### Mocks

`Realistic mock data is an important component of every robust development process, testing strategy, and product presentation.`

- Chance (soon)
- Faker (soon)
- Falso (soon)
- MSW (soon)
- Nock (soon)
- Supertest (soon)

### Web Frameworks

`There are two approaches to developing APIs: code-first, where you start with the code, or spec-first, where you begin with the specification. If you use the latter, you can ensure your APIs adhere to the specification with our web framework plugins.`

- Angular
- Fastify
- Nest
- oRPC
- Adonis Soon
- Elysia Soon
- Express Soon
- Hono Soon
- Koa Soon

### Resolvers

`Sometimes the default plugin behavior isn't what you need or expect. Resolvers let you patch plugins in a safe and performant way, without forking or reimplementing core logic.`
