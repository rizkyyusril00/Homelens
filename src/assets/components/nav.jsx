import Logo5 from '../img/logo5.png'
import { Link } from 'react-scroll'
import { useState } from 'react'

export default function Nav() {
    const [openMenu, setOpenMenu] = useState(false);
    const menus = [
        {
            id : 1,
            name: 'Home',
            url : 'home'
        },
        {
            id : 2,
            name: 'About Us',
            url : 'aboutus'
        },
        {
            id : 3,
            name: 'Portfolio',
            url : 'portfolio'
        },
        {
            id : 4,
            name: 'Price',
            url : 'price'
        },
        {
            id : 5,
            name: 'Contact',
            url : 'kontak'
        },
    ];
    return (
        <>
            <div className="nav fixed z-40 w-full">
                <div className="mx-auto">
                    <div className="nav-box bg-[#898D92] bg-opacity-20 py-6 xl:py-8 2xl:py-9 4k:py-14 px-5 xs:px-6 md:px-12 lg:px-14 2lg:px-20 xl:px-24 2xl:px-40 backdrop-filter backdrop-blur-xl w-full">
                        <div className="flex justify-between">
                            {/* logo */}
                            <div className='w-52 md:w-[190px] lg:w-auto 2xl:w-[300px] 4k:w-[500px]'>
                                <img src={Logo5} alt="" className='w-full h-full'/>
                            </div>
                            {/* menus */}
                            <div className='hidden md:flex'>
                                <ul className='flex gap-6 lg:gap-8 xl:gap-10 4k:gap-16'>
                                    {menus.map((menu,index) =>(
                                        <li id='menu-nav' key={index} className='text-white text-[18px] 2lg:text-[20px] 3lg:text-[22px] xl:text-[24px] 2xl:text-[28px] 4k:text-[38px] hover:pr-2 transition-all duration-300 ease-in-out cursor-pointer'><Link to={menu.url} smooth={true} offset={-70} duration={500}>{menu.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            {/* hamburger */}
                            <button id='burger' onClick={() => setOpenMenu(!openMenu)} className={`hamburger hamburger--collapse flex justify-center items-center md:hidden ${openMenu ? 'is-active' : ''}`} type="button">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                            {/* menus mobile */}
                            <div className={`bg-[#898D92] bg-opacity-100 backdrop-filter backdrop-blur-xl w-full absolute top-[70px] transition-all duration-500 ease-in-out flex md:hidden ${openMenu ? 'left-0' : '-left-[500px]'}`}>
                                <ul className='flex flex-col md:hidden items-center group justify-center py-4 gap-5 w-full'>
                                    {menus.map((menu,index) =>(
                                        <li key={index} className='nav-menu-font text-tertiary text-[20px] hover:py-2 hover:bg-primary hover:text-white w-full text-center transition-all duration-500 ease-in-out cursor-pointer'><Link to={menu.url} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>{menu.name}</Link></li>
                                        
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}