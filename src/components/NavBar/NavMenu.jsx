import DropDownMenu from '../Library/DropDownMenu'

const NavMenu = () => {

  const productMenuItems = [
    'Fruit',
    'Vegetables',
    'Eggs',
    'Milk',
    'Meat',
    'Fresh drinks'
  ]
  const recipeMenuItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
  ]

  return (
    <div className='flex flex-row items-center'>
      <ul className="flex list-none gap-x-16">
        <li className="flex-none">
          <DropDownMenu
            label={'Recipe box'}
            options={recipeMenuItems}
          />
        </li>
        <li className="flex-none">
          <DropDownMenu
            label={'Prodcuts'}
            options={productMenuItems}
          />
        </li>
        <li className="flex-none hover:cursor-pointer hover:text-orange text-sm">About us</li>
        <li className="flex-none hover:cursor-pointer hover:text-orange text-sm">Visit us</li>
      </ul>
    </div>
  )
}

export default NavMenu
