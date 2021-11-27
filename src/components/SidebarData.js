import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title : 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title : 'Dashboard',
        path: '/dashboard',
        icon: <BsIcons.BsFillGrid1X2Fill/>,
        cName: 'nav-text'
    },
    {
        title : 'User',
        path: '/user',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
    },
    {
        title : 'Favorites',
        path: '/favorites',
        icon: <AiIcons.AiFillHeart />,
        cName: 'nav-text'
    },
    {
        title : 'Settings',
        path: '/settings',
        icon: <IoIcons.IoMdSettings />,
        cName: 'nav-text'
    },
    {
        title : 'Information',
        path: '/information',
        icon: <AiIcons.AiFillInfoCircle/>,
        cName: 'nav-text'
    },
]
