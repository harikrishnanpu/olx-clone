import { createContext,useState } from 'react';

export const PostContext = createContext(null)



function Post ({children}){
    const [postDetails,setPostdetails] = useState()
    return(
        <PostContext.Provider value={{postDetails,setPostdetails}}>
            {children}
        </PostContext.Provider>
    )
}

export default Post