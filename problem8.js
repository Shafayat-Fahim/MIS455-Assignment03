fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => {
        console.log("Meal Categories:", data.categories);
    })
    .catch(error => console.error("Error fetching data:", error));
