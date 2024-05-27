import { ContactFormRepository } from "./contactform.repository.js"

export class ContactFormController {

    constructor() {
        this.contactFormRepository = new ContactFormRepository();
    }

    async createContact(req, res) {
        try {
            // const { firstName, lastName, email, country, phone, about } = req.body;
            const result = await this.contactFormRepository.createContact(req.body);
            // console.log(result);
            if(result) {
                res.status(201).json({ success: true, details: result});
            } else {
                res.status(400).json({ success: false, message: "Contact creation failed."});
            }
        } catch(err) {
            console.log(err);
        }
    }

    async updateContact(req, res) {
        try {
            const id = req.params.id;
            // console.log("id: ", id);
            const result = await this.contactFormRepository.updateContact(id, req.body);
            if(result) {
                res.status(200).json({ success: true, details: result});
            } else {
                res.status(400).json({ success: false, message: "Contact updation failed."});
            }
        } catch(err) {
            console.log(err);
        }
    }

    async deleteContact(req, res) {
        try {
            const id = req.params.id;
            // console.log("id: ", id);
            const result = await this.contactFormRepository.deleteContact(id);
            if(result) {
                res.status(200).json({ success: true, details: result});
            } else {
                res.status(400).json({ success: false, message: "Contact deletion failed."});
            }
        } catch(err) {
            console.log(err);
        }
    }

    async getByIdContact(req, res) {
        try {
            const id = req.params.id;
            // console.log("id: ", id);
            const result = await this.contactFormRepository.getByIdContact(id);
            if(result) {
                res.status(200).json({ success: true, details: result});
            } else {
                res.status(400).json({ success: false, message: "Contact fetching failed."});
            }
        } catch(err) {
            console.log(err);
        }
    }

    async getAllContact(req, res) {
        try {
            const result = await this.contactFormRepository.getAllContact();
            if(result) {
                res.status(200).json({ success: true, details: result});
            } else {
                res.status(400).json({ success: false, message: "Contacts fetching failed."});
            }
        } catch(err) {
            console.log(err);
        }
    }
}