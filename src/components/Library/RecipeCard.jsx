import { AiOutlineShoppingCart } from 'react-icons/ai';

const RecipeCard = ({ recipe }) => {
  const {
    isSquare,
    title,
    price,
    img
  } = recipe

  const roundedStyling = 'rounded-full h-[110px] w-[110px] z-40 mt-2'
  const standardStyling = 'h-[130px] z-40 mt-2'
  const roundedPositioning = 'w-[180px] h-[100px] shadow-lg shadow-grey pl-[25px] pr-[5px] pt-[12px]  mt-5 -ml-4'
  const standardPositioning = 'w-[180px] h-[100px] shadow-lg shadow-grey pl-[25px] pr-[5px] pt-[12px]  mt-8 -ml-12 mr-5'

  return (
    <div className='flex flex-row'>
      <img src={img} alt={title} className={isSquare ? roundedStyling : standardStyling} />
      <div className={isSquare ? roundedPositioning : standardPositioning}>
        <div className='flex flex-col gap-3 overflow-hidden pb-[2px]'>
          <div className='font-light text-[12px] mr-[16px]'>
            {title}
          </div>
          <div className='flex flex-row justify-between items-center w-full px-[5px]'>
            <p className='text-dark-green text-[14px]'>
              {price}
            </p>
            <div className='z-40 -mb-[20px] mr-[3px]'>
              <AiOutlineShoppingCart />
            </div>
          </div>
          <div className='relative'>
            <div className='absolute text-[12px] flex items-center rounded-full bg-orange h-[65px] w-[65px] -top-9 -right-7 text-base'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
