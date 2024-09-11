document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect user input
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Get users from localStorage (JSON database)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists and the password matches
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect to a protected page
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password');
    }
});