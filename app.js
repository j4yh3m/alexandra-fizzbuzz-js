// This file will connect the HTML interface to the FizzBuzz logic
// Alexandra will implement this after creating the core fizzbuzz function

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const generateBtn = document.getElementById('generateBtn');
    const resultDiv = document.getElementById('result');

    // Function to display results
    function displayResults(results) {
        resultDiv.innerHTML = '';
        
        if (!results || results.length === 0) {
            resultDiv.innerHTML = '<p class="error">Please enter a valid number between 1 and 100</p>';
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

        // TODO: Alexandra will implement fizzbuzzRange function
        // For now, we'll show a placeholder message
        resultDiv.innerHTML = `
            <p class="error">
                The FizzBuzz logic hasn't been implemented yet!<br>
                Follow the TDD tutorial to build the fizzbuzz function first.
            </p>
        `;
        
        // Once fizzbuzz is implemented, uncomment this:
        // const results = fizzbuzzRange(1, num);
        // displayResults(results);
    });

    // Handle Enter key
    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });
});