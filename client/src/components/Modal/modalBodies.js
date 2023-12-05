import { useState } from 'react'
import { Button, ModalHeader, ModalBody, Form, Input } from 'reactstrap'
import { createRow, updateRow, deleteRow} from '../mixins/CRUD'

const formSubmit = (e, action, toggle) => {
    e.preventDefault()
    action(e)
    toggle()
    return window.location.reload()
}

export const CreateModal = ({directors, toggle}) => {
    return (
        <>
            <ModalHeader toggle={toggle}>Создание новой записи</ModalHeader>
            <ModalBody>
                <Form onSubmit={e => formSubmit(e, createRow, toggle)}>
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
        </>
    )
}

export const UpdateModal = ({directors, departments, toggle}) => {
    const [visibility, setVisibility] = useState(false)
    return (
        <>
            <ModalHeader toggle={toggle}>Изменение записи</ModalHeader>
            <ModalBody>
                <Form onSubmit={e => formSubmit(e, updateRow, toggle)}>
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
        </>
    )
}

export const DeleteModal = ({departments, toggle}) => {
    return (
        <>
            <ModalHeader toggle={toggle}>Удаление записи</ModalHeader>
            <ModalBody>
                <Form onSubmit={e => formSubmit(e, deleteRow, toggle)}>
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
        </>
    )
}
