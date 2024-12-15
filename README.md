Arcadia Zoo v1
"Welcome to the Arcadia Zoo repository! This project showcases my expertise in HTML, CSS, JavaScript, Node.js, and database management with PostgreSQL and MongoDB.

The application is designed to provide a seamless user experience, enabling users to explore animal habitats, submit reviews, and learn about services while offering administrators tools to manage the zoo effectively."

Technologies Used
Front-End
HTML, CSS, JavaScript for creating a responsive and interactive interface.
Deployment: Hosted on Render.
Back-End
Node.js & Express.js for API development.
PostgreSQL for relational data (e.g., users, reviews).
MongoDB for non-relational data (e.g., animals).
Authentication: Implemented using bcrypt for password hashing.
Deployment: Render for API hosting.
Features
User-Facing Features
User Authentication: Secure registration and login functionality.
Review System: Submit, view, and manage reviews for animals and services.
Responsive Design: Optimized for desktop and mobile devices.
Admin Features
Admin Panel: Manage users, animals, and reviews.
Service Management: Add or update zoo services dynamically.
Setup Instructions
Clone the Repositories
Front-End
bash
Copy code
git clone https://github.com/Aksachlisimo/arcadia_zoo_v1.git
Back-End
bash
Copy code
git clone https://github.com/Aksachlisimo/Arcadia_zoo_Api.git
Run Locally
Navigate to the front-end directory:
bash
Copy code
cd arcadia_zoo_v1
Open index.html in a web browser to view the project locally.
API Configuration
For detailed back-end setup instructions, check the back-end README.

Explore the Project
Deployed Links
Front-End: Live on Render
Back-End: API Endpoints
API Endpoints
Endpoint	Method	Description
/api/login	POST	Log in a user/admin
/api/register	POST	Register a new user
/api/animals	GET	Retrieve all animal data
/api/services	GET	Fetch available zoo services
/api/reviews	POST	Submit a review
Screenshots
Login Page
Screenshot of the login interface.

Review Management
Screenshot of the review submission system.

Contributing
Steps to Contribute
Fork the repository.
Create a feature branch:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Add feature"
Push to the branch:
bash
Copy code
git push origin feature-name
Create a pull request.
License
This project is licensed under the MIT License.
