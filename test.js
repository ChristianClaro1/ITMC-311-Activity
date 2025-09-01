document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchBtn').addEventListener('click', function() {   
        fetch('https://fordemo-ot4j.onrender.com/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById('fetchOutput').textContent = JSON.stringify(data, null, 2);
            console.log(data);
        })
        .catch(error => {
            document.getElementById('fetchOutput').textContent = 'Error fetching data.';
            console.error('Error:', error);
        });
    });
});
//used Google websites like W3Schools and VS copilot to help fix and add code to work on this part