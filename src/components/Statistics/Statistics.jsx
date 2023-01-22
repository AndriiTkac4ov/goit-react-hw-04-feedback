import { PropTypes } from "prop-types";
import { StatisticsPart, StatisticsItem } from "./Statistics.styled";

// export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//     return (
//         <StatisticsPart>
//             <StatisticsItem>Good: <span>{good}</span></StatisticsItem>
//             <StatisticsItem>Neutral: <span>{neutral}</span></StatisticsItem>
//             <StatisticsItem>Bad: <span>{bad}</span></StatisticsItem>
//             <StatisticsItem>Total: <span>{total}</span></StatisticsItem>
//             <StatisticsItem>Positive feedback: <span>{positivePercentage}%</span></StatisticsItem>
//         </StatisticsPart>
//     )
// }

// Statistics.propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     total: PropTypes.number.isRequired,
//     positivePercentage: PropTypes.number.isRequired,
// }

export const Statistics = ({ feedbacks, total, positivePercentage }) => {
    const createButtonTitle = (elementStatus) => {
        const buttonTitle = elementStatus.charAt(0).toUpperCase() + elementStatus.slice(1);

        return buttonTitle;
    }

    const statisticsForFeedback = Object.keys(feedbacks);

    return (
        <StatisticsPart>
            {statisticsForFeedback.map(status => (<StatisticsItem key={status}>{createButtonTitle(status)}: <span>{feedbacks[status]}</span></StatisticsItem>))}
            <StatisticsItem>Total: <span>{total}</span></StatisticsItem>
            <StatisticsItem>Positive feedback: <span>{positivePercentage}%</span></StatisticsItem>
        </StatisticsPart>
    )
}

Statistics.propTypes = {
    feedbacks: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}