const spinner = require("../assets/spiner.gif")

function Spiner() {
    return (
        <img src={spinner} alt="Loading" style={{
            width: '150px ',
            margin: 'auto',
            display: 'block'
        }} />
    )
}

export default Spiner