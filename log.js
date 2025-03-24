// script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const loginSection = document.getElementById('login-section');
    const blogSection = document.getElementById('blog-section');
    const loginForm = document.getElementById('login-form');

    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        showBlog();
    } else {
        showLogin();
    }

    // Login Button Click
    loginBtn.addEventListener('click', () => {
        showLogin();
    });

    // Logout Button Click
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        showLogin();
    });

    // Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (you can add more complex checks)
        if (username === 'user' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            showBlog();
        } else {
            alert('Invalid username or password');
        }
    });

    function showLogin() {
        loginSection.classList.remove('hidden');
        blogSection.classList.add('hidden');
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'none';
    }

    function showBlog() {
        loginSection.classList.add('hidden');
        blogSection.classList.remove('hidden');
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    }
});
