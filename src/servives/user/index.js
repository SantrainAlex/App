


export const create = data => fetch(`https://api-lkqs.onrender.com/customers`, { method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
export const connection = data => fetch('https://api-lkqs.onrender.com/customers', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
});

export const getBirthDayCustomer = () => fetch(`https://api-lkqs.onrender.com/customers`);
