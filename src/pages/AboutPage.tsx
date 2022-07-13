import Card from "../components/shared/Card"
import { Link } from "react-router-dom"
const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h2>About This Page</h2>
                <p>Feed back project using react</p>

                <p>Version 1.0.0</p>
                <Link to='/'>
                    Go Back Home
                </Link>

            </div>
        </Card>
    )
}

export default AboutPage