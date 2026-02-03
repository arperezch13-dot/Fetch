async function searchPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()
        console.log(data.title.toUpperCase());
    } 
    catch (error) {
        console.log("El post no pudo ser hallado");
    }
}

searchPost(2)