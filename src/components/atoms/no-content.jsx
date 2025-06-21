import clsx from 'clsx'

const NoContent = ({ children, color='text-orange-500' }) => {
    const baseStyle = 'block w-full text-center text-sm italic'
    return (
        <div className={clsx(baseStyle, color)}>
            { children }
        </div>
    );
};

export default NoContent;