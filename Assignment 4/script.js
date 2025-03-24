// BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmi-result').innerHTML = 'Please enter valid weight and height values.';
        return;
    }

    const bmi = weight / (height * height);
    
    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    
    document.getElementById('bmi-result').innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}

// Temperature Converter
function convertTemperature(from) {
    if (from === 'c') {
        const celsius = parseFloat(document.getElementById('celsius').value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
            document.getElementById('temp-result').innerHTML = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
        }
    } else if (from === 'f') {
        const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            document.getElementById('celsius').value = celsius.toFixed(2);
            document.getElementById('temp-result').innerHTML = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
        }
    }
}

// Dynamic User Table
function generateUsers() {
    const tableBody = document.getElementById('user-table-body');
    tableBody.innerHTML = ''; // Clear existing content

    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32 },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45 },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 24 },
        { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 37 }
    ];
    
    // Loop through users and create table rows
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const row = document.createElement('tr');
        
        // Create table cells
        const idCell = document.createElement('td');
        idCell.textContent = user.id;
        
        const nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        
        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        
        const ageCell = document.createElement('td');
        ageCell.textContent = user.age;
        
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(ageCell);
        
        tableBody.appendChild(row);
    }
}

// Pop-up Boxes

// Alert Box
document.getElementById('alert-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('alert-name').value;
    if (name) {
        alert(`Thank you, ${name}! Your form has been submitted successfully.`);
        document.getElementById('alert-form').reset();
    } else {
        alert('Please enter your name before submitting.');
    }
});

// Confirm Box
function confirmDelete(button) {
    const item = button.parentElement;
    const itemText = item.textContent.replace('Delete', '').trim();
    
    const confirmed = confirm(`Are you sure you want to delete "${itemText}"?`);
    
    if (confirmed) {
        item.remove();
    }
}

// Prompt Box
function promptUser() {
    const color = prompt('Please enter your favorite color:', 'Blue');
    
    if (color !== null) {
        document.getElementById('prompt-result').textContent = `Your favorite color is: ${color}`;
        document.getElementById('prompt-result').style.color = color;
    }
}

// Event Handling & DOM Manipulation

// Change Text
function changeText() {
    const text = document.getElementById('changeable-text');
    text.textContent = 'The text has been changed!';
}

// Change Style
function changeStyle() {
    const text = document.getElementById('changeable-text');
    text.style.color = 'red';
    text.style.fontWeight = 'bold';
    text.style.fontSize = '1.2rem';
}

// Change Image
let imageToggle = false;
function changeImage() {
    const image = document.getElementById('changeable-image');
    if (imageToggle) {
        image.src = 'https://via.placeholder.com/200x150?text=Image+1';
    } else {
        image.src = 'https://via.placeholder.com/200x150?text=Image+2';
    }
    imageToggle = !imageToggle;
}

// Hover Effects
function applyHoverEffect(element) {
    element.style.backgroundColor = '#007bff';
    element.style.color = 'white';
    element.style.transform = 'scale(1.1)';
}

function removeHoverEffect(element) {
    element.style.backgroundColor = '#ddd';
    element.style.color = 'black';
    element.style.transform = 'scale(1)';
}

// Dynamic List
function addItem() {
    const newItemText = document.getElementById('new-item').value.trim();
    
    if (newItemText) {
        // Create new list item
        const newItem = document.createElement('li');
        
        // Create text node
        const textNode = document.createTextNode(newItemText);
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            newItem.remove();
        };
        
        // Append text and button to list item
        newItem.appendChild(textNode);
        newItem.appendChild(deleteButton);
        
        // Append list item to list
        document.getElementById('dynamic-list').appendChild(newItem);
        
        // Clear input field
        document.getElementById('new-item').value = '';
    }
}

// Forms & Validation
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset previous error messages
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = '';
    });
    
    // Get form values
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    
    let isValid = true;
    
    // Validate name
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate phone
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number';
        isValid = false;
    }
    
    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character';
        isValid = false;
    }
    
    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        isValid = false;
    }
    
    // If form is valid, submit
    if (isValid) {
        alert('Registration successful!');
        this.reset();
    }
});

// Real-time validation
document.getElementById('reg-name').addEventListener('input', function() {
    const name = this.value.trim();
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
    } else {
        document.getElementById('name-error').textContent = '';
    }
});

document.getElementById('reg-email').addEventListener('input', function() {
    const email = this.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
    } else {
        document.getElementById('email-error').textContent = '';
    }
});

document.getElementById('reg-phone').addEventListener('input', function() {
    const phone = this.value.trim();
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number';
    } else {
        document.getElementById('phone-error').textContent = '';
    }
});

document.getElementById('reg-password').addEventListener('input', function() {
    const password = this.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character';
    } else {
        document.getElementById('password-error').textContent = '';
    }
});

document.getElementById('reg-confirm-password').addEventListener('input', function() {
    const confirmPassword = this.value;
    const password = document.getElementById('reg-password').value;
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
    } else {
        document.getElementById('confirm-password-error').textContent = '';
    }
});

// JavaScript Objects & AJAX

// Date Object
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('current-date').textContent = 'Current Date & Time: ' + now.toLocaleDateString('en-US', options);
}

