import clsx from 'clsx';

const TitledInfo = ({ title, children}) => {
    const textStyleClass = 'align-text-top text-neutral-400 font-normal tracking-tighter';

    return (
        <div>
            <div className={clsx('w-4/12 inline-block', textStyleClass)}>{title}</div>
            {title && <div className={clsx('inline-block mx-1.5', textStyleClass)}>:</div>}
            <div className={`inline-block align-text-top ${title ? "w-7/12" : ""}`}>
                { children }
            </div>
        </div>
    )
}

export default TitledInfo