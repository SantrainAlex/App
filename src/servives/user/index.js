


export const create = data => fetch(`https://api-lkqs.onrender.com/customers`, { method: 'post', body: JSON.stringify(data)});
