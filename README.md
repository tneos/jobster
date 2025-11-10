## 🌟 Jobster: Job Application Tracker

Jobster is a modern web application designed to help users **track the progress of their job applications**. It provides a centralized, easy-to-use interface for performing all **CRUD (Create, Read, Update, Delete)** operations on job applications, along with a helpful dashboard for tracking application statistics.

---

## 🚀 Features

- **🔐 Authentication & Protected Routes:** All core application features are protected and require user authentication.
- **📋 All Jobs Page:** A comprehensive list view of all tracked job applications.
- **➕ New Job Form:** A dedicated form for easily adding a new job application entry.
- **📊 Dashboard & Statistics:** A visual dashboard that includes a chart to provide useful statistics and insights into the user's application progress (e.g., status breakdown, applications over time).
- **✍️ CRUD Operations:** Full functionality to **C**reate, **R**ead (view), **U**pdate (edit), and **D**elete job application records.

---

## 🛠️ Tech Stack

Jobster is built using a robust and modern set of technologies:

| Technology            | Purpose                                                                                                        |
| :-------------------- | :------------------------------------------------------------------------------------------------------------- |
| **TypeScript**        | Enhances code quality and reliability by adding static typing.                                                 |
| **React**             | The core JavaScript library for building the user interface.                                                   |
| **React Router**      | Handles client-side routing to manage navigation between protected pages.                                      |
| **Redux**             | Manages the application's global state (e.g., job list, user data, loading status) in a predictable container. |
| **Axios**             | A promise-based HTTP client used for making API requests to perform CRUD operations.                           |
| **Styled Components** | A library for writing component-level CSS, allowing for dynamic and well-scoped styling.                       |

---

## ⚙️ Installation and Setup

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Steps

1.  **Clone the Repository:**

    ```bash
    git clone [repository-url]
    cd jobster
    ```

2.  **Install Dependencies:**

    ```bash
    # Using npm
    npm install

    # or Using yarn
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a file named `.env` in the root directory and add necessary environment variables (e.g., API base URL, authentication keys).

    ```
    # Example for API URL
    REACT_APP_BASE_URL=http://localhost:5000/api/v1
    ```

4.  **Run the Application:**

    ```bash
    # Using npm
    npm start

    # or Using yarn
    yarn start
    ```

The application will typically open in your browser at `http://localhost:3000`.

---

## 💡 Usage

1.  **Sign Up / Log In:** Access the application's login/register page. Upon successful authentication, you will be redirected to a protected route (e.g., the Dashboard).
2.  **Add a New Job:** Navigate to the "Add Job" page and fill out the form to create a new application entry.
3.  **View All Jobs:** Go to the "All Jobs" page to see a list of all your tracked applications. From here, you can view details, edit, or delete entries.
4.  **Check Stats:** Visit the "Dashboard" to view your application statistics visualized in a chart.

---
