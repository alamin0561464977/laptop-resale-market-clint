export const handelDelete = (id, url, refetch) => {
    console.log(id)
    fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/${url}/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (refetch) {
                refetch();
            }
        })
};
