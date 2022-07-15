import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import { motion, AnimatePresence } from "framer-motion"
import FeedackContext from "./context/FeedbackContext"
import Spiner from "./shared/Spiner"

function FeedbackList() {
    const { feedback, isLoading }: any = useContext(FeedackContext) //you have acces anything in the value attribute

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <h2>No feedback yet</h2>
    }

    return (
        <div className='feedback-list'>
            <>
                {isLoading ? <Spiner /> :
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
                }
            </>
        </div>

    )
}

export default FeedbackList