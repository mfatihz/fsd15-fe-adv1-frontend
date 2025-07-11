import NavigationalLink from '../atoms/navigational-link'

function Navigation({ links }) {
    return (
        <nav className="flex items-center list-none m-0 p-0 gap-3 sm:gap-8">
            {
                links.map(link =>
                    <NavigationalLink key={link.id} children={link.children} to={link.to} />
                )
            }
        </nav>
    )
}

export default Navigation