### **Employee Management System**

Create a Node.js application for an employee management system with input validation using **MongoDB** and **Mongoose**. Implement the functionality to **add employees** and perform necessary validation checks as described.

---

#### Employee Schema
The schema should include the following fields:

- name: String, required – Employee’s full name.

- email: String, required, unique – Employee’s email address.

- department: String, required – Department of the employee.

- salary: Number, required – Salary of the employee.

- experience: Number, required – Years of experience.

- position: String, default 'Junior' – Employee’s designation.

- joiningDate: Date, default Date.now – Employee’s joining date.


---

#### Database Configuration

Database Name: `employee_db`  

```
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/employee_db
```

---

### **API Endpoints**

#### **1. POST `/employees/add-employee`** - Create a New Employee

* **Description**: Adds a new employee to the system with input validation.
* **Validation Logic**:

  * **Position Assignment**:

    * If **experience** is less than 2 years, set **position** to "Junior".
    * If **experience** is between 2 and 5 years, set **position** to "Mid-level".
    * If **experience** is more than 5 years, set **position** to "Senior".
  * **Salary Validation**:

    * If **salary is less than 20000**, return status 400 with message: `"Salary must be at least 20000"`.
  * **Department Validation**:

    * If **department** is not one of `["IT", "HR", "Finance", "Marketing"]`, return status 400 with message: `"Invalid department"`.
* **Request Body**:

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "department": "IT",
    "salary": 30000,
    "experience": 3
  }
  ```
* **Response (Success)**:

  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "department": "IT",
    "salary": 30000,
    "experience": 3,
    "position": "Mid-level",
    "joiningDate": "2024-01-15T10:30:00.000Z"
  }
  ```
* **Response (Error - Salary Validation)**:

  ```json
  {
    "message": "Salary must be at least 20000"
  }
  ```
* **Response (Error - Department Validation)**:

  ```json
  {
    "message": "Invalid department"
  }
  ```

---

### **Folder Structure**

```
app/
├── server.js              
├── .env                   
├── models/
│   └── Employee.js        
├── controllers/
│   └── employeeController.js 
└── routes/
    └── employeeRoutes.js  
```




<MultiLineNote>

- Export the express instance using the default export syntax.

- Follow the exact folder structure and file names as specified to ensure consistency.

- Implement the exact API endpoints mentioned in the description.

- The server must run on port 3000 as specified.

- Use the exact database name provided in the requirements (e.g., authentication_system_db).

Any deviation from the specified paths, endpoints, port, or database name will lead to test case failures.
</MultiLineNote>