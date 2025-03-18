import mysql2 from 'mysql2';
import express from 'express';
import path from 'path';
import cors from 'cors';  // Make sure cors is imported

const connection = mysql2.createConnection({
    host: "localhost",
    database: "five_db2",
    user: "root",
    password: "Arya052@bulzzay_",
});

const app = express();
const PORT = 5000;
app.use(express.json());

// Enable CORS for all requests
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
}));


app.listen(PORT, () => {
    console.log(`SERVER: http://localhost:${PORT}`);
    connection.connect(err => {
        if (err) throw err;
        console.log("DATABASE CONNECTED");
    });
});

// Define API endpoints
app.get("/all", (req, res) => {
    const sql_query = `SELECT * FROM customer_details`;
    connection.query(sql_query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get("/all2", (req, res) => {
    const sql_query = `SELECT * FROM room`;
    connection.query(sql_query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get("/all3", (req, res) => {
    const sql_query = `SELECT * FROM employee`;
    connection.query(sql_query, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

app.get("/all4", (req, res) => {
    const sql_query = `SELECT * FROM customer_contact`;
    connection.query(sql_query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get("/all5", (req, res) => {
    const sql_query = `SELECT * FROM customer_booking`;
    connection.query(sql_query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get("/all6", (req, res) => {
    const sql_query = `SELECT * FROM customer_bill`;
    connection.query(sql_query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get("/all7", (req, res) => {
    const sql_query = `SELECT * FROM department`;
    connection.query(sql_query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.post("/guests", async (req, res) => {
    let {
        firstName,
        lastName,
        gender,
        age,
        checkIn,
        checkOut,
    } = req.body;

    checkIn = new Date(checkIn).toISOString().slice(0, 10);
    checkOut = new Date(checkOut).toISOString().slice(0, 10);
    age = parseInt(age);
    let id = 0;
    // find total document count
    const sql1 = `SELECT MAX(ID) FROM customer_details`;
    connection.query(sql1, (err, results) => {
        if (err) {
            console.log(err)
        }
        console.log(JSON.stringify(results));
        id = results[0]['MAX(ID)'] + 1;
        if (id === 0) {
            res.status(500).send("Error adding guest: " + "id is 0");
            return;
        }
        const sql = `INSERT INTO customer_details VALUES(${id}, "${firstName}", "${lastName}", "${gender}", ${age}, "${checkIn}", "${checkOut}")`;
        connection.query(sql, (err, results) => {
            if (err) {
                console.error("Error adding guest:", err);
                res.status(500).send("Error adding guest: " + err.message);
                return;
            }
            console.log("Guest added successfully!");
            res.send("Guest added successfully!");
        });
    });
});

app.post("/room", async (req, res) => {
    // console.log(req.body);
    // return;
    let {
        roomNo,
        FLOOR,
        catagory,
        price,
        availability,
    } = req.body;

    roomNo = parseInt(roomNo);
    FLOOR = parseInt(FLOOR);
    price = parseFloat(price);

    const sql = `INSERT INTO room VALUES(${roomNo}, ${FLOOR}, "${catagory}", ${price}, "${availability}")`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error adding room:", err);
            res.status(500).send("Error adding room: " + err.message);
            return;
        }
        console.log("Room added successfully!");
        res.send("Room added successfully!");
    });
});

app.post("/employee", async (req, res) => {
    // console.log(req.body);
    // return;
    let {
        employeeID,
        firstName,
        lastName,
        gender,
        age,
        phoneNo,
        mailId,
        joiningdate,
        salary,
        departmentid,
    } = req.body;

    joiningdate = new Date(joiningdate).toISOString().slice(0, 10);
    age = parseInt(age);
    employeeID = parseInt(employeeID);
    departmentid = parseInt(departmentid);
    phoneNo = parseInt(phoneNo);
    salary = parseFloat(salary);

    const sql = `INSERT INTO employee VALUES(${employeeID}, "${firstName}", "${lastName}","${gender}", ${age}, ${phoneNo}, "${mailId}", "${joiningdate}", ${salary}, "${departmentid}")`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error adding employee:", err);
            res.status(500).send("Error adding employee: " + err.message);
            return;
        }
        console.log("Employee added successfully!");
        res.send("Employee added successfully!");
    });
});

app.post("/guests_contact", async (req, res) => {
    let {
        mailId,
        phoneNo,
        aadhar,
    } = req.body;

    phoneNo = parseInt(phoneNo);
    aadhar = parseInt(aadhar);
    
    const sql = `INSERT INTO customer_contact VALUES("${mailId}",${phoneNo}, ${aadhar})`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error adding guest:", err);
            res.status(500).send("Error adding guest contact: " + err.message);
            return;
        }
        console.log("Guest contact added successfully!");
        res.send("Guest contact added successfully!");       
    });
});

app.post("/guests_booking", async (req, res) => {
    let {
        aadhar,
        roomNo,
        ID,
    } = req.body;

    roomNo = parseInt(roomNo);
    aadhar = parseInt(aadhar);
    ID = parseInt(ID);
    
    const sql = `INSERT INTO customer_booking VALUES(${aadhar},${roomNo},${ID} )`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error adding guest:", err);
            res.status(500).send("Error adding guest contact: " + err.message);
            return;
        }
        console.log("Guest Booking added successfully!");
        res.send("Guest Booking added successfully!");       
    });
});

app.post("/guests_bill", async (req, res) => {
    let {
        phoneNo,
        price,
        mailId,
    } = req.body;

    phoneNo = parseInt(phoneNo);
    price = parseInt(price);
    
    const sql = `INSERT INTO customer_bill VALUES(${phoneNo}, ${price},"${mailId}")`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error adding guest bill:", err);
            res.status(500).send("Error adding guest bill: " + err.message);
            return;
        }
        console.log("Guest bill added successfully!");
        res.send("Guest bill added successfully!");       
    });
});

app.post("/room", async (req, res) => {
    // console.log(req.body);
    // return;
    let {
        aadhar,
        roomNo,
        id,
    } = req.body;

    roomNo = parseInt(roomNo);
    aadhar = parseInt(aadhar);
    id = parseInt(id);
    
    const sql = `INSERT INTO room VALUES(${roomNo}, ${aadhar}, ${id})`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error adding room:", err);
            res.status(500).send("Error adding room: " + err.message);
            return;
        }
        console.log("Room added successfully!");
        res.send("Room added successfully!");
    });
});

app.post("/department", async (req, res) => {
    let {
        did,
        dname,
        dhead,
        e_num,
    } = req.body;

    e_num = parseInt(e_num);
    did = parseInt(did);
    
    const sql = `INSERT INTO department VALUES(${did},"${dname}","${dhead}", ${e_num})`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error adding department:", err);
            res.status(500).send("Error adding department: " + err.message);
            return;
        }
        console.log("Department  added successfully!");
        res.send("Department added successfully!");       
    });
});

