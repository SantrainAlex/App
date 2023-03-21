


export const create = data => fetch(`https://api-lkqs.onrender.com/customers`, { method: 'post',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
