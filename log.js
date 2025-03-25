  document.addEventListener('DOMContentLogLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const contentlog = document.getElementById('contentlog');
  const logoutBtn = document.getElementById('logoutBtn');
  const errorMessage = document.getElementById('error-message');
  const expiryDateElement = document.getElementById('expiryDate');

  // Define valid email-password pairs with validity periods (in days)
  const validUsers = [
    { email: 'bandarlaundry@gmail.com', password: 'password123', validityPeriod: 7 }, // 7 days
    { email: 'bandardeterjen@gmail.com', password: 'password456', validityPeriod: 14 }, // 14 days
    { email: 'bezimeni.id@gmail.com', password: 'mypassword', validityPeriod: 30 } // 30 days
  ];

  // Check if the user is already logged in
  const storedData = localStorage.getItem('loginData');
  if (storedData) {
    const { email, expiry } = JSON.parse(storedData);
    const now = new Date().getTime();

    if (now < expiry) {
      // User is still logged in
      showcontentlog(email, expiry);
    } else {
      // Login expired
      localStorage.removeItem('loginData');
    }
  }

  // Handle login form submission
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate email and password against the validUsers array
    const user = validUsers.find(user => user.email === email && user.password === password);

    if (user) {
      errorMessage.style.display = 'none';

      // Calculate expiration date based on the user's validity period
      const now = new Date().getTime();
      const validityInMilliseconds = user.validityPeriod * 24 * 60 * 60 * 1000; // Convert days to milliseconds
      const expiry = now + validityInMilliseconds;

      // Store login data in localStorage
      const loginData = { email, expiry };
      localStorage.setItem('loginData', JSON.stringify(loginData));

      // Show contentlog
      showcontentlog(email, expiry);
    } else {
      errorMessage.textcontentlog = 'Invalid email or password';
      errorMessage.style.display = 'block';
    }
  });

  // Handle logout button click
  logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('loginData'); // Remove login data
    hidecontentlog(); // Hide contentlog and show login form
  });

  // Function to show contentlog and set the expiry date
  function showcontentlog(email, expiry) {
    loginForm.style.display = 'none';
    contentlog.style.display = 'block';
    expiryDateElement.textcontentlog = new Date(expiry).toLocaleString();
  }

  // Function to hide contentlog and show login form
  function hidecontentlog() {
    loginForm.reset();
    loginForm.style.display = 'block';
    contentlog.style.display = 'none';
    errorMessage.style.display = 'none';
  }
});

 var myElement = document.getElementById("myElement");
    myElement.addEventListener("contextmenu", function(event) {
        event.preventDefault(); // Prevent the default right-click menu behavior
    });
