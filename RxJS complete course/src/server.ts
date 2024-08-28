import express, { Application } from "express";
// import apiRoutes from "./routes/api";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  const markup = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>

        <h1>Hello, World!</h1>
        <p>Just simple HTML file.</p>

      </body>
    </html>
  `;

  res.send(markup);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
