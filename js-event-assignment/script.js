document.getElementById('clickButton').addEventListener('click', () => {
  document.getElementById('clickMessage').textContent = 'Button clicked! 🎉';
});

document.getElementById('hoverBox').addEventListener('mouseover', () => {
  document.getElementById('hoverBox').textContent = 'You hovered over me!';
});

document.getElementById('hoverBox').addEventListener('mouseout', () => {
  document.getElementById('hoverBox').textContent = 'Hover over me!';
});

document.addEventListener('keypress', (event) => {
  document.getElementById('keyPressMessage').textContent = `You pressed: ${event.key}`;
});

// Interactive Elements Section
document.getElementById('colorChangeButton').addEventListener('click', () => {
  const button = document.getElementById('colorChangeButton');
  button.style.backgroundColor = button.style.backgroundColor === 'red' ? '#28a745' : 'red';
});

// Form Validation Section
document.getElementById('validationForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('formFeedback');

  if (!/\S+@\S+\.\S+/.test(email)) {
    feedback.textContent = 'Invalid email format!';
    return;
  }

  if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters!';
    return;
  }

  feedback.textContent = 'Form submitted successfully!';
});