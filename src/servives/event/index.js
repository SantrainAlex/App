const  SERVER_URL  = process.env.REACT_APP_SERVER_URL;

export const getCurrentEvent = () => fetch(`${SERVER_URL}/currentEvent`);

export const getLstEvent = () => fetch(`${SERVER_URL}/allEvents`);
