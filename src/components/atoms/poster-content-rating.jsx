function PosterContentRating({ children, type}) {
  const style = type==='rect' ? 'bg-transparent border px-2 rounded-sm grow-0 text-neutral-400' : 'bg-gray-700 px-3 py-1 rounded-full grow-0'
  return (
    <div className={ style }>{ children }</div>
  )
}

export default PosterContentRating