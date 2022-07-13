const Header = ({ title }: any) => {
    return (
        <header>
            <div className="container">
                <h2>{title}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'FeedBack'
}

export default Header