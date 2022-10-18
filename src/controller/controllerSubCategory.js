import { pool } from "../database/config.js"

const getSubCategory = (req, res) => {
    try {
      pool.query("SELECT * FROM sub_category ORDER BY id_subcategory ASC", (error, results) => {
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

const getSubIdCategory = (req, res) => {
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
      pool.query('SELECT sub_category.*, category.name_category FROM sub_category INNER JOIN category ON category.id_category=sub_category.category WHERE id_subcategory=$1', [id], (error, results) => {
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

export { getSubCategory, getSubIdCategory };