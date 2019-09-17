const jwt = require("jsonwebtoken");
const users = [{ username: "taliaa", password: "password" }];

exports.authenticate = (req, res, next) => {
  let headers = req.headers["authorization"];

  if (headers) {
    const token = headers.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded) {
      const username = decoded.username;
      const persistedUser = users.find(u => u.username == username);
      if (persistedUser) {
        next();
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res
        .status(401)
        .json({ error: "You are not logged in! Please login to get access." });
    }
  } else {
    res.status(401).json({
      error: "Authorization header not found!"
    });
  }
};

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let persistedUser = users.find(
    u => u.username == username && u.password == password
  );

  if (persistedUser) {
    let token = jwt.sign({ username: username }, process.env.JWT_SECRET_KEY);
    res.status(200).json({
      status: "success",
      token,
      data: {
        persistedUser
      }
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};
