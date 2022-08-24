import Contact from "../models/contactModel.js";

export const createContact = async (req, res) => {
    try {
        await Contact.create(req.body);
        res.json({
            "message": "Contact Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}