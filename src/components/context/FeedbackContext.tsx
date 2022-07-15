// after moveing the function to the database --> remove the default feedback to none
import { createContext, useState, useEffect } from "react";



const FeedackContext = createContext({});
//** create provider **/
export const FeedbackProvider = ({ children }: any) => {
    const [isLoading, setisLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })





    const [feedback, setFeedback] = useState([{ id: 1, rating: 10, text: '123' }])

    useEffect(() => { FetchFeedback() }, [])

    const FetchFeedback = async () => {
        const response = await fetch("http://localhost:5000/feedback")
        const data = await response.json()
        setFeedback(data)
        setisLoading(false)
    }

    const DeleteFeedBack = async (id: any) => {
        if (window.confirm(' are you sure you want to DELETE ?')) {
            await fetch(`http://localhost:5000/feedback/${id}`, {
                method: 'DELETE',
                headers: {
                    'Contnet-Type': 'application/json'
                }
            })
            setFeedback(current =>
                current.filter(data => { return data.id !== id; }),
            )
        }
    }

    const AddFeedBack = async (data: any) => {
        const response = await fetch("http://localhost:5000/feedback", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const newData = await response.json()
        setFeedback([newData, ...feedback])
    }


    const EditFeedBack = (item: any) => {
        setFeedbackEdit({ item, edit: !feedbackEdit.edit })
    }

    const Update = async (item: any) => {
        const response = await fetch(`http://localhost:5000/feedback/${item.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                rating: item.rating,
                text: item.text
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
        const newData = await response.json()

        const newState = feedback.map(obj => {
            if (obj.id === item.id) {
                return { ...obj, rating: newData.rating, text: newData.text };
            }
            return obj;
        });

        setFeedback(newState);
    }

    return <FeedackContext.Provider value={{
        feedback,
        DeleteFeedBack,
        AddFeedBack,
        EditFeedBack,
        feedbackEdit,
        Update,
        isLoading
    }}>
        {children}

    </FeedackContext.Provider>
}

export default FeedackContext


