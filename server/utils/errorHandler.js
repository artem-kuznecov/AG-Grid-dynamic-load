function sqlErrorHandler (e, res) {
    console.log('Ошибка при попытке запроса:', e)
    return res.status(500).send({error: 'Внутренняя ошибка сервера'})
}

module.exports = {sqlErrorHandler}