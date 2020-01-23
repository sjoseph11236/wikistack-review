// import the Sequelize module
const Sequelize = require('sequelize');
// connect to postgres database
// add the logging prop with false to elimainate the SQL command text
const db = new Sequelize('postgres://localhost:5432/wikistack', { 
  logging: false 
});

const Page = db.define('page', {
  title: { 
    type: Sequelize.STRING,
  }, 
  slug:{ 
    type: Sequelize.STRING,
  }, 
  content: { 
    type: Sequelize.TEXT,
  },
  status: { 
    type: Sequelize.ENUM('open', 'closed')
  }
});


const User = db.define('user', {
  name: { 
    type: Sequelize.STRING,
  },
  email: { 
    type: Sequelize.STRING,
  }
});

module.exports = {
  db
};