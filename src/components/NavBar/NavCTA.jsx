import Button from '../Library/Button'

const NavCTA = () => {
  return (
    <div className='flex'>
      <h1 className='font-semibold p-3 whitespace-nowrap hover:text-orange hover:cursor-pointer text-sm'>
        Log in
      </h1>
      <Button primary={false}>
        CREATE ACCOUNT
      </Button>
    </div >
  )
}

export default NavCTA
