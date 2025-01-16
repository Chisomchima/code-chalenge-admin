import { axiosInstance, handleError } from '@/utils/axiosInstance'
import { AxiosError } from 'axios';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

export const login = async (data: { email: string; password: string }) => {
    try {
        const response = await axiosInstance.post('/api/auth/login', data)
        console.log(response, 'response')

        const { token, user } = response?.data?.content || {}

        if (token && user && response?.data?.success) {
            Cookies.set('authToken', token.token, {
                path: '/',
                secure: import.meta.env.PROD,
                sameSite: 'Strict',
            })

            Cookies.set('userId', user, {
                path: '/',
                secure: import.meta.env.PROD,
                sameSite: 'Strict',
            })

            console.log(`User ID: ${user}`)

            // Fetch user profile securely
            await fetchProfile(user)

            toast.success('Login successful!')
            return response.data
        } else {
            throw new Error('Invalid login response: Token or User ID is missing.')
        }
    } catch (error) {
        handleError(error as AxiosError, 'An unexpected error occurred during login.')
    }
}

export const fetchProfile = async (userId: string) => {
    try {
        const response = await axiosInstance.get(`/api/users/get-user/${userId}`)
        console.log(response.data, 'User Profile')

        // Save the profile data in a cookie
        Cookies.set('userProfile', JSON.stringify(response.data), {
            path: '/',
            secure: import.meta.env.PROD,
            sameSite: 'Strict',
        })

        return response.data
    } catch (error) {
        handleError(error as AxiosError, 'Failed to fetch user profile.')
        throw error // Ensure login flow halts if profile fetch fails
    }
}
export const getBadge = async (userId: string, badgeId: string) => {
    try {
        const response = await axiosInstance.get(`/api/users/send-badge/${userId}/${badgeId}`)
        console.log(response.data, 'Badge data')

        return response.data
    } catch (error) {
        handleError(error as AxiosError, 'Failed to fetch Badge data.')
        throw error
    }
}

export const editUser = async (data: { id: string;[key: string]: unknown }) => {
    try {
        const response = await axiosInstance.put(`/users/update-user/${data.id}`, { ...data })
        return response.data
    } catch (error) {
        handleError(error as AxiosError, 'Failed to update user.')
        throw error
    }
}

export const register = async (data: { firstName: string; lastName: string; email: string; password: string }) => {
    try {
        const response = await axiosInstance.post('/api/auth/signup', data)
        return response.data
    } catch (error) {
        handleError(error as AxiosError, 'Registration failed.')
        throw error
    }
}

export const getProfile = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/api/users/get-user/${id}`)

        if (response.status !== 200) {
            throw new Error('Unable to fetch profile')
        }

        Cookies.set('userProfile', JSON.stringify(response.data))
        const cookieData = Cookies.get('userProfile')
        const profile = cookieData ? JSON.parse(cookieData) : response.data
        return profile
    } catch (error) {
        handleError(error as AxiosError, 'Failed to fetch user profile.')
        throw error
    }
}

export const uploadAvatar = async (data: FormData) => {
    const userId = Cookies.get('userId')
    try {
        // Ensure the auth token is included
        const authToken = Cookies.get('authToken')
        if (!authToken) throw new Error('Authentication token is missing.')

        const response = await axiosInstance.post(`/api/auth/upload-avatar/${userId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        // Check if the upload was successful
        if (response?.data?.success) {
            const userId = Cookies.get('userId')
            if (userId) {
                // Fetch the updated profile
                await getProfile(userId)
            }
            return response.data
        } else {
            throw new Error('Failed to upload avatar: Server did not return success.')
        }
    } catch (error) {
        handleError(error as AxiosError, 'Failed to upload avatar. Please try again.')
        throw error
    }
}