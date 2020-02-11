import React, {useState, createContext} from 'react';

export const Context = createContext();

export const Provider = (props) =>{
    const [state, setState] = useState();

    return(
        <Context.Provider value={[state,setState]}>
            {props.children}
        </Context.Provider>
    );
}