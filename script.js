// Handle search functionality
document.getElementById('search-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const query = document.getElementById('search').value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // Add search logic here
    } else {
        alert('Please enter a search term.');
    }
});

// Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
