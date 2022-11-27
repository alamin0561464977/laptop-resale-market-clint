export const handelDelete = (id, url, refetch) => {
    console.log(id)
    fetch(`http://localhost:5000/${url}/${id}`, {
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
