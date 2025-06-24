import clsx from 'clsx'

function PosterChip({ content, suffix, className }) {
  const baseStyle='text-gray-300'
  
  if (suffix === 'episode' || suffix === 'episodes') {
    content = `${content} ${suffix}`
  } else if (suffix === 'duration') {
    content = content.split(/[.,]/)
    content = `${content[0] && content[0]>0 ? content[0]+'j ' : ''}${content[1] && content[1]>0 ? content[1]+'m' :'' }`
console.log(content)
  }

  return (
    <div
      className={clsx(baseStyle, className)}
    >
      { content }
    </div>
  )
}

export default PosterChip