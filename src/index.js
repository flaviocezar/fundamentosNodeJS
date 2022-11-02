const express = require("express");

const app = express();

app.use(express.json());

let courses = ["curso1", "curso2", "curso3"];

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log("Query Params", query);
  return response.status(200).json(courses);
});

app.post("/courses", (request, response) => {
  const { curso } = request.body;
  console.log("Body Params", curso);
  courses.push(curso);
  return response.status(201).json(courses);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log("Route Params", id);
  console.log("Type", typeof id);
  return response.status(201).json(courses);
});

app.patch("/courses/:id", (request, response) => {
  return response.status(201).json(courses);
});

app.delete("/courses/:id", (request, response) => {
  return response.status(201).json(courses);
});

app.listen(3333, () => {
  console.log("Servidor online na porta 3333");
});
