fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log("Users Data:", data);
    })
    .catch(error => console.error("Error fetching data:", error));
