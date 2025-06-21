import clsx from 'clsx'

const Text = ({ children, variant='body', className=''}) => {
    const baseStyle = 'text-white'

    const variants = {
        title: 'text-xl font-bold',
        genre: 'text-sm text-gray-300',
        body: 'text-base',
    }

    return (
        <p className={clsx(baseStyle, variants[variant], className)}>
            {children}
        </p>
    )
}

export default Text