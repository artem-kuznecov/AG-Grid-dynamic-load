export const createRow = (e) => {
    const data = {
        name: e.target[0].value,
        about_text: e.target[1].value,
        director: e.target[2].value,
        address: e.target[3].value,
    }
    console.log(data);
    return fetch(process.env.REACT_APP_DEPARTMENTS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteRow = (e) => {
    return fetch(process.env.REACT_APP_DEPARTMENTS_URL + `${e.target[0].value}`, {
        method: 'DELETE'
    })
}

export const updateRow = (e) => {
    let data = {}

    if (e.target[1].value) data.name = e.target[1].value
    if (e.target[2].value) data.about_text = e.target[2].value
    if (Number(e.target[3].value)) data.director_id = e.target[3].value 
    if (e.target[4].value) data.address = e.target[4].value

    console.log(data)

    return fetch(process.env.REACT_APP_DEPARTMENTS_URL + `${e.target[0].value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}