import { pool } from "../database/config.js"

const getContents = (req, res) => {
    const { recent, trend, limit, category } = req.query
    if(recent) {
        try {
            pool.query(`SELECT contents.*, sub_category.name_subcategory, category.name_category FROM contents INNER JOIN sub_category ON contents.subcategory=sub_category.id_subcategory INNER JOIN category ON category.id_category=sub_category.category ORDER BY created_at DESC LIMIT ${recent}`, (error, results) => {
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
    } else if(trend) {
        try {
          pool.query(`SELECT contents.*, sub_category.name_subcategory, category.name_category FROM contents INNER JOIN sub_category ON contents.subcategory=sub_category.id_subcategory INNER JOIN category ON category.id_category=sub_category.category ORDER BY likes DESC LIMIT ${trend}`, (error, results) => {
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
    } else if(limit) {
        try {
          pool.query(`SELECT contents.*, sub_category.name_subcategory, category.name_category FROM contents INNER JOIN sub_category ON contents.subcategory=sub_category.id_subcategory INNER JOIN category ON category.id_category=sub_category.category LIMIT ${limit}`, (error, results) => {
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
    // else if(category && limit) {
    //     try {
    //       pool.query('(SELECT contents.*, sub_category.name_subcategory, category.name_category FROM category INNER JOIN sub_category ON category.id_category=sub_category.category INNER JOIN contents ON contents.subcategory=sub_category.id_subcategory WHERE name_category=$1) LIMIT $2', [category, limit], (error, results) => {
    //                  //SELECT contents.*, sub_category.name_subcategory, category.name_category FROM category INNER JOIN sub_category ON category.id_category=sub_category.category INNER JOIN contents ON contents.subcategory=sub_category.id_subcategory WHERE name_category='People' LIMIT 2
    //         if (error) {
    //           throw error
    //       }
    //       res.send({ status: "OK", data: results.rows });
    //       })
    //   } catch (error) {
    //       res
    //       .status(error?.status || 500)
    //       .send({ status: "FAILED", data: { error: error?.message || error } });
    //   }
    // } 
    else {
        try {
            pool.query("SELECT contents.*, sub_category.name_subcategory, category.name_category FROM contents INNER JOIN sub_category ON contents.subcategory=sub_category.id_subcategory INNER JOIN category ON category.id_category=sub_category.category ORDER BY id_contents ASC", (error, results) => {
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
    
}

const getIdContents = (req, res) => {

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
      pool.query(`SELECT contents.*, sub_category.name_subcategory, category.name_category FROM contents INNER JOIN sub_category ON contents.subcategory=sub_category.id_subcategory INNER JOIN category ON category.id_category=sub_category.category WHERE id_contents=${id}`, (error, results) => {
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


export { getContents, getIdContents };