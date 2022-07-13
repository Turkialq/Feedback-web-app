import { useState, useEffect } from "react"
import { useContext } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedackContext from "./context/FeedbackContext"


const FeedbackForm = () => {
    const { AddFeedBack, feedbackEdit, Update }: any = useContext(FeedackContext)
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMassage] = useState('')

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const typeChange = (event: any) => {
        setText(event.target.value);

        if (text === '') {
            setBtnDisabled(true);
            setMassage('');
        }
        else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMassage('Must contain more than 10 characters');
        }
        else {
            setBtnDisabled(false);
            setMassage('');
        }

    }

    const send = (event: any) => {
        event.preventDefault();
        if (feedbackEdit.edit === false) {
            let temp = Math.floor(Math.random() * (50 + 1));

            if (text.trim().length > 10) {
                const newFeedBack = {
                    id: temp,
                    rating: rating,
                    text: text
                }
                AddFeedBack(newFeedBack);
                setText('');
            }
        } else {
            //**Update the feedback **/
            if (text.trim().length > 10) {
                const newFeedBack = {
                    id: feedbackEdit.item.id,
                    rating: rating,
                    text: text
                }
                Update(newFeedBack)
            }

        }
    }

    return (
        <Card>
            <form onSubmit={event => { send(event) }}>
                <h3>Rate our service</h3>
                <RatingSelect select={(rating: any) => { setRating(rating) }} />
                <div className="input-group">
                    <input type="text" value={text} onChange={event => { typeChange(event) }} placeholder="Write a review" />
                    <Button type="submit" version="secondary" isDisabled={btnDisabled}>Submit</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm