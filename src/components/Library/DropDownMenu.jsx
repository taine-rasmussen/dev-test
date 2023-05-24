import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const DropDownMenu = ({ label, options }) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Menu
      open={openMenu}
      offset={36}
      handler={setOpenMenu}
      animate={{
        mount: { y: 0 },
        unmount: { y: -25 },
      }}>
      <MenuHandler>
        <div
          onClick={() => { setOpenMenu(!openMenu) }}
          className={
            openMenu
              ? 'text-orange flex items-center justify-center gap-2 hover:cursor-pointer'
              : 'flex items-center justify-center gap-2'
          }
        >
          {label}
          <BsChevronDown
            strokeWidth={1.5}
            className={`transition-transform ${openMenu ? "rotate-180" : ""}`}
          />
        </div>
      </MenuHandler>
      <MenuList className='bg-white shadow shadow-grey outline-none'>
        {options.map(item => (
          <MenuItem
            key={item}
            className='flex mr-20 p-1 hover:text-orange text-xs'
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default DropDownMenu
