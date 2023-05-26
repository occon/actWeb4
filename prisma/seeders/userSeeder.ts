import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const userSeeder = async() => {
    const user = await prisma.user.createMany({
        data: [{
            email: 'peter.parker@esu.edu',
            password: 'peterparker'
        },
        {
            email: 'gstacy@esu.edu',
            password: 'peterparker'
        },
        {
            email: 'steverogers@stark.com',
            password: 'peterparker'
        },
        {
            email: 'slang@pym.org',
            password: 'peterparker'
        },
        {
            email: 'drstrange@supreme.com',
            password: 'peterparker'
        },
        {
            email: 'p.pots@stark.com',
            password: 'peterparker'
        },
    ]
    })
    console.log(user);
}