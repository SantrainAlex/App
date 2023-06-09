
const  SERVER_URL  = process.env.REACT_APP_SERVER_URL;

export const create = data => fetch(`${SERVER_URL}/customers`, { method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
export const connection = data => fetch(`${SERVER_URL}/customers`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
});

export const getBirthDayCustomer = () => fetch(`${SERVER_URL}/customers`);
