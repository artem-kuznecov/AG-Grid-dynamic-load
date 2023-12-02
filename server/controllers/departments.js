const { Sequelize } = require('sequelize'),
      sequelize = new Sequelize(process.env.DATABASE),
      Department = require('../models/department')

// ~ получить все записи из таблицы departments
async function getAllDepartments(req, res) {
    try {
        await Department.findAll({
            attributes: ['id', 'name', 'foundation_date', 'about_text', 'address', 'director_id']
        }).then(response => {
            return res.status(200).send(response)
        })
    } catch (e) {
        console.log('Ошибка при попытке запроса:', e)
        return res.status(500).send({error: 'Внутренняя ошибка сервера'})
    }
    
}

// ~ получить запись с определенным идентификатором из таблицы departments
async function getOneDepartment(req, res) {
    if (!Number(req.params.id)) return res.status(400).send({error: 'Проверьте правильность введенных данных'})
    else try {
        await Department.findOne({
            attributes: ['id', 'name', 'foundation_date', 'about_text', 'address', 'director_id'],
            where: {
                id: req.params.id
            }
        }).then(response => {
            return res.status(200).send(response)
        })
    } catch (e) {
        console.log('Ошибка при попытке запроса:', e)
        return res.status(500).send({error: 'Внутренняя ошибка сервера'})
    }
}

// ~ создать новую запись в таблице departments
async function createOneDepartment(req, res) {
    let newId // идентификатор новой записи (формируется путем прибавления единицы к максимальному из существующих)
    try {
        newId = await sequelize.query('SELECT * FROM departments ORDER BY id DESC LIMIT 1;')
        newId = newId[0][0].id + 1

        await Department.create(
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
        console.log('Ошибка при попытке запроса:', e)
        return res.status(500).send({error: 'Внутренняя ошибка сервера'})
    }
}

// ~ изменить существующую запись с определенным идентификатором в таблице departments
async function updateOneDepartment(req, res) {
    if (!Number(req.params.id)) return res.status(400).send({error: 'Проверьте правильность введенных данных'})
    else {
        await Department.update(
            {
                name: req.body.name,
                about_text: req.body.about,
                foundation_date: req.body.foundation_date,
                address: req.body.address,
                director_id: req.body.director
            },
            {
                where: {
                    id: req.params.id,
                }
            }
        ).then(response => {
            if (response[0] == 1) res.status(200).send({success: true, updated: req.params.id}) // в поле id возвращается идентификатор измененной записи
            else return res.status(404).send({error: 'Запись с таким идентификатором не найдена'})
        })
    }
}

// ~ удалить существующую запись с определенным идентификатором в таблице departments
async function deleteOneDepartment(req, res) {
    if (!Number(req.params.id)) return res.status(400).send({error: 'Проверьте правильность введенных данных'})
    else {
        await Department.destroy({
            where: {
                id: req.params.id
            }
        }).then(response => {
            if (response == 1) res.status(200).send({success: true})
            else return res.status(404).send({error: 'Запись с таким идентификатором не найдена'})
        })
    }
}

module.exports = { getAllDepartments, getOneDepartment, createOneDepartment, updateOneDepartment, deleteOneDepartment }