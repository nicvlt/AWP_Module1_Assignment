const knex =require ("knex");

class service {
  constructor() {
    this.pg = knex({
      client: "pg",
      connection: {
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "p36655922",
        database: "postgres",
        charset: "utf8",
      },
    });
  }

  getCats = (req, res) => {
    this.pg("cats").then((data) => {
      res.json(data);
    });
  };

  getCatByName = (req, res) => {
    const { name_cat } = req.params;
    this.pg("cats")
      .where({ name_cat })
      .then((data) => {
        res.json(data);
      });
  };

  createCat = (req, res) => {
    const { name_cat, age_cat, gender_cat } = req.body;
    this.pg("cats")
      .insert({ name_cat, age_cat, gender_cat})
      .then((data) => {
        console.log(data)
        res.json(data);
      });
  };

  updateCat = (req, res) => {
    const { name_cat, age_cat, gender_cat } = req.body;
    this.pg("cats")
      .where({ name_cat })
      .update({ age_cat, gender_cat })
      .then((data) => {
        res.json(data);
      });
  };

  deleteCat = (req, res) => {
    const { name_cat } = req.params;
    this.pg("cats")
      .where({ name_cat })
      .del()
      .then((data) => {
        res.json(data);
      });
  };
}

module.exports = new service();