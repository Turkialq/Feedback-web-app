import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import { motion, AnimatePresence } from "framer-motion"
import FeedackContext from "./context/FeedbackContext"

function FeedbackList() {
    const { feedback }: any = useContext(FeedackContext) //you have acces anything in the value attribute

    if (!feedback || feedback.length === 0) {
        return <h2>No feedback yet</h2>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {
                    feedback.map((feedback: any) => (
                        <motion.div
                            key={feedback.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <FeedbackItem
                                key={feedback.id}
                                item={feedback}
                            />
                        </motion.div>
                    ))
                }
            </AnimatePresence>
        </div>

    )
}

export default FeedbackList