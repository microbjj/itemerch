import { request } from '@/api/request'

export async function fetchSession() {
    return await request({
        url: '/auth/session',
    })
}
