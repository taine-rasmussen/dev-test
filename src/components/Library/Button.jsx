const Button = ({ children, primary }) => {
  const primaryStyling = 'p-[19px] text-[16px] font-semibold bg-green whitespace-nowrap px-[35px]'
  const secondaryStyling = 'border-solid border-black border-2 text-xs p-2 whitespace-nowrap font-light'

  return (
    <button className={primary ? primaryStyling : secondaryStyling}>
      {children}
    </button>
  )
}

export default Button
