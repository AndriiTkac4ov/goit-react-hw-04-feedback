import { useState } from "react";

const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleCountGoodFeedbacks = () => {
        setGood(prev => prev + 1);
    }

    const handleCountNeutralFeedbacks = () => {
        setNeutral(prev => prev + 1);
    }

    const handleCountBadFeedbacks = () => {
        setBad(prev => prev + 1);
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

    const countPositiveFeedbackPercentage = () => {
        const positiveFeedbackPercentage = Math.round(good * 100 / countTotalFeedback());
        return good ? positiveFeedbackPercentage : 0;
    }

    return (
        <div className="feedback">
            <h2 className="feedback_title">Please leave your feedback for us</h2>
            <div className="feedback_table">
                <button type='button' onClick={handleCountGoodFeedbacks}>Good</button>
                <button type='button' onClick={handleCountNeutralFeedbacks}>Neutral</button>
                <button type='button' onClick={handleCountBadFeedbacks}>Bad</button>
            </div>
            <h2 className="feedback_title">Statistics</h2>
            <ul>
                <li>Good: <span>{good}</span></li>
                <li>Neutral: <span>{neutral}</span></li>
                <li>Bad: <span>{bad}</span></li>
                <li>Total: <span>{countTotalFeedback()}</span></li>
                <li>Positive feedback: <span>{countPositiveFeedbackPercentage()}%</span></li>
            </ul>
        </div>
    )
}

export default Feedback;