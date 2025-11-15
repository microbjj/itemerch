import { useEffect, useState } from 'react'
import { request } from '@/api/request'

export const useUsers = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)

        const loadUsers = async () => {
            try {
                const { data, error } = await request('/admin/users')
                if (error) {
                    console.error(error)
                }
                setUsers(data)
            } finally {
                setIsLoading(false)
            }
        }

        void loadUsers()
    }, [])
    return { users, isLoading }
}
