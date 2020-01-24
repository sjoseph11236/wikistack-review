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
    allowNull: false
  }, 
  slug:{ 
    type: Sequelize.STRING,
    allowNull: false
  }, 
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: { 
    type: Sequelize.ENUM('open', 'closed')
  }
});


Page.beforeValidate(page => {
  if (!page.slug) {
    page.slug = page.title.replace(/\s/g, "_").replace(/\W/g, "").toLowerCase();
  }
})


const User = db.define('user', {
  name: { 
    type: Sequelize.STRING,
    allowNull: false
  },
  email: { 
    type: Sequelize.STRING,
    allowNull: false,
    validate: { 
      isEmail: true
    }
  }
});

module.exports = {
  db, 
  Page, 
  User
};