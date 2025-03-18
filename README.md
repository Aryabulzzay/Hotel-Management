# Hotel Management System - Admin Panel

This project is a **Hotel Management System** designed to manage guest, room, employee, department, and billing information. It includes an admin panel with CRUD (Create, Read, Update, Delete) functionality for managing various entities in a hotel.
---

## Features

- **Guest Management**: Add, view, and delete guest information.
- **Room Management**: Add, view, and delete room details.
- **Employee Management**: Add, view, and delete employee records.
- **Department Management**: Add, view, and delete department information.
- **Guest Booking**: Manage guest bookings with room assignments.
- **Guest Contact**: Store and manage guest contact details.
- **Guest Billing**: Generate and manage guest bills.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Dependencies**:
  - `express`: For building the backend server.
  - `mysql2`: For interacting with the MySQL database.
  - `cors`: To enable Cross-Origin Resource Sharing.
  - `axios`: For making HTTP requests.
  - `bootstrap`: For styling the frontend.
  - `react-router-dom`: For routing (if applicable).

---

## Project Structure
```
hotel-management-system/
├── index.js                 # Main backend server file
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Locked dependency versions
├── README.md                # Project documentation
├── style.css                # Global styles for the application
├── guest.css                # Styles for guest-related pages
├── guestForm.css            # Styles for guest forms
├── index.html               # Main landing page for the admin panel
├── room.html                # Room information table
├── guest.html               # Guest information table
├── employee.html            # Employee information table
├── department.html          # Department information table
├── guest_booking.html       # Guest booking information table
├── guest_bill.html          # Guest billing information table
├── guest_contact.html       # Guest contact information table
├── roomForm.html            # Form for adding rooms
├── guestForm.html           # Form for adding guests
├── employeeForm.html        # Form for adding employees
├── departmentForm.html      # Form for adding departments
├── guest_bookingForm.html   # Form for adding guest bookings
├── guest_contactForm.html   # Form for adding guest contacts
├── guest_billForm.html      # Form for adding guest bills
├── roomForm.js              # JavaScript for room form submission
├── guestForm.js             # JavaScript for guest form submission
├── employeeForm.js          # JavaScript for employee form submission
├── departmentForm.js        # JavaScript for department form submission
├── guest_bookingForm.js     # JavaScript for guest booking form submission
├── guest_contactForm.js     # JavaScript for guest contact form submission
├── guest_billForm.js        # JavaScript for guest bill form submission
```

---

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).
- **MySQL**: Install MySQL and set up a database named `five_db2`.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/hotel-management-system.git
   cd hotel-management-system
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up the database**:
   - Create a MySQL database named `five_db2`.
   - Import the necessary tables (customer_details, room, employee, department, customer_booking, customer_bill, customer_contact) into the database.

4. **Configure the database connection**:
   - Update the database connection details in `index.js`:
     ```javascript
     const connection = mysql2.createConnection({
       host: "localhost",
       database: "five_db2",
       user: "root",
       password: "your-mysql-password",
     });
     ```

5. **Start the server**:
   ```bash
   node index.js
   ```

6. **Access the application**:
   - Open `index.html` in your browser to access the admin panel.

---

## Usage

- **Add Records**: Use the respective forms to add new guests, rooms, employees, departments, bookings, contacts, or bills.
- **View Records**: Navigate to the respective tables to view existing records.
- **Delete Records**: Use the delete button in the tables to remove records.

---

## API Endpoints

The backend provides the following API endpoints:

- `GET /all` - Fetch all guest details.
- `GET /all2` - Fetch all room details.
- `GET /all3` - Fetch all employee details.
- `GET /all4` - Fetch all guest contact details.
- `GET /all5` - Fetch all guest booking details.
- `GET /all6` - Fetch all guest bill details.
- `GET /all7` - Fetch all department details.
- `POST /guests` - Add a new guest.
- `POST /room` - Add a new room.
- `POST /employee` - Add a new employee.
- `POST /department` - Add a new department.
- `POST /guests_booking` - Add a new guest booking.
- `POST /guests_contact` - Add a new guest contact.
- `POST /guests_bill` - Add a new guest bill.
- `POST /delete-guest` - Delete a guest record.
- `POST /delete-room` - Delete a room record.
- `POST /delete-employee` - Delete an employee record.
- `POST /delete-department` - Delete a department record.
- `POST /delete-guest_booking` - Delete a guest booking record.
- `POST /delete-guest_contact` - Delete a guest contact record.
- `POST /delete-guest_bill` - Delete a guest bill record.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. **Fork** the repository.
2. **Create a new branch** for your feature or bugfix.
3. **Commit your changes**.
4. **Push your branch** and submit a pull request.

---

## License

This project is licensed under the **ISC License**. See the LICENSE file for details.

---

## Acknowledgments

- Thanks to the developers of `express`, `mysql2`, and other dependencies for making this project possible.
- Inspired by real-world hotel management systems.

Feel free to explore the project and provide feedback!
