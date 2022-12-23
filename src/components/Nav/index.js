import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';

const Nav = () => {

    return (
        <Menu as = "div" className='relative flex'>
           <Menu.Button className="inline-flex justify-start btn">leesey</Menu.Button>
           <ul className=' w-fit inline-block'>
            <li>
                <Menu.Button className="inline-flex justify-start btn">Paintings</Menu.Button>
            </li>
            <li>
                <Menu.Button className="inline-flex justify-start btn">Drawings</Menu.Button>  
            </li>
            <li>
                <Menu.Button className="inline-flex justify-start btn">The Lowdown</Menu.Button>
            </li>
            <li>
                <Menu.Button className="inline-flex justify-start btn">CV</Menu.Button>    
            </li>
           </ul>
        </Menu>
    );
}

export default Nav;