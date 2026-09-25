# FreelanceHub – Freelancer Marketplace

A frontend-based **Freelancer Marketplace** developed as an SDC academic project using **HTML, CSS, JavaScript, and LocalStorage**.

FreelanceHub connects clients with skilled freelancers for project-based work. Clients can post projects, review proposals, communicate with freelancers, and manage projects. Freelancers can create profiles, browse projects, submit proposals, communicate with clients, and manage their work.

---

## 📌 Project Overview

### Problem Statement

Finding suitable freelancers and managing project-based work can be difficult when clients and skilled professionals do not have a centralized platform.

**FreelanceHub** provides a centralized marketplace where:

* Clients can post project requirements.
* Freelancers can discover suitable projects.
* Freelancers can submit proposals and bids.
* Clients can review and manage proposals.
* Users can communicate through messages.
* Freelancers can maintain professional profiles.
* Users can provide reviews and ratings.
* Administrators can manage users and projects.

---

## 💼 Business System

FreelanceHub is a:

> **Freelancer Marketplace Business System**

The system connects two main types of users:

1. **Clients** – People or organizations looking for professional services.
2. **Freelancers** – Skilled professionals providing services.

The application also contains an:

3. **Admin Module** – Used to manage platform users and projects.

---

# 🎯 SDC Requirements

The project satisfies the following nine SDC requirements.

## 1. Problem Statement

The application solves the problem of connecting clients and freelancers through a centralized platform.

Clients can post requirements and freelancers can respond with proposals.

---

## 2. Business System and Modules

### Admin Module

The Admin Module provides:

* Admin login
* Dashboard
* Total user statistics
* Total project statistics
* Total proposal statistics
* Active project statistics
* User management
* Project management
* User deletion
* Project deletion

### User Module

The User Module contains two roles.

#### Client

Clients can:

* Register
* Login
* Post projects
* Select project categories
* Define budget
* Define deadline
* Specify required skills
* View proposals
* Accept proposals
* Reject proposals
* Track project status
* View messages
* View reviews

#### Freelancer

Freelancers can:

* Register
* Login
* Create profiles
* Add skills
* Add biography
* Add portfolio information
* Set hourly rate
* Browse projects
* Search projects
* Filter projects by category
* Submit proposals
* Enter bid amounts
* Specify delivery time
* Add cover letters
* View proposal status
* Send messages
* View reviews

---

## 3. Technologies Used

The application is developed using only:

| Technology   | Purpose                             |
| ------------ | ----------------------------------- |
| HTML5        | Web page structure                  |
| CSS3         | Styling and responsive design       |
| JavaScript   | Application logic and interactivity |
| LocalStorage | Browser-based data storage          |

No backend framework is required for the academic demonstration.

---

## 4. UI Using CSS Grid and Flexbox

The project uses modern CSS layout techniques.

### CSS Grid

Grid is used for:

* Project cards
* Freelancer cards
* Dashboard cards
* Feature sections
* Technology sections
* Portal layouts
* Statistics
* Responsive content

Example:

```css
.project-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

### Flexbox

Flexbox is used for:

* Navigation
* Buttons
* Project metadata
* Project flow
* Footer
* Responsive components

Example:

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

---

# 5. Signup/Login Using LocalStorage

FreelanceHub implements client-side registration and login using JavaScript and LocalStorage.

User information is stored using:

```text
fh_users
```

The currently logged-in user is stored using:

```text
fh_currentUser
```

Other application data is stored using:

```text
fh_jobs
fh_proposals
fh_messages
fh_reviews
```

### Registration

Users can register as:

* Client
* Freelancer

### Login

Users can log in as:

* Client
* Freelancer
* Admin

The Admin role is available for login but is not available during public registration.

---

# 6. Module-Wise Navigation Using JavaScript

JavaScript identifies the role of the logged-in user and displays the appropriate module.

The application uses role-based navigation:

```text
Login
   |
   v
Role Detection
   |
   +---- Client ------> Client Portal
   |
   +---- Freelancer --> Freelancer Portal
   |
   +---- Admin -------> Admin Portal
