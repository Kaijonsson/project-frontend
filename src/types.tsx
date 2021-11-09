export type action = {
    type: string,
    payload: {
        username: string,
        token: string,
        isLoggedIn: Boolean
    }
}

export type initialState = {
    username: string,
    token: string,
    isLoggedIn: Boolean
}