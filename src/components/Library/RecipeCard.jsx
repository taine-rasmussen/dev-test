import { AiOutlineShoppingCart } from 'react-icons/ai';

const RecipeCard = ({ recipe }) => {
  const {
    isSquare,
    title,
    price,
    img
  } = recipe

  const roundedStyling = 'rounded-full h-[110px] w-[110px] mb-4 z-40'
  const standardStyling = 'h-[130px] mb-4 z-40'

  return (
    <div className='flex flex-row'>
      <img src={img} alt={title} className={isSquare ? roundedStyling : standardStyling} />
      <div className='w-[180px] h-[90px] shadow-lg shadow-grey pl-[25px] pr-[3px] pt-[2px] pb-[3px]'>
        <div className='flex flex-col gap-7 overflow-hidden'>
          <div className='font-light text-[12px]'>
            {title}
          </div>
          <div className='flex flex-row justify-between items-center w-full'>
            <p className='text-dark-green text-[14px]'>
              {price}
            </p>
            <div className='relative'>
              <div className='absolute text-[12px] flex items-center rounded-full bg-orange h-[50px] w-[50px] -top-5 -right-5 text-base'>
                <AiOutlineShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
