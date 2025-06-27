📘  BOOKINGS API – FINAL PROJECT
================================

This is the final project for the Back-End Development module at Winc Academy.

It is a RESTful API for a fictional booking platform, built with Node.js, Express, SQLite, and Prisma ORM. It includes full CRUD functionality, filtering, JWT-based authentication, error tracking with Sentry, and automated tests via Postman & Newman.

------------------------------------------------------------

🚀  GETTING STARTED
===================

🛠  INSTALLATION
----------------

1. Clone the repository:
   git clone https://github.com/Yukasezu00/bookings-api-backend-project.git
   cd bookings-api-backend-project

2. Install all dependencies:
   npm install

3. Create a `.env` file in the root directory:

   DATABASE_URL="file:./prisma/dev.db"
   AUTH_SECRET_KEY=your_secret_key_here
   SENTRY_DSN=your_sentry_dsn_here

   💡 You can use any random string for the AUTH_SECRET_KEY.
   If you're not using Sentry, you can leave SENTRY_DSN empty.

4. Run migrations and seed the database:
   npx prisma migrate dev --name init
   npx prisma db seed

5. Start the application:
   npm run dev

------------------------------------------------------------

📚  FEATURES
===========

- JWT-based Authentication  
- CRUD for Users, Hosts, Properties, Bookings, Amenities, and Reviews  
- Query-based filtering (e.g. /users?username=jdoe)  
- Input validation with Zod  
- Relational queries using Prisma’s `include`  
- Global error handling with custom messages  
- Error logging with Sentry  
- Seed data from `prisma/seed.js`

------------------------------------------------------------

🧪  RUNNING TESTS
==================

This project uses Newman to automate tests based on Postman collections.

1. Start the API:
   npm run dev

2. In a separate terminal, run:

   Positive tests:
   npm run test-positive

   Negative tests:
   npm run test-negative

⚠️  Warning: The tests will reset the database and perform destructive operations (e.g. DELETE).

Test collections and environments are stored in:
  /postman/collections
  /postman/environments

------------------------------------------------------------

🖥️  PRISMA STUDIO (OPTIONAL)
=============================

To explore your local database visually during development:

In a separate terminal, run: npx prisma studio

This will open an interactive UI in your browser.

⚠️  Use only in development — changes are applied directly to your database.

------------------------------------------------------------

🧰  TECH STACK
==============

- Node.js  
- Express  
- Prisma ORM (SQLite)  
- JSON Web Token (JWT)  
- Zod (input validation)  
- Sentry (error logging)  
- Postman & Newman (API testing)

------------------------------------------------------------

👨‍💻  AUTHOR
===========

Final project submitted by **Yunus Yildiz**  
Winc Academy – Back-End Development Track