app.post("/delete-guest", (req, res) => {
    const { id } = req.body;
    const sql = `DELETE FROM customer_details WHERE ID = ${id}`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error deleting guest:", err);
            res.status(500).send("Error deleting guest: " + err.message);
            return;
        }
        console.log("Guest deleted successfully!");
        res.json({ message: "Guest deleted successfully!" });

    });
});

app.post("/delete-room", (req, res) => {
    const { id } = req.body;
    const sql = `DELETE FROM room WHERE ROOM_NO = ${id}`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error deleting room:", err);
            res.status(500).send("Error deleting room: " + err.message);
            return;
        }
        console.log("Room deleted successfully!");
        res.json({ message: "Room deleted successfully!" });

    });
});

app.post("/delete-employee", (req, res) => {
    const { id } = req.body;
    const sql = `DELETE FROM employee WHERE EMP_ID = ${id}`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error deleting employee:", err);
            res.status(500).send("Error deleting employee: " + err.message);
            return;
        }
        console.log("Employee deleted successfully!");
        res.json({ message: "Employee deleted successfully!" });

    });
});

app.post("/delete-guest_contact", (req, res) => {
    const { id } = req.body;
    const sql = `DELETE FROM customer_contact WHERE MAIL_ID = "${id}"`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error deleting Guest Contact :", err);
            res.status(500).send("Error deleting Guest Contact : " + err.message);
            return;
        }
        console.log("Guest Contact deleted successfully!");
        res.json({ message: "Guest Contact deleted successfully!" });

    });
});

app.post("/delete-guest_booking", (req, res) => {
    const { id } = req.body;
    const sql = `DELETE FROM customer_booking WHERE AADHAR = ${id}`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error deleting Guest Booking:", err);
            res.status(500).send("Error deleting Guest Booking: " + err.message);
            return;
        }
        console.log("Guest Booking deleted successfully!");
        res.json({ message: "Guest Booking deleted successfully!" });

    });
});

app.post("/delete-guest_bill", (req, res) => {
    const { id } = req.body;
    const sql = `DELETE FROM customer_bill WHERE PHONE_NO = ${id}`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error deleting Guest Bill:", err);
            res.status(500).send("Error deleting Guest Bill: " + err.message);
            return;
        }
        console.log("Guest Bill deleted successfully!");
        res.json({ message: "Guest Bill deleted successfully!" });

    });
});

app.post("/delete-department", (req, res) => {
    const { id } = req.body;
    const sql = `DELETE FROM department WHERE D_ID = ${id}`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error deleting Department:", err);
            res.status(500).send("Error deleting Department: " + err.message);
            return;
        }
        console.log("Department deleted successfully!");
        res.json({ message: "Department deleted successfully!" });

    });
});
