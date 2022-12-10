import { createContext } from 'react';

function getIndex(history, key) {

    return history.findIndex(_ => _.type === key);
}

export default EditorContext = createContext({
    activeTool: false,
    history: [],
    updateState: () => {},
});

export function EditorContext(state, action) {

    const editActionIndex = getIndex(state.history, action.payload.type);

    switch (action.type) {

        case 'init':
            
            state.history.push({
                type: action.payload.type,
                active: true,
                data: {},
            });
            
            break;

        case 'select':
            
            state.history[editActionIndex].active = true;
            break;

        case 'unselect':

            state.history[editActionIndex].active = false;
            break;

        case 'handle':

            state.history[editActionIndex] = {
                ...state.history[editActionIndex],
                ...action.payload,
            }

            break;

        case 'remove':


            if (!action.payload.type) state.history.pop();
            else {
                
                state.history.splice(getIndex(state.history, action.payload.type));
            }

            break;
    }
    return { history: state.history };
}