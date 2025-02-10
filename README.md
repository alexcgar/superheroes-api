# Superheroes API

This project is a NestJS API with a React frontend that allows:
- Adding superheroes with a name, superpower, and a humility score (1-10).
- Fetching a list of superheroes sorted by humility score in descending order.

## Technologies Used
- **Backend:** NestJS
- **Frontend:** React + Bootstrap
- **Database:** In-memory (Array in memory)
- **Testing:** Jest
- **Validation:** class-validator in NestJS

## Installation and Execution

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/superheroes-api.git
cd superheroes-api
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the backend
```bash
npm run start:dev
```

### 4️⃣ Start the frontend
In another terminal, run:
```bash
cd superheroes-frontend
npm install
npm start
```

The application will be available at `http://localhost:3000` (backend) and `http://localhost:3001` (frontend).

## API Endpoints

### ➕ Add a Superhero
**POST** `/superheroes`
```json
{
  "name": "Superman",
  "superpower": "Flight",
  "humilityScore": 8
}
```

### 📜 Get the List of Superheroes
**GET** `/superheroes`

The response is sorted by `humilityScore` in descending order.

## Validation
- `humilityScore` must be a number between **1 and 10**.
- `name` and `superpower` must be **non-empty strings**.

## Testing
To run backend tests:
```bash
npm run test
```

## 🤝 Team Collaboration
If collaborating with a teammate to improve this project:
1. **Task Division:** Assign tasks using tickets or issues.
2. **Clean Code:** Follow coding conventions and conduct PR reviews on GitHub.
3. **Constant Feedback:** Provide constructive feedback in each iteration.
4. **Clear Documentation:** Keep the README and code comments updated.

## ⏳ "If I had more time..."
If I had more time, I would improve:
- **Database:** Implement a real database like PostgreSQL or MongoDB.
- **Authentication:** Add JWT authentication.
- **Enhanced UI/UX:** Improve the interface with animations and better styles.
- **End-to-End Testing:** Use Cypress or Puppeteer for frontend tests.
- **Deployment:** Deploy the project on Vercel (frontend) and Railway/Heroku (backend).

## 📌 Contact
If you have suggestions or want to contribute, feel free to open an issue or PR! 🚀

