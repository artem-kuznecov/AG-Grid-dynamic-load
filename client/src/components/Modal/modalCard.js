import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'reactstrap'
import { CreateModal, UpdateModal, DeleteModal } from './modalBodies'

function ActionButton(args) {
    const [open, setOpen] = useState()

    const [directors, setDirectors] = useState([])

    const [departments, setDepartments] = useState([])

    const toggle = () => setOpen(!open)

    useEffect(() => {
        fetch(process.env.REACT_APP_EMPLOYEES_URL + '?short')
        .then(response => response.json())
        .then(json => setDirectors(json))

        fetch(process.env.REACT_APP_DEPARTMENTS_URL + '?short')
        .then(response => response.json())
        .then(json => setDepartments(json))
    }, [args.type])

    return (
        <div className='content' style={{ marginRight: '3rem' }}>
            <Button color={args.color} onClick={toggle}>
                {args.title}
            </Button>
            <Modal id={args.type} isOpen={open} toggle={toggle} {...args}>
                {args.type === 'create' ? 
                <CreateModal toggle={toggle} directors={directors} /> 
                : 
                args.type === 'update' ? 
                <UpdateModal toggle={toggle} directors={directors} departments={departments} /> 
                : 
                <DeleteModal toggle={toggle} departments={departments} />}
            </Modal>
        </div>
    )
}

export default ActionButton