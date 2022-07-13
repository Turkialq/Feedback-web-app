import { useContext } from "react"
import { FaTimes, FaEdit } from "react-icons/fa"
import FeedackContext from "./context/FeedbackContext"
import Card from "./shared/Card"


function FeedbackItem({ item }: any) {
    const { DeleteFeedBack, EditFeedBack }: any = useContext(FeedackContext);

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => DeleteFeedBack(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <button className="edit" onClick={() => EditFeedBack(item)}>
                <FaEdit color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card >


    )
}
export default FeedbackItem