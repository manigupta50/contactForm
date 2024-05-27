import express from "express";
import { ContactFormController } from "./contactform.controller.js";

const router = express.Router();

const contactFormController = new ContactFormController();

router.post("/create", (req, res) => {
    contactFormController.createContact(req, res);
});

router.post("/update/:id", (req, res) => {
    contactFormController.updateContact(req, res);
});

router.delete("/delete/:id", (req, res) => {
    contactFormController.deleteContact(req, res);
});

router.get("/get/:id", (req, res) => {
    contactFormController.getByIdContact(req, res);
});

router.get("/getAll", (req, res) => {
    contactFormController.getAllContact(req, res);
});

export default router;