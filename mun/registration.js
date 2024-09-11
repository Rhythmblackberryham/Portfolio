document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create user object
    const newUser = {
        username: username,
        password: password
    };

    // Get existing users from localStorage (JSON database)
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const userExists = users.find(user => user.username === username);
    
    if (userExists) {
        alert('User already exists');
    } else {
        // Add the new user to the array and save to localStorage
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('User registered successfully!');
        window.location.href = 'login.html';  // Redirect to login page
    }
});