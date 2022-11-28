export const reportToAdmin = (product) => {
    const { _id, image, name, date, displayName, email } = product;
    const productInto = { id: _id, image, name, date, displayName, email };
    fetch('http://localhost:5000/reportToAdmin', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productInto)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}