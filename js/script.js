// Account Page Login and Mode Switch
const loginForm = document.getElementById('login-form');
const switchModeBtn = document.getElementById('switch-mode-btn');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('username').value;
    const userRole = document.getElementById('user-role').value;
    if (userName) {
      sessionStorage.setItem('userName', userName);
      sessionStorage.setItem('userRole', userRole);
      alert(`Welcome, ${userName}`);
      window.location.href = userRole === 'host' ? 'host.html' : 'tourist.html';
    }
  });
}

if (switchModeBtn) {
  switchModeBtn.addEventListener('click', () => {
    const currentRole = sessionStorage.getItem('userRole');
    const newRole = currentRole === 'host' ? 'tourist' : 'host';
    sessionStorage.setItem('userRole', newRole);
    alert(`Switched to ${newRole.charAt(0).toUpperCase() + newRole.slice(1)} Mode`);
    window.location.href = newRole === 'host' ? 'host.html' : 'tourist.html';
  });
}

// Display Welcome Message
const userName = sessionStorage.getItem('userName');
const userRole = sessionStorage.getItem('userRole');
const touristWelcomeMessage = document.getElementById('tourist-welcome-message');
const hostWelcomeMessage = document.getElementById('host-welcome-message');

if (touristWelcomeMessage && userRole === 'tourist') {
  touristWelcomeMessage.textContent = `Welcome, ${userName}`;
}

if (hostWelcomeMessage && userRole === 'host') {
  hostWelcomeMessage.textContent = `Logged in as ${userName}`;
}

// Add Listing Form Submission
const listingForm = document.getElementById('listing-form');

if (listingForm) {
  listingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Listing submitted successfully!');
    window.location.href = 'host.html';
  });
}

// Other Event Listeners (Edit, Delete, Confirm Booking, etc.)
// ... (Remain the same as before)


// Mock Edit and Delete Listings
const editButtons = document.querySelectorAll('.edit-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');

editButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Edit listing functionality is not implemented in this prototype.');
  });
});

deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const confirmDelete = confirm('Are you sure you want to delete this listing?');
    if (confirmDelete) {
      alert('Listing deleted.');
    }
  });
});

// Mock View Details Buttons
const detailsButtons = document.querySelectorAll('.details-btn');

detailsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Details page is under construction.');
  });
});

// Mock Respond to Reviews
const respondButtons = document.querySelectorAll('.respond-btn');

respondButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const response = prompt('Enter your response:');
    if (response) {
      alert('Response submitted.');
    }
  });
});
