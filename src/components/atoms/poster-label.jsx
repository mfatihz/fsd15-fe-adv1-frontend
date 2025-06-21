import clsx from 'clsx'

function PosterLabel({ children, className }) {
  const baseStyle='text-gray-300'
  
  return (
    <div
      className={clsx(baseStyle, className)}
    >
      { children }
    </div>
  )
}

export default PosterLabel