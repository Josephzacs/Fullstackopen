import agendaService from "../services/agenda";
import { useState} from 'react'

const DeletePerson = ({ personId, setPersons }) => {
    
    console.log("Deleting person with id:", personId);
    const handleDelete = () => {
        window.confirm("Are you sure you want to delete this person?") &&
        agendaService.deletePerson(personId)
            .then(() => {
                console.log(`Person with id ${personId} deleted successfully.`);
                agendaService.getAll()
                    .then(updatedPersons => setPersons(updatedPersons));
            })
            .catch(error => {
                console.error("There was an error deleting the person!", error);
            }); 
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    );
}

export default DeletePerson