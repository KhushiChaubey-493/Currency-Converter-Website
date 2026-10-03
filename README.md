# Currency Converter Website

A responsive **Currency Converter Website** built using **HTML, CSS, and JavaScript**. The application allows users to enter an amount, select a base currency, and retrieve currency conversion values using live exchange-rate data from an external API.

## Features

* Convert a specified amount from a selected base currency.
* Supports **Indian Rupee (INR)**, **US Dollar (USD)**, and **Euro (EUR)** as input currencies.
* Fetches exchange-rate data from an external currency exchange API.
* Displays converted values dynamically in a table.
* Shows the currency code and converted amount for each available currency returned by the API.
* Displays a loading state while exchange-rate data is being fetched.
* Validates the entered amount before making the API request.
* Handles API/network errors with an error message.
* Responsive and clean user interface.
* Built using vanilla HTML, CSS, and JavaScript without frontend frameworks.

## Technologies Used

* **HTML5** — Page structure and form elements
* **CSS3** — Styling, layout, and responsive design
* **JavaScript (ES6)** — API requests, validation, DOM manipulation, and dynamic rendering
* **Fetch API** — Communication with the external exchange-rate service

## API Used

The application retrieves exchange-rate data from:

**ExchangeRate API**

```text
https://open.er-api.com/v6/latest/{currency}
```

The selected currency is used as the base currency in the API request.

For example:

```text
https://open.er-api.com/v6/latest/USD
```

The API response contains exchange rates for multiple currencies, which are then used by the application to calculate the converted values.

## Project Structure

```text
Currency-Converter-Website/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

### 1. Enter an Amount

The user enters the amount they want to convert.

The application validates that the value is:

* Present
* A valid number
* Greater than zero

If the entered amount is invalid, the application displays:

```text
Please enter a valid amount
```

### 2. Select a Currency

The user selects the base currency from the available options:

```text
INR — Indian Rupee
USD — US Dollar
EUR — Euro
```

### 3. Submit the Conversion

When the user clicks the **Submit** button, JavaScript prevents the default form submission and retrieves the entered amount and selected currency.

```javascript
const value = parseFloat(
    document.querySelector("input[name='quantity']").value
);

const currency = document.querySelector(
    "select[name='currency']"
).value;
```

### 4. Fetch Exchange Rates

The application creates an API request using the selected currency:

```javascript
const url = `https://open.er-api.com/v6/latest/${currency}`;
```

The request is sent using the browser's Fetch API:

```javascript
let response = await fetch(url);
let rJson = await response.json();
```

### 5. Calculate Converted Values

The API provides exchange rates for different currencies.

The application multiplies each exchange rate by the entered amount:

```javascript
(rate * value).toFixed(2)
```

The resulting values are then inserted dynamically into the conversion table.

## Conversion Table

The results are displayed using three columns:

| Column        | Description                                 |
| ------------- | ------------------------------------------- |
| Currency      | Currency identifier                         |
| Currency Code | Currency code returned by the API           |
| Value         | Converted value based on the entered amount |

The table is populated dynamically after the API response is received.

## Loading State

While the API request is being processed, the application displays:

```text
Loading...
```

This provides immediate feedback to the user instead of leaving the results area blank.

## Error Handling

The API request is wrapped in a `try...catch` block.

If the API request fails or returns an unsuccessful response, the application displays:

```text
Error fetching data
```

This prevents the application from failing silently when the external service cannot be reached.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KhushiChaubey-493/Currency-Converter-Website.git
```

### 2. Navigate to the Project

```bash
cd Currency-Converter-Website
```

### 3. Run the Application

Open:

```text
index.html
```

in a modern web browser.

Because the application uses an external API, an **internet connection is required** for fetching exchange-rate data.

## Example

Suppose the user enters:

```text
Amount: 100
Currency: USD
```

The application requests the latest exchange rates using USD as the base currency and displays the corresponding converted values returned by the API.

The exact values may change because exchange rates are dynamic.

## Key JavaScript Concepts Practiced

This project demonstrates practical frontend JavaScript concepts including:

* `async` / `await`
* `fetch()`
* Promises
* REST API consumption
* JSON parsing
* DOM manipulation
* Event listeners
* Form handling
* Input validation
* Template literals
* Dynamic HTML generation
* Error handling with `try...catch`
* Working with objects and loops

## Learning Objectives

This project was created to practice building a real-world frontend application that communicates with an external API.

The main concepts practiced include:

* Working with third-party APIs
* Making asynchronous HTTP requests
* Processing JSON responses
* Dynamically rendering API data
* Handling loading and error states
* Validating user input
* Connecting frontend UI with external data sources
* Separating HTML, CSS, and JavaScript responsibilities

## Future Improvements

Possible improvements for future versions include:

* Add more selectable base currencies.
* Add a dedicated **From Currency → To Currency** conversion interface.
* Allow users to select a specific target currency.
* Add a currency swap button.
* Add currency flags.
* Display the exchange rate used for each conversion.
* Add historical exchange-rate charts.
* Add a currency search/dropdown.
* Add a last-updated timestamp.
* Improve accessibility and keyboard navigation.
* Add better mobile responsiveness.
* Add a conversion history using `localStorage`.

## Project Status

**Completed — Frontend/API Integration Practice Project**

The current version focuses on currency conversion using an external exchange-rate API, dynamic table generation, input validation, and API error handling.

## Author

**Khushi Chaubey**

GitHub: https://github.com/KhushiChaubey-493

## License

This project was created for learning and educational purposes.
