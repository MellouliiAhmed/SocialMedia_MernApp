import { createContext, useReducer } from "react"
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user:{
    _id: "65b26b216b328b19bf84199c",
    username:"ahmed",
    email:"ahmed@adfzfez.com",
    ProfilePicture:"person/1.jpeg",
    coverPicture:"",
    isAdmin:false,
    followers:[],
    followins:[],
    }
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    return (
        <AuthContext.Provider value={{  
            user:state.user, 
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
            }}>
                {children}
        </AuthContext.Provider>
    )


}