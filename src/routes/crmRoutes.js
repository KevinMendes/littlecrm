import {
    addNewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../Controllers/crmController'


const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(` request de ${req.originalUrl}`)
            console.log(` request type : ${req.method}`)
            next()
        }, getContacts)

        .post(addNewContact);

    app.route('/contact/:contactId')
        // Récupère un contact avec l'ID via la méthode de mon Controller
        .get(getContactWithID)

        // Mise à jour d'un contact
        .put(updateContact)
        // Suppression d'un contact
        .delete(deleteContact)
}


export default routes;