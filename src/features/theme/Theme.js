import { useSelector } from "react-redux";
import SetThemeButton from "./SetThemeButton";
import { setTheme } from './themeSlice';
import Test from "./Test";

function Theme() {

  const theme = useSelector((state) => state.theme.colors.dark)
  
  console.log(theme.dark)

  return (
    
      <div>

        <SetThemeButton  title={theme} setTheme={setTheme}/>
          
     {
       theme ? <Test bg="bgColor"/> : <Test/>
     }

      </div>
   
  );
}

export default Theme;
