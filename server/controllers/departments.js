const { Sequelize, QueryTypes } = require('sequelize')
const Department = require('../models/department')
const { sqlErrorHandler } = require('../utils/errorHandler')

const sequelize = new Sequelize(process.env.DATABASE)      

// получить все записи из таблицы departments
async function getAllDepartments(req, res) {
    // вывод отделов компаниии с указанием фамилии и имени директора отдела
    if (Object.hasOwn(req.query, 'join')) {
        sequelize.query(`
            SELECT departments.name, departments.foundation_date, departments.about_text, departments.address, employees.firstname, employees.lastname 
            FROM departments 
            LEFT JOIN employees 
            ON departments.director_id = employees.id;
        `)
        .then(response => {
            return res.status(200).send(response[0])
        })
        return
    }

    // краткий вывод (в виде [id, Название])
    if (Object.hasOwn(req.query, 'short')) {
        sequelize.query(`SELECT id, name FROM departments` , {type: QueryTypes.SELECT})
        .then(response => {
            return res.status(200).send(response)
        })
        .catch(e => sqlErrorHandler(e, res))
        return
    }

    try {
        Department.findAll({
            attributes: ['id', 'name', 'foundation_date', 'about_text', 'address', 'director_id']
        }).then(response => {
            return res.status(200).send(response)
        })
    } catch (e) {
        console.log('Ошибка при попытке запроса:', e)
        return res.status(500).send({error: 'Внутренняя ошибка сервера'})
    }
}

// получить запись с определенным идентификатором из таблицы departments
async function getOneDepartment(req, res) {
    if (!Number(req.params.id)) {
        return res.status(400).send({error: 'Проверьте правильность введенных данных'})
    }

    try {
        Department.findOne({
            attributes: ['id', 'name', 'foundation_date', 'about_text', 'address', 'director_id'],
            where: {
                id: req.params.id
            }
        }).then(response => {
            return res.status(200).send(response)
        })
    } catch (e) {
        sqlErrorHandler(e, res)
    }
}

// создать новую запись в таблице departments
async function createOneDepartment(req, res) {
    let newId // идентификатор новой записи (формируется путем прибавления единицы к максимальному из существующих)
    try {
        newId = await sequelize.query('SELECT * FROM departments ORDER BY id DESC LIMIT 1;')
        newId = newId[0][0].id + 1

        Department.create(
            {
                id: newId,
                name: req.body.name,
                foundation_date: new Date(Date.now()),
                about_text: req.body.about_text,
                address: req.body.address,
                director_id: req.body.director
            },
            {
                fields: ['id', 'name', 'foundation_date', 'about_text', 'address', 'director_id'],
                returning: ['id'],
                isNewRecord: true
            }
        ).then(() => {
            return res.status(201).send({success: true, id: newId}) // в поле id возвращается идентификатор созданной записи
        })
    } catch (e) {
        sqlErrorHandler(e, res)
    }
}

// изменить существующую запись с определенным идентификатором в таблице departments
async function updateOneDepartment(req, res) {
    if (!Number(req.params.id))
        return res.status(400).send({error: 'Проверьте правильность введенных данных'})

    try {
        let oldData // сохранение старых данных записи с полученным идентификатором
        await sequelize.query(`SELECT * FROM departments WHERE id = '${req.params.id}';`).then(response => {
            if (response[0][0]) oldData = response[0][0]
        })

        await sequelize.query(`UPDATE departments SET 
            name='${req.bodyname || oldData.name}', 
            about_text='${req.body.about_text || oldData.about_text}', 
            address='${req.body.address || oldData.address}', 
            director_id='${req.body.director_id || oldData.director_id}' 
            WHERE id = '${req.params.id}';
        `).then(() => {
            return res.status(200).send({success: true, updated: req.params.id})  // в поле id возвращается идентификатор измененной записи
        })
    } catch (e) {
        sqlErrorHandler(e, res)
    }
}

// удалить существующую запись с определенным идентификатором в таблице departments
async function deleteOneDepartment(req, res) {
    if (!Number(req.params.id)) 
        return res.status(400).send({error: 'Проверьте правильность введенных данных'})
    try {
        Department.destroy({
            where: {
                id: req.params.id
            }
        }).then(response => {
            if (response == 1) res.status(200).send({success: true})
            else return res.status(404).send({error: 'Запись с таким идентификатором не найдена'})
        })
    } catch (e) {
        sqlErrorHandler(e, res)
    }
}

module.exports = { getAllDepartments, getOneDepartment, createOneDepartment, updateOneDepartment, deleteOneDepartment }