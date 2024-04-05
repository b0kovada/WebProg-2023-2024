fetch("https://jsonplaceholder.typicode.com/todos/4", {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok.');
})
.then(json => console.log(json))
.catch(error => console.error('There was a problem with the fetch operation:', error));