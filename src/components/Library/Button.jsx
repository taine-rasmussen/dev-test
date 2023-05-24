const Button = ({ children, primary }) => {
  const primaryStyling = 'text-[14px] font-base bg-green whitespace-nowrap px-[23px] py-[20.5px]'
  const secondaryStyling = 'border-solid border-black border-2 text-xs p-2 whitespace-nowrap font-light'

  return (
    <button className={primary ? primaryStyling : secondaryStyling}>
      {children}
    </button>
  )
}

export default Button
