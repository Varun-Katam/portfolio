import { useState } from "react";


export default function Header({onProjectClick, onMenuClick}){
    let [menu, setMenu] = useState("");
    const menuItems = ["Home", "About", "Skills", "Projects", "Education", "Contact"];
    return (
        <header className="nav-bar">
            <nav>
                <div className="name">
                    <span className="fname">Varun_</span>
                    <span className="lname">Katam</span>
                </div>

                <div className="menu">
                    {menuItems.map((currentMenu, i)=>(
                        <span 
                        key = {currentMenu}
                        className={currentMenu===menu? "menu-item active" : "menu-item"} 
                        onClick={()=>{
                            setMenu(currentMenu);
                            if(currentMenu==="Projects"){
                                onProjectClick();
                            }else{
                                onMenuClick(i);
                            }
                        }}>{currentMenu}</span>
                    ))}
                </div>


                <button className="download" onClick={()=>window.print()}>
                    <i className="bi bi-download"> Download CV</i>
                </button>
            </nav>
        </header>
    )
}



{/* <span
    className={activeMenu === "home" ? "menu-item active" : "menu-item"}
    onClick={() => setActiveMenu("home")}
>
    Home
</span> */}

{/* <span className="menu-item home">Home</span>                                    
                    <span className="menu-item about">About</span>
                    <span className="menu-item skills">Skills</span>
                    <span className="menu-item proj">Projects</span>
                    <span className="menu-item education">Education</span>
                    <span className="menu-item my-contact">Contact</span> */}