// Authentication functionality
function registerUser(name, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user already exists
    if (users.some(user => user.email === email)) {
        return { success: false, message: 'Email already registered' };
    }
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        password, // Note: In a real app, passwords should be hashed
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true, user: newUser };
}

function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        return { success: false, message: 'Invalid email or password' };
    }
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, user };
}

function logoutUser() {
    localStorage.removeItem('currentUser');
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function updateAuthButton() {
    const authButton = document.getElementById('auth-button');
    if (authButton) {
        const currentUser = getCurrentUser();
        if (currentUser) {
            authButton.textContent = 'Logout';
            authButton.href = '#';
            authButton.onclick = function(e) {
                e.preventDefault();
                logoutUser();
                window.location.href = 'index.html';
            };
        } else {
            authButton.textContent = 'Login';
            authButton.href = 'auth.html';
            authButton.onclick = null;
        }
    }
}

// Handle login form submission
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        const result = loginUser(email, password);
        if (result.success) {
            window.location.href = 'index.html';
        } else {
            const errorElement = document.getElementById('login-error');
            errorElement.textContent = result.message;
            errorElement.classList.remove('hidden');
        }
    });
}

// Handle register form submission
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        
        if (password !== confirmPassword) {
            document.getElementById('register-error').textContent = 'Passwords do not match';
            document.getElementById('register-error').classList.remove('hidden');
            return;
        }
        
        const result = registerUser(name, email, password);
        if (result.success) {
            document.getElementById('register-error').classList.add('hidden');
            document.getElementById('register-success').textContent = 'Registration successful! Redirecting...';
            document.getElementById('register-success').classList.remove('hidden');
            
            // Auto login after registration
            setTimeout(() => {
                loginUser(email, password);
                window.location.href = 'index.html';
            }, 1500);
        } else {
            document.getElementById('register-error').textContent = result.message;
            document.getElementById('register-error').classList.remove('hidden');
        }
    });
}

    // Load featured stories on home page
        document.addEventListener('DOMContentLoaded', function() {
            loadFeaturedStories();
            updateAuthButton();
        });