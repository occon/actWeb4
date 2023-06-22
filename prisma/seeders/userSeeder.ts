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
            password: 'gwenstacy'
        },
        {
            email: 'steverogers@stark.com',
            password: 'steverogers'
        },
        {
            email: 'slang@pym.org',
            password: 'scottlang'
        },
        {
            email: 'drstrange@supreme.com',
            password: 'drstrange'
        },
        {
            email: 'p.pots@stark.com',
            password: 'pepperpots'
        },
    ]
    })
    console.log(user);
}