# Polynomial Constant Calculator

An **Express.js backend** to calculate the constant term `c` of a polynomial given its roots in JSON format.  
Roots are provided in various bases and decoded into decimal using **BigInt** for precision with very large numbers.  

This project was built as part of the **Hashira Placements Assignment**.

---

## 📂 Project Structure

HASHIRA/
├── utils/
│   ├── findConstant.js # Calculates constant term c = (-1)^n × (r1 × r2 × ... × rn)
│   ├── toBase10.js # Decodes root values from given base → BigInt
│   └── toScientific.js # Converts large numbers to scientific notation (for readability)
├── index.js # Express.js server entry point
├── package.json # Dependencies and scripts
├── package-lock.json
└── .gitignore




---

## 🚀 Setup & Run

### 1. Clone Repository
```bash
git clone https://github.com/mohithingorani/polynomial-constant-from-roots.git
cd polynomial-constant-from-roots

2. Install Dependencies
npm install

3. Run Server
node index.js


By default, the server runs on http://localhost:3000
.

📬 API Usage
Endpoint
POST /calculate

Request Body

Send JSON in this format:

{
  "keys": {
    "n": 4,
    "k": 3
  },
  "1": {
    "base": "10",
    "value": "4"
  },
  "2": {
    "base": "2",
    "value": "111"
  },
  "3": {
    "base": "10",
    "value": "12"
  },
  "6": {
    "base": "4",
    "value": "213"
  }
}

Example Response
{
  "numberOfRoots": 4,
  "constantC": "-336",
  "scientific": "-3.360e+2"
}

🧪 Testing with Postman

Open Postman.

Set request type to POST.

Enter URL: http://localhost:3000/calculate.

In Body > raw > JSON, paste your test case.

Send request and check the response.

Decoding Step: Each root is first converted from its given base into decimal (toBase10.js).

Multiplication Step: All roots are multiplied (findConstant.js).

Formatting Step: Result can be shown in full or scientific notation (toScientific.js).

✅ Requirements

Node.js >= 14

npm

📌 Notes

Handles very large numbers safely with BigInt.

Includes both full result and scientific notation in response.

Modular utility functions for better readability.



---

👉 Want me to also generate a **sample `index.js`** that matches this README (with the `/calculate` POST 
