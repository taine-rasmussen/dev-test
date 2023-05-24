import React from 'react';
import DropDownMenu from '../Library/DropDownMenu';

const NavMenu: React.FC = () => {
const productMenuItems: string[] = [
  `Fruit`,
  `Vegetables`,
  `Eggs`,
  `Milk`,
  `Meat`,
  `Fresh drinks`,
];

const recipeMenuItems: string[] = [
  `Item 1`,
  `Item 2`,
  `Item 3`,
  `Item 4`,
  `Item 5`,
  `Item 6`,
];


  return (
    <div className="flex flex-row items-center">
      <ul className="flex list-none gap-x-16 whitespace-nowrap">
        <li className="font-semibold text-xs hover:cursor-pointer hover:text-orange">
          <DropDownMenu label={`Recipe box`} options={recipeMenuItems} />
        </li>
        <li className="font-semibold text-xs hover:cursor-pointer hover:text-orange">
          <DropDownMenu label={`Products`} options={productMenuItems} />
        </li>
        <li className="hover:cursor-pointer hover:text-orange text-xs font-semibold">
          About us
        </li>
        <li className="hover:cursor-pointer hover:text-orange text-xs font-semibold">
          Visit us
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
