import { pool } from "../database/config.js"

const getCategory = (req, res) => {
  try {
    pool.query("SELECT * FROM category ORDER BY id_category ASC", (error, results) => {
      if (error) {
        throw error
      }
      res.send({ status: "OK", data: results.rows });
    })
  } catch (error) {
      res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

const getIdCategory = (req, res) => {
    const {
      params: { id },
    } = req;
    if (!id) {
      res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':CategoryID' can not be empty" },
        });
    }
    try {
      pool.query(`SELECT sub_category.id_subcategory, category.name_category, sub_category.name_subcategory FROM category INNER JOIN sub_category ON category.id_category=sub_category.category WHERE id_category=${id}`, (error, results) => {
        if (error) {
          throw error
        }
        res.send({ status: "OK", data: results.rows });
      })
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}


export { getCategory, getIdCategory };