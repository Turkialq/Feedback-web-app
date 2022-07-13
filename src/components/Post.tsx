import { Navigate, useNavigate, Route, Routes } from 'react-router-dom'

//useNav --> for redirecting pages
// maybe after getting a post request and updating some data redirct the user

function Post() {
    const nav = useNavigate();

    const HandleClick = () => {
        nav('/about')
    }

    return (
        <div>
            <Routes>
                <Route path='/show' element={<>
                    <h1>post</h1>
                    <button onClick={HandleClick}>Click me </button>
                </>} />
            </Routes>
        </div>
    )
}

export default Post