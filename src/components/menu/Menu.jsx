import React from 'react'
import "./menu.scss";
export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={'menu '+(menuOpen && 'active')}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#intro'>1.HOME</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#portfolio'>2.PORTFOLIO</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#works'>3.WORKS</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#contact'>4.CONTACT</a>
            </li>
        </ul>
    </div>
  )
}
