// Tourist Mode Login
const touristLoginBtn = document.getElementById('tourist-login-btn');
const touristWelcomeMessage = document.getElementById('tourist-welcome-message');

if (touristLoginBtn) {
  touristLoginBtn.addEventListener('click', () => {
    const userName = prompt('Please enter your name:');
    if (userName) {
      touristWelcomeMessage.textContent = `Welcome, ${userName}`;
      touristLoginBtn.style.display = 'none';
    }
  });
}

// Host Mode Login
const hostLoginBtn = document.getElementById('host-login-btn');
const hostWelcomeMessage = document.getElementById('host-welcome-message');

if (hostLoginBtn) {
  hostLoginBtn.addEventListener('click', () => {
    const hostName = prompt('Please enter your name:');
    if (hostName) {
      hostWelcomeMessage.textContent = `Logged in as ${hostName}`;
      hostLoginBtn.style.display = 'none';
    }
  });
}

// Add Listing Modal
const addListingBtn = document.getElementById('add-listing-btn');
const addListingForm = document.getElementById('add-listing-form');
const closeBtn = document.querySelector('.close-btn');

if (addListingBtn && addListingForm) {
  addListingBtn.addEventListener('click', () => {
    addListingForm.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    addListingForm.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == addListingForm) {
      addListingForm.style.display = 'none';
    }
  });

  // Mock form submission
  const listingForm = document.getElementById('listing-form');
  listingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Listing submitted successfully!');
    addListingForm.style.display = 'none';
  });
}

// Mock Booking Confirmation and Cancellation
const confirmButtons = document.querySelectorAll('.confirm-btn');
const cancelButtons = document.querySelectorAll('.cancel-btn');

confirmButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Booking confirmed!');
  });
});

cancelButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Booking cancelled!');
  });
});

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
