import { createContext, useState } from "react";

const FeedackContext = createContext({});

//** create provider **/
export const FeedbackProvider = ({ children }: any) => {
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const [feedback, setFeedback] = useState([
        { id: 1, text: 'test1', rating: 10 },
        { id: 2, text: 'test2', rating: 5 },
        { id: 3, text: 'test3', rating: 3 }
    ])

    const DeleteFeedBack = (id: any) => {
        if (window.confirm(' are you sure you want to DELETE ?')) {
            setFeedback(current =>
                current.filter(data => { return data.id !== id; }),
            )
        }
    }

    const AddFeedBack = (data: any) => {
        setFeedback([data, ...feedback])
    }

    const EditFeedBack = (item: any) => {
        // update the text or the rating or both.
        setFeedbackEdit({ item, edit: !feedbackEdit.edit })
    }
    const Update = (item: any) => {
        const newState = feedback.map(obj => {
            if (obj.id === item.id) {
                return { ...obj, rating: item.rating, text: item.text };
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
        Update
    }}>
        {children}

    </FeedackContext.Provider>
}

export default FeedackContext


