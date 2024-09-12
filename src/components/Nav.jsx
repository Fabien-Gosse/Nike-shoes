import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { cross } from "../assets/icons"
import { navLinks } from "../constants"

import { useState } from "react"

const Nav = () => {

  const [menu, setMenu] = useState(false)

  const clickHamburger = () => {
    setMenu(!menu)
  }

  return (
    <header className={`padding-x py-4 fixed z-20 w-full bg-slate-200 ${menu ? "" : "max-lg:bg-black"}`}>
      <nav className={`flex justify-between max-container ${menu ? "" : "max-lg:flex-col" }`}>
        <a href="/" className={menu ? "" : "flex justify-center pb-4"}>
          <img src={headerLogo} alt="logo" width={menu ? 130 : 260} height={menu ? 29 : 58}/>
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16 ${menu ? "max-lg:hidden" : "max-lg:flex-col max-lg:gap-4 max-lg:bg-black"}`}>
          { navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray max-lg:text-white max-lg:text-3xl max-lg:text-center" onClick={clickHamburger}>{item.label}</a>
            </li>          
          ))}
        </ul>
        <div className="hidden max-lg:block">
            <img src={menu ? hamburger : cross} alt="hamburger" width={40} height={40} className={`cursor-pointer ${menu ? "" : "max-lg:fixed right-16 top-8"}`} onClick={clickHamburger}/>
        </div>
      </nav>
    </header>   
  )
}

export default Nav