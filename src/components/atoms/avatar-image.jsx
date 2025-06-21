import avatar from '../../assets/images/icons/avatar.svg'

function AvatarImage() {
    return (
        <img
            className="
                p-0 rounded-full object-cover
                h-[20px] sm:h-[36px] width-auto
            "
            src={avatar}
            alt="Setting icon"
            loading="lazy"
        />
    )
}

export default AvatarImage
