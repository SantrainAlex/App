


export const create = data => fetch(`http://www.saint-sebastien-ssc.fr:3001/customers`, { method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
export const connection = data => fetch('http://www.saint-sebastien-ssc.fr:3001/customers', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
});

export const getBirthDayCustomer = () => fetch(`http://www.saint-sebastien-ssc.fr:3001/customers`);