```

The main JavaScript function is:

```javascript
function showPortal() {

    const user = getCurrentUser();

    if (!user) return;

    if (user.role === "client") {
        renderClientPortal();
    }
    else if (user.role === "freelancer") {
        renderFreelancerPortal();
    }
    else if (user.role === "admin") {
        renderAdminPortal();
    }
}
```

This provides module-wise access based on the user's role.

---

# 7. Major Functionalities

The following major functionalities are implemented.

### Authentication

* User registration
* User login
* Logout
* Role-based access

### Project Management

* Create project
* View projects
* Search projects
* Filter by category
* Sort by budget
* Delete projects
* Track project status

### Proposal Management

* Submit proposals
* Enter bid amount
* Specify delivery time
* Add cover letter
* Accept proposals
* Reject proposals
* Track proposal status

### Freelancer Management

* Freelancer profiles
* Skills
* Biography
* Portfolio
* Hourly rate
* Profile editing

### Communication

Users can send messages through the messaging module.

### Reviews

Users can view reviews and ratings associated with their profiles.

### Administration

Admins can:

* View users
* View projects
* View proposals
* View active projects
* Delete users
* Delete projects

---

# 8. GitHub Deployment

The project is GitHub-ready.

## Project Structure

```text
FreelanceHub/
│
├── index.html
└── README.md
```

The complete application is contained inside:

```text
index.html
```

---

## Upload to GitHub

### Step 1 – Create a GitHub Repository

Create a new repository named:

```text
FreelanceHub
```

### Step 2 – Open the Project Folder

Open the folder containing:

```text
index.html
README.md
```

### Step 3 – Initialize Git

Open Command Prompt or VS Code Terminal:

```bash
git init
```

### Step 4 – Add Files

```bash
git add .
```

### Step 5 – Create Commit

```bash
git commit -m "Initial FreelanceHub SDC project"
```

### Step 6 – Connect GitHub Repository

Replace the repository URL with your own GitHub repository URL:

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
```

### Step 7 – Push the Project

```bash
git branch -M main
git push -u origin main
```

---

# 9. Project Demonstration

The project is designed to be demonstrated module-by-module.

## Demo Flow

### Step 1 – Open Application

Open:

```text
index.html
```

in a web browser.

### Step 2 – Demonstrate Registration

Register a new:

```text
Client
```

or

```text
Freelancer
```

account.

### Step 3 – Demonstrate Client Module

Login as a Client.

Demonstrate:

* Client Dashboard
* Post Project
* Select Category
* Set Budget
* Set Deadline
* View Projects
* Manage Proposals

### Step 4 – Demonstrate Freelancer Module

Login as a Freelancer.

Demonstrate:

* Freelancer Dashboard
* Profile
* Skills
* Browse Projects
* Search Projects
* Filter Projects
* Submit Proposal
* View Proposal Status

### Step 5 – Demonstrate Communication

Use the messaging functionality to send messages between users.

### Step 6 – Demonstrate Admin Module

Login using the Admin account.

Demonstrate:

* Total Users
* Total Projects
* Total Proposals
* Active Projects
* Manage Users
* Delete User
* Manage Projects
* Delete Project

### Step 7 – Demonstrate LocalStorage

Open the browser:

```text
F12 → Application → Local Storage
```

The following keys can be demonstrated:

```text
fh_users
fh_jobs
fh_proposals
fh_messages
fh_reviews
fh_currentUser
```

---

# 🔐 Demonstration Accounts

The application automatically creates demonstration accounts.

### Admin

```text
Email: admin@freelancehub.com
Password: admin123
Role: Admin
```

### Client

```text
Email: client@gmail.com
Password: client123
Role: Client
```

### Freelancer

```text
Email: rahul@gmail.com
Password: rahul123
Role: Freelancer
```

> These credentials are intended only for the academic demonstration of this frontend project.

---

# 📂 Project Categories

FreelanceHub supports 26 professional categories:

1. Web Development
2. App Development
3. UI/UX Design
4. Graphic Design
5. Digital Marketing
6. Content Writing
7. Data Science
8. Machine Learning
9. AI Development
10. Video Editing
11. Photography
12. SEO
13. Social Media Management
14. Software Testing
15. Data Entry
16. Virtual Assistant
17. WordPress Development
18. Game Development
19. Cybersecurity
20. Cloud Computing
21. Database Management
22. Logo Design
23. Animation
24. 3D Modeling
25. Translation
26. Business Consulting

---

# 🏗️ Application Architecture

```text
                    FREELANCEHUB
                         |
          +--------------+--------------+
          |              |              |
       Admin           Client       Freelancer
          |              |              |
          |              |              |
      Manage Users    Projects       Profile
      Manage Jobs     Proposals      Projects
      Dashboard       Messages       Proposals
                      Reviews        Messages
                                     Reviews
                         |
                         v
                    LocalStorage
```

---

