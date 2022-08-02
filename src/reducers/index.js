const INITIAL_STATE = {
   list:[]
};

export const reducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'ADD':
            return { 
                    ...state, 
                    list: action.payload.length !==0 ?
                    [ 
                        {
                            id: state.list.length + 1,
                            text: action.payload,
                            completed: false
                        },
                        ...state.list
                    ]
                    : state.list
                }
        
        case 'TOGGLE':
            return {
                    ...state, 
                    list: state.list.map(item=> item.id ===action.payload ? 
                         {...item, completed: !item.completed}
                         : item)
                }

        case 'CLEAN_ONE':
            return {...state, list: state.list.filter(item => item.completed===false)}

        case 'CLEAN_ALL':
            return {...state, list: []}
        
        default: return state
    }
}
