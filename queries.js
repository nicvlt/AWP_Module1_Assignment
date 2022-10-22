const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'p36655922',
    port: 5432,
})
const getCats = (request, response) => {
    pool.query('SELECT * FROM cats ORDER BY id_cat ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getCatsById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM cats WHERE id_cat = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createCats = (request, response) => {
    const {
        id_cat, name_cat, age_cat, gender_cat
    } = request.body
    pool.query('INSERT INTO cats (id_cat, name_cat, age_cat, gender_cat) VALUES ($1,$2,$3,$4)', [id_cat, name_cat, age_cat, gender_cat], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(results)
    })
}
const updateCats = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        name_cat, age_cat, gender_cat
    } = request.body
    pool.query(
        'UPDATE cats SET name_cat = $1, age_cat = $2, gender_cat = $3 WHERE id_cat = $4',
        [name_cat, age_cat, gender_cat, id],
        (error, results) => {
            if (error) {
                throw error
            }
            var resultUpdate = true
            if(results.rowCount==0){
                resultUpdate = false
            }
            response.status(200).send({"success": resultUpdate})
            }
    )
}
const deleteCats = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM cats WHERE id_cat = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        var resultDelete = true
        if(results.rowCount==0){
            resultDelete = false
        }
        response.status(200).send({"success": resultDelete})
    })
}
module.exports = {
    getCats,
    getCatsById,
    createCats,
    updateCats,
    deleteCats,
}