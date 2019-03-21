const bcrypt = require('bcryptjs');

module.exports = {
   register: async (req, res) => {
      const { username, password } = req.body;
      const db = req.app.get('db');
      const result = await db.get_user(username);
      const existingUser = result[0];
      if (existingUser) {
         return res.status(409).json('There is already an account associated with this username. Please log in.');
      }
      const hash = await bcrypt.hash(password, 12);
      const registeredUser = await db.register_user([username, hash]);
      const user = registeredUser[0];
      return res.status(200).json(user);
   },
   login: async (req, res) => {
      const { username, password } = req.body;
      const db = req.app.get('db');
      const foundUser = await db.get_user(username);
      const user = foundUser[0];
      if (!user) {
         return res.status(401).json('Username not found. Please register as a new user.');
      }
      const isAuthenticated = bcrypt.compareSync(password, user.hash);
      if (!isAuthenticated) {
         return res.status(403).json('Incorrect password');
      }
      return res.status(200).json(user);
   }
};
