import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="https://www.youtube.com/playlist?list=PLkVb_6znCVtihTclovzY09Sfxfz2D10O1">Playlist</Link>
    <ThemeChanger/>
  </nav>
  
)