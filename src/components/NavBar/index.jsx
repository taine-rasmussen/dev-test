import NavLogo from './NavLogo'
import NavMenu from './NavMenu'
import NavCTA from './NavCTA'

const NavBar = () => {
  return (
    <div className='flex flex-row items-center h-[90px] w-full'>
      <div className='flex justify-center w-2/6'>
        <NavLogo />
      </div>
      <div className='w-4/6 flex flex-row justify-start '>
        <NavMenu />
        <NavCTA />
      </div>
    </div>
  )
}

export default NavBar