# 🔄 Application Workflow

```text
                    START
                      |
                      v
                Open FreelanceHub
                      |
                      v
              Register / Login
                      |
                      v
                Role Detection
                      |
          +-----------+-----------+
          |           |           |
          v           v           v
       CLIENT     FREELANCER    ADMIN
          |           |           |
          v           v           v
      Post Job    Find Jobs    Manage Users
      View Jobs   Submit Bid   Manage Jobs
      Proposals   Profile      Dashboard
      Messages    Messages
      Reviews     Reviews
          |           |
          +-----+-----+
                |
                v
          LocalStorage
```

---

# 🎨 User Interface

The application contains:

* Responsive navigation bar
* Hero section
* SDC project overview
* Business system explanation
* Admin Module section
* User Module section
* Technology section
* Project workflow
* Feature cards
* Project marketplace
* Freelancer marketplace
* Company/professional section
* Testimonials
* Statistics
* Global map visualization
* Ratings
* Login
* Registration
* User portals
* Admin portal
* Call-to-action section
* Footer

---

# 💾 LocalStorage Data Model

### Users

```javascript
{
    id,
    name,
    email,
    password,
    role,
    skills,
    bio,
    portfolio,
    hourlyRate
}
```

### Projects

```javascript
{
    id,
    title,
    category,
    skills,
    description,
    budget,
    deadline,
    type,
    experience,
    clientId,
    clientName,
    status,
    createdAt
}
```

### Proposals

```javascript
{
    id,
    jobId,
    freelancerId,
    freelancerName,
    amount,
    delivery,
    coverLetter,
    status,
    createdAt
}
```

### Messages

```javascript
{
    id,
    senderId,
    senderName,
    receiverId,
    text,
    createdAt
}
```

### Reviews

```javascript
{
    id,
    userId,
    fromName,
    rating,
    comment
}
```

---

# ⚠️ Project Scope

This project is designed as a **frontend academic demonstration**.

The application uses browser LocalStorage instead of a server-side database.

Therefore:

* Passwords are stored locally for demonstration.
* Authentication is client-side.
* Data is stored only in the browser.
* Payment functionality is represented as a demonstration concept.
* It is not intended to provide production-level security.
* A real commercial application would require a backend, secure authentication, database and payment gateway.

---

# 🚀 Future Enhancements

The following features can be added in a production version:

* Backend API
* Database integration
* Secure authentication
* Password hashing
* Email verification
* Real-time chat
* Real payment gateway
* Notifications
* Advanced search
* Freelancer verification
* Project file uploads
* Cloud storage
* Advanced analytics
* Admin reports
* Mobile application

---

# 📊 Expected Project Outcome

FreelanceHub provides a centralized platform for connecting clients and freelancers.

The project demonstrates:

* Web application development
* HTML structure
* CSS styling
* CSS Grid
* CSS Flexbox
* JavaScript programming
* DOM manipulation
* Event handling
* LocalStorage
* Authentication workflow
* Role-based navigation
* CRUD-style operations
* Project management
* Proposal management
* User management
* Responsive web design

---

# 👨‍🎓 Academic Project

**Project Name:** FreelanceHub – Freelancer Marketplace

**Project Type:** SDC / Academic Project

**Application Type:** Frontend Web Application

**Technologies:**

```text
HTML5
CSS3
JavaScript
LocalStorage
```

**Main Modules:**

```text
1. Admin Module
2. User Module
   ├── Client
   └── Freelancer
```

---

# ✅ SDC Requirement Checklist

| Requirement           | Status      |
| --------------------- | ----------- |
| Problem Statement     | ✅ Completed |
| Business System       | ✅ Completed |
| Admin Module          | ✅ Completed |
| User Module           | ✅ Completed |
| HTML/CSS/JavaScript   | ✅ Completed |
| CSS Grid/Flexbox      | ✅ Completed |
| Signup/Login          | ✅ Completed |
| LocalStorage          | ✅ Completed |
| JavaScript Navigation | ✅ Completed |
| Major Functionalities | ✅ Completed |
| GitHub Ready          | ✅ Completed |
| Demonstration Ready   | ✅ Completed |

---

## Conclusion

**FreelanceHub** demonstrates how a freelancer marketplace can be designed and implemented as a frontend web application.

The application provides separate Client, Freelancer and Admin functionality while using JavaScript for application logic and LocalStorage for browser-based persistence.

The project is structured to satisfy the major requirements of the SDC project and can be demonstrated directly through a web browser.
