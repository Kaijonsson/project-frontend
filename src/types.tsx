export type action = {
    type: string,
    payload: {
        username: string,
        token: string,
    }
}

export type initialState = {
    username: string,
    token: string,
}