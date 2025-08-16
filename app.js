// Alexandra: This file connects your beautiful web interface to your FizzBuzz function!
// 
// Don't worry about this file until you've finished building your fizzbuzz function.
// Once you have a working fizzbuzz function AND a fizzbuzzRange function,
// you can come back here and make your web page work!
//
// For now, focus on making your tests pass in src/fizzbuzz.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const numberInput = document.getElementById('numberInput');
  const generateBtn = document.getElementById('generateBtn');
  const resultDiv = document.getElementById('result');

  // Function to display results
  function displayResults(results) {
    resultDiv.innerHTML = '';

    if (!results || results.length === 0) {
      resultDiv.innerHTML =
        '<p class="error">Please enter a valid number between 1 and 100</p>';
      return;
    }

    const gridDiv = document.createElement('div');
    gridDiv.className = 'result-grid';

    results.forEach((value, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'result-item';

      // Add appropriate class based on value
      if (value === 'FizzBuzz') {
        itemDiv.classList.add('fizzbuzz');
      } else if (value === 'Fizz') {
        itemDiv.classList.add('fizz');
      } else if (value === 'Buzz') {
        itemDiv.classList.add('buzz');
      } else {
        itemDiv.classList.add('number');
      }

      itemDiv.textContent = value;

      // Add animation delay for staggered effect
      itemDiv.style.animationDelay = `${index * 0.05}s`;

      gridDiv.appendChild(itemDiv);
    });

    resultDiv.appendChild(gridDiv);
  }

  // Handle button click
  generateBtn.addEventListener('click', () => {
    const num = parseInt(numberInput.value);

    if (isNaN(num) || num < 1 || num > 100) {
      displayResults(null);
      return;
    }

    // Alexandra: Once you've created your fizzbuzzRange function, uncomment these lines:
    // const { fizzbuzzRange } = require('./src/fizzbuzz');
    // const results = fizzbuzzRange(1, num);
    // displayResults(results);
    
    // For now, show a friendly message:
    resultDiv.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h3>🎯 Almost there, Alexandra!</h3>
        <p>Complete your fizzbuzz function first, then come back here to connect it to this beautiful interface!</p>
        <p>Follow the TDD tutorial to build your function step by step.</p>
      </div>
    `;
  });

  // Handle Enter key
  numberInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      generateBtn.click();
    }
  });
});
