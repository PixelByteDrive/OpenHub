// Express
const express = require("express");
const app = express();

// Middleware Modules
const corsGate = require("cors-gate");
const cors = require("cors");
const helmet = require("helmet");

// Files
const path = require("path");

// Static Files
app.use("/assets", express.static(path.join(__dirname, "/public")));

// Helmet Setup
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

if (process.env.NODE_ENV === "productionw/cors") {
  // CORS
  app.use(corsGate.originFallbackToReferrer());

  app.use(
    cors({
      origin: [process.env.APP_URL],
      credentials: true,
    })
  );

  app.use(
    corsGate({
      strict: true,
      allowSafe: true,
      origin: process.env.APP_URL,
      failure: (req, res, next) => {
        return res.status(403).json({
          success: false,
          errors: ["Not in CORS Whitelist"],
        });
      },
    })
  );
} else {
  app.use(cors());
}

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

// Routers Setup
app.use("/", router);
// 500 Handling
app.use((exErr, req, res, next) => {
  return res.status(500).send("500: Internal Server Error");
});

// 404 Handling
app.use((req, res) => {
  res.status(404).send("This is not the page you are looking for");
});

app.listen(process.env.PORT || 5500, () => {
  console.log(`Hub Listening on port: ${process.env.PORT || 5500}`);
});
