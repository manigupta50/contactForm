import { contactFormSchema } from "./contactform.schema.js";
import mongoose from "mongoose";

const contactFormModel = mongoose.model("contactForm", contactFormSchema);

export class ContactFormRepository {
    async createContact(details) {
        try {
            const newContact = new contactFormModel({
                firstName: details.firstName,
                lastName: details.lastName,
                email: details.email,
                country: details.country,
                phone: details.phone,
                about: details.about
            });
            return await newContact.save();
        } catch(err) {
            console.log(err);
        }
    }

    async updateContact(id, detailsToUpdate) {
        try {
            const contact = await contactFormModel.findByIdAndUpdate(id, detailsToUpdate, {new: true});
            await contact.save();
            return contact;
        } catch(err) {
            console.log(err);
        }
    }

    async deleteContact(id) {
        try {
            const contact = await contactFormModel.findByIdAndDelete(id);
            return contact;
        } catch(err) {
            console.log(err);
        }
    }

    async getByIdContact(id) {
        try {
            const contact = await contactFormModel.findById(id);
            return contact;
        } catch(err) {
            console.log(err);
        }
    }

    async getAllContact() {
        try {
            const contact = await contactFormModel.find();
            return contact;
        } catch(err) {
            console.log(err);
        }
    }
}