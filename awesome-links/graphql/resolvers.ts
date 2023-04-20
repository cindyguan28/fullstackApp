// Copyright 2023 XinGuan
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// /graphql/resolvers.ts
export const resolvers = {
    Query: {
      links: () => {
        return [
          {
            category: 'Open Source',
            description: 'Fullstack React framework',
            id: 1,
            imageUrl: 'https://nextjs.org/static/twitter-cards/home.jpg',
            title: 'Next.js',
            url: 'https://nextjs.org',
          },
          {
            category: 'Open Source',
            description: 'Next Generation ORM for TypeScript and JavaScript',
            id: 2,
            imageUrl: 'https://www.prisma.io/images/og-image.png',
            title: 'Prisma',
            url: 'https://www.prisma.io',
          },
          {
            category: 'Open Source',
            description: 'GraphQL implementation',
            id: 3,
            imageUrl: 'https://www.apollographql.com/apollo-home.jpg',
            title: 'Apollo GraphQL',
            url: 'https://apollographql.com',
          },
        ]
      },
    },
}
  