const initialState = {
    collapse : false
};

export default function sampleReducer(state = initialState, action){
    switch (action.type) {
        case 'COLLAPSE_MENU' : 
            return { initialState }
        default : return { initialState }
    }
}