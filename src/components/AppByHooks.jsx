import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const AppByHooks = () => {
    const [feedbacks, setFeedbacks] = useState ({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const handleCountFeedbacks = statusFeedback => {
        setFeedbacks(prevState => ({
            ...prevState, [statusFeedback]: prevState[statusFeedback] + 1
        }));
    }

    const countTotalFeedback = () => {
        const values = Object.values(feedbacks);
        let total = 0;
        for (const value of values) {
            total += value; 
        }
        return total;
    }

    const countPositiveFeedbackPercentage = () => {
        const positiveFeedbackPercentage = Math.round(feedbacks.good * 100 / countTotalFeedback());
        return feedbacks.good ? positiveFeedbackPercentage : 0;
    }

    const optionsForFeedback = Object.keys(feedbacks);

    return (
        <>
            <Section
                title="Please leave your feedback for us"
            >
                <FeedbackOptions
                    options={optionsForFeedback}
                    onLeaveFeedback={handleCountFeedbacks}
                />
            </Section>

            <Section
                title="Statistics"
            >
                {countTotalFeedback() === 0 ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <Statistics
                        feedbacks={feedbacks}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                )}
            </Section>
        </>
    )
};

export default AppByHooks;