import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import { CgMenuLeft } from "react-icons/cg";
import { RiShoppingBag4Line, RiUserLine } from "react-icons/ri";
import Navbar from "./Navbar";
import { TbUserCircle } from 'react-icons/tb';

const Header = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState();
    
    const [active, setActive] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpened((prev) => !prev);
    }

    useEffect(() => {
        const handleScroll = () => {
            // Close the menu if scrolling and menu is open
            if (menuOpened && window.scrollY > 0) {
                setMenuOpened(false);
            }

            // Set active state based on scroll position
            setActive(window.scrollY > 30);
        };

        // Attach event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuOpened]); // ✅ Keeping menuOpened in dependencies ensures correct behavior

    return (
        <>
            <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-50">
                <div className={`${active ? "bg-white py-2.5" : "py-3"} max-padd-container flexBetween border-b border-slate-900/10 rounded transition-all duration-300`}>
                    
                    {/* Logo */}
                    <Link to="/" className="flexStart gap-2">
                        <img src={logo} alt="Bacala" className="w-9 h-9" />
                        <span className="bold-24">Padhai</span>
                    </Link>

                    {/* Navigation */}
                    <Navbar 
                        menuOpened={menuOpened} 
                        toggleMenu={toggleMenu} 
                        containerStyles={menuOpened 
                            ? "flex flex-col gap-y-16 h-screen w-[222px] fixed top-0 left-0 bg-white px-10 py-4 shadow-xl z-50" 
                            : "hidden md:flex justify-center gap-x-8 xl:gap-x-14 medium-15 px-2 py-1"
                        } 
                    />

                    {/* Actions */}
                    <div className="flexEnd gap-4">
                        <CgMenuLeft onClick={toggleMenu} className="text-2xl md:hidden cursor-pointer" />
                        
                        <Link to="/cart" className="relative">
                            <RiShoppingBag4Line className="text-[33px] bg-secondary p-1.5 text-primary rounded-full" />
                            <span className="ring-1 ring-slate-900/5 absolute -top-2 -right-2 w-5 h-5 flexCenter bg-primary text-sm font-medium rounded-full shadow-sm border">
                                0
                            </span>
                        </Link>
                        
                        <div className='relative group'>
                            <div onClick={!token && (() => navigate('/'))}>
                                {token ? (
                                    <TbUserCircle className='text-[29px] cursor-pointer'/>
                                ) : (
                                    <button className="hidden sm:flex items-center gap-2 btn-outline">
                                        Login
                                        <RiUserLine />
                                    </button>
                                )}
                            </div>

                            {token && (
                                <ul className='bg-white p-1 w-32 ring-1 ring-slate-900/5 hidden rounded absolute right-0 top-7 group-hover:flex flex-col regular-14 shadow-md'>
                                    <li className='p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer'>Orders</li>
                                    <li className='p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer'>Logout</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            <div className="h-[70px]"></div>
        </>
    )
}

export default Header;
