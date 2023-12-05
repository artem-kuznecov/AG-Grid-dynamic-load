import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, Input } from 'reactstrap'
import { createRow, updateRow, deleteRow} from '../components/mixins/CRUD'

function ModalAdd(args) {
    const [btnColor, setBtnColor] = useState(null)
    const [visibility, setVisibility] = useState(false)

    const [createModal, setCreateModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)

    const [directors, setDirectors] = useState([
        {firstname: 'Иван', lastname: 'Иванов', id: 301}
    ])

    const [departments, setDepartments] = useState([
        {name: 'name name', id: 5}
    ])

    const toggle = () => {
        setVisibility(false)
        if (args.type === 'create') return setCreateModal(!createModal)
        if (args.type === 'delete') return setDeleteModal(!deleteModal)
        if (args.type === 'update') return setUpdateModal(!updateModal)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        switch (args.type) {
            case 'create':
                createRow(e)
                break
            case 'delete':
                deleteRow(e)
                break
            case 'update':
                    updateRow(e)
                    break
            default:
                break
        }
        toggle()
        return window.location.reload()
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_EMPLOYEES_URL + '?short')
        .then(response => response.json())
        .then(json => setDirectors(json))

        fetch(process.env.REACT_APP_DEPARTMENTS_URL + '?short')
        .then(response => response.json())
        .then(json => setDepartments(json))
        switch (args.type) {
            case 'create':
                setBtnColor('primary')
                break
            case 'delete':
                setBtnColor('danger')
                break
            case 'update':
                setBtnColor('warning')
                break
            default:
                break
        }
    }, [args.type])

    return (
        <div className='content' style={{ marginRight: '3rem' }}>
            <Button color={btnColor} onClick={toggle}>
                {args.title}
            </Button>
            <Modal id='create' isOpen={createModal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Создание новой записи</ModalHeader>
                <ModalBody>
                <Form onSubmit={e => formSubmit(e)}>
                    <Input
                        id="name"
                        placeholder="Название отдела"
                        type="text"
                    />
                    <br/>
                    <Input 
                        id='about_text'
                        placeholder='Опишите сферу деятельности нового отдела'
                        type='textarea'
                        style={{ padding: 10 }}
                    />
                    <br />
                    <Input 
                        id='director'
                        type='select'
                    >
                        <option hidden defaultValue>Кто директор отдела?</option>
                        {directors.map((director) => {
                            return (
                                <option value={director.id} key={director.id}>{director.firstname} {director.lastname}</option>
                            )
                        })}
                    </Input>
                    <br/>
                    <Input id='address' placeholder='Адрес' type='text' />
                    <Button type='submit'>Создать</Button>
                </Form>
                </ModalBody>
            </Modal>

            <Modal id='delete' isOpen={deleteModal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Удаление записи</ModalHeader>
                <ModalBody>
                <Form onSubmit={e => formSubmit(e)}>
                    <Input 
                        id='director'
                        type='select'
                    >
                        <option hidden defaultValue>Выберите отдел, который хотите удалить</option>
                        {departments.map((department) => {
                            return (
                                <option value={department.id} key={department.id}>{department.name}</option>
                            )
                        })}
                    </Input>
                    <br/>
                    <Button type='submit'>Удалить</Button>
                </Form>
                </ModalBody>
            </Modal>

            <Modal id='update' isOpen={updateModal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Изменение записи</ModalHeader>
                <ModalBody>
                <Form onSubmit={e => formSubmit(e)}>
                    <Input 
                        id='department'
                        type='select'
                        onChange={() => setVisibility(!visibility)}
                    >
                        <option hidden defaultValue>Какой отдел хотите изменить?</option>
                        {departments.map((department) => {
                            return (
                                <option value={department.id} key={department.id}>{department.name}</option>
                            )
                        })}
                    </Input>
                    <br/>
                    <section id='form-block' style={{ display: visibility ? 'block' : 'none' }}>
                        <Input
                            id="name"
                            placeholder="Название отдела"
                            type="text"
                        />
                        <br/>
                        <Input 
                            id='about_text'
                            placeholder='Опишите новый отдел одним параграфом'
                            type='textarea'
                            style={{ padding: 10 }}
                        />
                        <br />
                        <Input 
                            id='director'
                            type='select'
                        >
                            <option hidden defaultValue>Кто директор отдела?</option>
                            {directors.map(director => {
                                return (
                                    <option value={director.id}>{director.firstname} {director.lastname}</option>
                                )
                            })}
                        </Input>
                        <br/>
                        <Input id='address' placeholder='Адрес' type='text' />
                    </section>
                    <Button type='submit'>Внести изменения</Button>
                </Form>
                </ModalBody>

            </Modal>
        </div>
    )
}

export default ModalAdd