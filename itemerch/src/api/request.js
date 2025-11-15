import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

export async function request(config) {
    try {
        const response = await api.request(config)
        return { data: response.data, error: null }
    } catch (error) {
        const message = error.response?.data?.message || 'Ошибка запроса'
        console.error('API Error:', message)
        return { data: null, error: message }
    }
}
