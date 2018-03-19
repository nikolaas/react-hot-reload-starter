const initialState = 0;

export const counterReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '@@INIT': {
            // после замены редьюсера происходит повтор всех экшенов, начиная с этого, поэтому чтобы
            // консистентность состояния приложения не была нарушена, сбрасываем состояние в начальное
            return initialState;
        }
        case 'increment': {
            const delta = action.payload;
            return state + delta;
        }
        default: {
            return state;
        }
    }
};