// Initialize date and time
updateDateTime();

// Math Object
function generateRandomNumber() {
    const min = parseInt(document.getElementById('min-number').value);
    const max = parseInt(document.getElementById('max-number').value);
    
    if (isNaN(min) || isNaN(max)) {
        document.getElementById('random-number-result').textContent = 'Please enter valid numbers';
        return;
    }
    
    if (min >= max) {
        document.getElementById('random-number-result').textContent = 'Maximum number must be greater than minimum number';
        return;
    }
    
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('random-number-result').textContent = `Random number: ${randomNum}`;
}

// AJAX - Weather Data
function fetchWeatherData() {
    const city = document.getElementById('city').value.trim();
    
    if (!city) {
        document.getElementById('weather-result').innerHTML = 'Please enter a city name';
        return;
    }
    
    // Show loading message
    document.getElementById('weather-result').innerHTML = 'Loading weather data...';
    
    // API key (in a real application, this should be secured)
    const apiKey = '5f0f5e8a8ddca7f682f6b4e4e5f6b8a2'; // This is a dummy key, replace with a real one
    
    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API error');
            }
            return response.json();
        })
        .then(data => {
            // Process and display weather data
            const weatherHTML = `
                <h4>${data.name}, ${data.sys.country}</h4>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].main} - ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather-result').innerHTML = weatherHTML;
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `Error: ${error.message}`;
        });
}

// To-Do List App
function addTodo() {
    const todoText = document.getElementById('todo-input').value.trim();
    
    if (todoText) {
        // Create list item
        const li = document.createElement('li');
        
        // Create task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = todoText;
        taskSpan.className = 'task-text';
        
        // Create buttons container
        const buttonsDiv = document.createElement('div');
        
        // Create complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.onclick = function() {
            taskSpan.classList.toggle('completed');
            if (taskSpan.classList.contains('completed')) {
                completeBtn.textContent = 'Undo';
            } else {
                completeBtn.textContent = 'Complete';
            }
        };
        
                // Create delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.onclick = function() {
                    li.remove();
                };
                
                // Append buttons to container
                buttonsDiv.appendChild(completeBtn);
                buttonsDiv.appendChild(deleteBtn);
                
                // Append task and buttons to list item
                li.appendChild(taskSpan);
                li.appendChild(buttonsDiv);
                
                // Append list item to todo list
                document.getElementById('todo-list').appendChild(li);
                
                // Clear input field
                document.getElementById('todo-input').value = '';
            }
        }
        
        // Chatbot
        function sendMessage() {
            const userInput = document.getElementById('user-message').value.trim();
            
            if (userInput) {
                // Add user message to chat
                addMessageToChat(userInput, 'user');
                
                // Clear input field
                document.getElementById('user-message').value = '';
                
                // Process user input and generate bot response
                const botResponse = generateBotResponse(userInput);
                
                // Add bot response to chat after a short delay (simulating thinking)
                setTimeout(() => {
                    addMessageToChat(botResponse, 'bot');
                }, 500);
            }
        }
        
        function addMessageToChat(message, sender) {
            const chatMessages = document.getElementById('chat-messages');
            
            // Create message element
            const messageDiv = document.createElement('div');
            messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
            messageDiv.textContent = message;
            
            // Add message to chat
            chatMessages.appendChild(messageDiv);
            
            // Scroll to bottom of chat
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function generateBotResponse(userInput) {
            // Convert input to lowercase for easier matching
            const input = userInput.toLowerCase();
            
            // Simple response logic based on keywords
            if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
                return 'Hello there! How can I help you today?';
            } else if (input.includes('how are you')) {
                return 'I\'m just a simple bot, but I\'m functioning well. Thanks for asking!';
            } else if (input.includes('name')) {
                return 'I\'m a simple JavaScript chatbot created for this assignment.';
            } else if (input.includes('weather')) {
                return 'I can\'t check the weather, but you can use the Weather API section above to get real weather data!';
            } else if (input.includes('time') || input.includes('date')) {
                const now = new Date();
                return `The current time is ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}.`;
            } else if (input.includes('bye') || input.includes('goodbye')) {
                return 'Goodbye! Have a great day!';
            } else if (input.includes('thank')) {
                return 'You\'re welcome!';
            } else if (input.includes('help')) {
                return 'I can respond to greetings, questions about myself, and basic queries. Try asking about the time or weather!';
            } else if (input.includes('javascript') || input.includes('js')) {
                return 'JavaScript is a programming language that enables interactive web pages. This entire application is built with JavaScript!';
            } else if (input.includes('calculator') || input.includes('bmi') || input.includes('temperature')) {
                return 'You can use the calculator tools in the first section of this page!';
            } else if (input.includes('todo') || input.includes('task')) {
                return 'Check out the To-Do List section to manage your tasks!';
            } else {
                return 'I\'m not sure how to respond to that. Try asking something else or type "help" for suggestions.';
            }
        }
        
        // Add event listener for Enter key in chat input
        document.getElementById('user-message').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Update date and time
            updateDateTime();
            
            // Set interval to update date and time every second
            setInterval(updateDateTime, 1000);
        });