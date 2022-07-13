import { useState, useContext, useEffect } from 'react'
import FeedackContext from "./context/FeedbackContext"


function RatingSelect({ select }: any) {
    const { feedbackEdit }: any = useContext(FeedackContext)
    const [selected, setSelected] = useState(2);

    const handleChange = (e: any) => {
        setSelected(+e.target.value)
        select(+e.target.value)
    }

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setSelected(+feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    return (
        <div>
            <ul className='rating'>
                {Array.from({ length: 10 }, (_, i) => (
                    <li key={`rating-${i + 1}`}>
                        <input
                            type='radio'
                            id={`num${i + 1}`}
                            name='rating'
                            value={i + 1}
                            onChange={handleChange}
                            checked={selected === i + 1}
                        />
                        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RatingSelect