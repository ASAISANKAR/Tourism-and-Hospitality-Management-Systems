import {useState,createContext,useContext} from 'react' 
 
 const ThemeContext =createContext(); 
 
export const ThemeProvider = ({children}) => { 
    const [theme,setTheme] = useState(false) 
    const [login ,setLogin] =useState(false) 
    const [email,setEmail]=useState(null) 
     const hand = ()=> 
 { 
   if(theme===false){ 
    setTheme(true); 
   } 
   else{ 
     setTheme(false); 
    } 
 } 
  const handlogin=(uname)=> 
  { 
    setLogin(true) 
    setEmail(uname) 
  } 
  const handlogout=()=>{ 
    setLogin(false) 
    setEmail(null) 
  } 
    return( 
        <ThemeContext.Provider value={{theme,hand,login,handlogin,handlogout,email}}>{children}</ThemeContext.Provider> 
    ) 
} 
export const useTheme = () => { 
    return useContext(ThemeContext) 
}