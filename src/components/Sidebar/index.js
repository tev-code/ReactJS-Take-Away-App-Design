import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink}
from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
        <CloseIcon/>
        </Icon>
        <SidebarMenu>
        <SidebarLink to="/">Buffalo</SidebarLink>
        <SidebarLink to="/">Burgers</SidebarLink>
        <SidebarLink to="/">Ribs And Wings</SidebarLink>
        </SidebarMenu>
    
        </SidebarContainer>
            
        
    )
}

export default Sidebar
