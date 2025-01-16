import Cookies from 'js-cookie'

export const isAuthenticated = () => {
    const authToken = Cookies.get('authToken')
    return !!authToken
}