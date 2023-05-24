import { HiOutlineArrowLeft } from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi';
import recipe1 from '../../assets/recipe1.png';
import recipe2 from '../../assets/recipe2.png';
import recipe3 from '../../assets/recipe3.png';
import RecipeCard from '../Library/RecipeCard';

const Footer = () => {
  const recipes = [
    {
      title: 'Portobello Baked Eggs with avaocado & bread',
      price: '£8',
      img: recipe1,
      isSquare: true
    },
    {
      title: 'Summery salmon, beetroot & spicy mix',
      price: '£15',
      img: recipe2,
      isSquare: false
    },
    {
      title: 'Backed Avocado Egg with herbs',
      price: '£8',
      img: recipe3,
      isSquare: true
    },
  ];

  return (
    <div className='flex justify-center py-20'>
      <div className=' flex flex-col gap-y-6'>
        <div className='flex flex-row w-full justify-between'>
          <p className='font-extralight text-[44px] whitespace-nowrap'>
            Latest recipes
          </p>
          <div className='flex flex-row text-4xl gap-10	'>
            <HiOutlineArrowLeft className='text-grey' />
            <HiOutlineArrowRight className='hover:cursor-pointer' />
          </div>
        </div>
        <div className='flex flex-row items-center justify-between gap-x-10'>
          {recipes.map(recipe => (<RecipeCard recipe={recipe} key={recipe.title} />))}
        </div>
      </div>
    </div>
  )
}

export default Footer
