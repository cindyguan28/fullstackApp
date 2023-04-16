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

// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import { links } from '../awesome-links/data/links'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: `testemail@gmail.com`,
            role: 'ADMIN',
        },
    })

    await prisma.link.createMany({
        data: links,
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })