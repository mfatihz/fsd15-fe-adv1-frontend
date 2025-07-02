import clsx from 'clsx'

function PosterChip({ content, suffix, styleClass }) {
  const baseStyle='text-neutral-400'
  
  if (suffix === 'episodes') {
    content = `${content} ${suffix}`
  } else if (suffix === 'duration') {
    content = content?.split(/[.,]/)
    content = `${content[0] && content[0]>0 ? content[0]+'j ' : ''}${content[1] && content[1]>0 ? content[1]+'m' :'' }`
  } else if (suffix === 'episode') {
    content = content?.split(/[.,]/)
    content = `${content[0] && content[0]>0 ? content[0]+'jam ' : ''}${content[1] && content[1]>0 ? content[1]+' min' :'' }`
  }

  return (
    <div
      className={clsx(baseStyle, styleClass)}
    >
      { content }
    </div>
  )
}

export default PosterChip