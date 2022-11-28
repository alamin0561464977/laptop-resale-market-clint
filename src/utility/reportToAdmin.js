import { toast } from 'react-toastify';
export const reportToAdmin = (product) => {
    const { _id, image, name, date, displayName, email } = product;
    const productInto = { id: _id, image, name, date, displayName, email };
    fetch('https://laptop-resale-market-server-alamin0561464977.vercel.app/reportToAdmin', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productInto)
    })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                toast.success('Report to Admin Success')
            }
        })
}