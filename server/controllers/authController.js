const jwt = require("jsonwebtoken");
const users = [{ username: "taliaa", password: "password" }];

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let persistedUser = users.find(
    u => u.username == username && u.password == password
  );

  if (persistedUser) {
    let token = jwt.sign({ username: username }, "someprivatekey");
    res.status(200).json({ token: token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};
