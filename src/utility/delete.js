export const handelDelete = (id, url, refetch) => {
    fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/${url}/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            if (refetch) {
                refetch();
            }
        })
};
