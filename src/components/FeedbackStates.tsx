import { useContext } from "react"
import FeedackContext from "./context/FeedbackContext"

const FeedbackStates = () => {
    const { feedback }: any = useContext(FeedackContext);

    const Average = () => {
        if (!feedback) {
            return 0;
        }
        else {
            let sum = 0;
            for (let i = 0; i < feedback.length; i++) {
                sum = sum + feedback[i].rating;
            }

            let result = sum / feedback.length;
            return result.toFixed(1).replace(/[.,]0$/, '');
        }
    }

    return (
        <div className="feedback-stats">
            <h4>Reviews : {feedback.length}</h4>
            <h4>Average Rating :{Average()}</h4>
        </div>
    )
}

export default FeedbackStates