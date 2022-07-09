import React from 'react'
import { useDispatch } from "react-redux";

function SetThemeButton({title,setTheme}) {

  const dispatch = useDispatch()
  return (
    <button className="modebtn" onClick={()=>dispatch(setTheme())}>
      {title ? "light mode" : "dark mode"}</button>
  )
}

export default SetThemeButton