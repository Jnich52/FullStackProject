const express = require("express");
const { Client } = require("pg");
const app = express();
const config = require("./config")[process.env.NODE_ENV || "dev"];
const PORT = config.port;

const cors = require("cors");
app.use(express.json());
app.use(cors());
//const PORT = 8000;
//const connectionString = "postgresql://postgres:docker@127.0.0.1:5432/todolist";
const client = new Client({
  connectionString: config.connectionString,
});

client.connect();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use(express.static("FrontEnd"));

app.get("/todolist", (req, res) => {
  client
    .query("SELECT * FROM goals")
    .then((result) => {
      // console.log(result.rows[0])
      res.send(result.rows);
    })
    .catch((e) => console.error(e.stack));
});

app.get("/goal/:id", (req, res) => {
  client
    .query("SELECT * FROM todolist", [req.params.id])
    .then((result) => {
      console.log(result.rows[0]);
      res.send(result.rows);
    })
    .catch((e) => console.error(e.stack));
});

// app.post("/api/students/", (request, response) => {
//   let studentJson = request.body;
//   console.log(studentJson);
//   if (studentJson.age && studentJson.first_name) {
//     client.query(
//       "INSERT INTO students (first_name, age) VALUES ($1, $2)",
//       [studentJson.first_name, studentJson.age],
//       (error, result) => {
//         if (error) {
//           response.status(500).send(error);
//         } else {
//           console.log("response successful", result);
//           response.status(201).send("Success!");
//         }
//       }
//     );
//   } else {
//     response.status(500).send("you need to send an age and a name!!");
//   }
// });

app.listen(PORT, () => {
  console.log(`Our app running on ${PORT}`);
});
