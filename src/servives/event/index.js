export const getCurrentEvent = () => fetch(`http://www.saint-sebastien-ssc.fr:3001/currentEvent`);

export const getLstEvent = () => fetch(`http://www.saint-sebastien-ssc.fr:3001/allEvents`);
