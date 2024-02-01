export {default} from 'next-auth/middleware'

export const config = {
    matcher:[
        '/admin',
        '/dashboard',
        '/dashboard/add',
        '/dashboard/update/:id+'
    ]
}