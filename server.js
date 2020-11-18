const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const membersRoutes = require("./backend/routes/membersRoutes.js")
const cors = require("cors");

// Enable environment variables
dotenv.config();

// Init app
const app = express();

// Use morgan in development mode (display request in console)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Cors-enabled
app.use(cors())
// Body parser
app.use(express.json());

// App routes
app.use("/api/members", membersRoutes);

// Default PORT
const PORT = process.env.PORT || 5000;


// APP listen
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
