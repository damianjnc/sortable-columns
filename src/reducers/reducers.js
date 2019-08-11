export const dataReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return action.payload;
        default:
            throw Error('Should not get here');
    }
}

export const sortReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return action.payload;
        default:
            throw Error('Should not get here');
    }
}