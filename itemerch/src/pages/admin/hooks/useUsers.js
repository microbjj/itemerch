import { useEffect, useState } from 'react'
import { request } from '@/api/request'
import { useSelector } from 'react-redux'
import { selectUserUsername } from '@/store/selectors'
import { ReverseRoleLabels } from '@/utils/constants'

const initState = {
    users: [],
    isLoading: false,
    username: null,
    editedUser: {},
}

export const useUsers = () => {
    const [state, setState] = useState(initState)
    const user = useSelector(selectUserUsername)

    useEffect(() => {
        const loadUsers = async () => {
            setState((prev) => ({ ...prev, isLoading: true }))
            try {
                const { data, error } = await request('/admin/users')
                if (error) {
                    console.error(error)
                }
                setState((prev) => ({ ...prev, users: data }))
            } finally {
                setState((prev) => ({ ...prev, isLoading: false }))
            }
        }

        void loadUsers()
    }, [])

    const onStartEdit = (user) => {
        setState({ ...state, editedUser: user, username: user.username })
    }

    const onCancelEdit = () => {
        setState({ ...state, editedUser: {}, username: null })
    }

    const onSaveEdit = async () => {
        const updatedUser = await saveEdit(state.editedUser)
        if (updatedUser) {
            setState({
                ...state,
                users: state.users.map((user) =>
                    user.username === updatedUser.username ? updatedUser : user,
                ),
                username: null,
                editedUser: {},
            })
        }
    }

    const handleOnChange = (newRole) => {
        setState({
            ...state,
            editedUser: {
                ...state.editedUser,
                role: ReverseRoleLabels[newRole],
            },
        })
    }

    const deleteUser = async (username) => {
        if (username === user) {
            return console.error('Невозможно удалить свой аккаунт')
        }
        const response = await deleteUserByUsername(username)
        if (response) {
            setState((prev) => ({
                ...prev,
                users: prev.users.filter((user) => user.username !== username),
            }))
        }
    }

    return {
        ...state,
        onSaveEdit,
        onStartEdit,
        onCancelEdit,
        deleteUser,
        handleOnChange,
    }
}

const saveEdit = async (user) => {
    const { data, error } = await request({
        url: `/admin/users/${user.username}/edit`,
        method: 'PATCH',
        data: user,
    })

    if (error) {
        return console.log(error)
    }

    return data
}

const deleteUserByUsername = (username) => {
    return request({
        url: `/admin/users/${username}`,
        method: 'DELETE',
    })
}
