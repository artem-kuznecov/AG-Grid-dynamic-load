const { Sequelize, QueryTypes } = require('sequelize')
const { sqlErrorHandler } = require('../utils/errorHandler')

const sequelize = new Sequelize(process.env.DATABASE)

// получить все записи из таблицы employees
async function getAllEmployees(req, res) {
    // частичная подгрузка
    if (req.query._start && req.query._end) {
        sequelize.query(`
            SELECT firstname, lastname, birthdate, gender FROM employees 
            OFFSET ${req.query._start < 0 ? 0 : req.query._start} 
            LIMIT ${req.query._end < 0 ? 0 : req.query._end};
        `)
        .then(response => res.status(200).send(response[0]))
        .catch(e => sqlErrorHandler(e, res))
        return
    }

    // краткий вывод (в виде [id, Имя, Фамилия])
    if (Object.hasOwn(req.query, 'short')) {
        sequelize.query(`SELECT id, firstname, lastname FROM employees` , {type: QueryTypes.SELECT})
        .then(response => {
            return res.status(200).send(response)
        })
        .catch(e => sqlErrorHandler(e, res))
        return
    }    

    try {
        sequelize.query(`SELECT firstname, lastname, birthdate, gender FROM employees` , {type: QueryTypes.SELECT})
        .then(response => {
            return res.status(200).send(response)
        })
        // catch
    } catch (e) {
        console.log('Ошибка при попытке запроса:', e)
        return res.status(500).send({error: 'Внутренняя ошибка сервера'})
    }
}

// получить запись с определенным идентификатором из таблицы employees
async function getOneEmployee(req, res) {
    if (!Number(req.params.id)) return res.status(400).send({error: 'Проверьте правильность введенных данных'})
    else try{
        await sequelize.query(`SELECT * FROM employees WHERE id = '${req.params.id}'`, {type: QueryTypes.SELECT})
        .then(response => {
            return res.status(200).send(response[0])
        })
    } catch (e) {
        console.log('Ошибка при попытке запроса:', e)
        return res.status(500).send({error: 'Внутренняя ошибка сервера'})
    }
}

// создать новую запись в таблице employees
async function createOneEmployee(req, res) {
    try {
        // идентификатор новой записи (формируется путем прибавления единицы к максимальному из существующих)
        newId = await sequelize.query('SELECT * FROM employees ORDER BY id DESC LIMIT 1;')
        newId = newId[0][0].id + 1

        await sequelize.query(`
            INSERT INTO employees VALUES (
                '${newId}', 
                '${req.body.firstname}', 
                '${req.body.lastname}', 
                '${req.body.birthdate}', 
                '${req.body.gender}'                
                );
        `).then(() => {
            return res.status(201).send({success: true, id: newId})
        })
    } catch (e) {
        console.log('Ошибка при попытке запроса:', e)
        return res.status(500).send({error: 'Внутренняя ошибка сервера'})
    }
}
// изменить существующую запись с определенным идентификатором в таблице employees
async function updateOneEmployee(req, res) {
    try {
        let oldData // сохранение старых данных записи с полученным идентификатором
        await sequelize.query(`SELECT * FROM employees WHERE id = '${req.params.id}';`).then(response => {
            if (response[0][0]) oldData = response[0][0]
        })

        await sequelize.query(`UPDATE employees SET 
            firstname='${req.body.firstname || oldData.firstname}', 
            lastname='${req.body.lastname || oldData.lastname}', 
            birthdate='${req.body.birthdate || oldData.birthdate}', 
            gender='${req.body.gender || oldData.gender}' 
            WHERE id = '${req.params.id}';
        `).then(() => {
            return res.status(200).send({success: true, updated: req.params.id})  // в поле id возвращается идентификатор измененной записи
        })
    } catch (e) {
        console.log('Ошибка при попытке запроса:', e)
        return res.status(500).send({error: 'Внутренняя ошибка сервера'})
    }
}

// удалить существующую запись с определенным идентификатором в таблице employees
async function deleteOneEmployee(req, res) {
    try {
        await sequelize.query(`DELETE FROM employees WHERE id = '${req.params.id}';`)
        .then(response => {
            // response[1].rowCount возвращает количество найденных строк, удовлетворяющих условию
            if (response[1].rowCount > 0) res.status(200).send({success: true})
            else return res.status(404).send({error: 'Запись с таким идентификатором не найдена'})
        })
    } catch (e) {
        console.log('Ошибка при попытке запроса:', e)
        return res.status(500).send({error: 'Внутренняя ошибка сервера'})
    }
}

// получить все записи из таблицы employees в виде [id, Имя, Фамилия]
async function getAllEmployeesShort(req, res) {
    
}

module.exports = { getAllEmployees, getOneEmployee, createOneEmployee, updateOneEmployee, deleteOneEmployee, getAllEmployeesShort }