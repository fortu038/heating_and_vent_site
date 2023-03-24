const Contact = require("../models/Contact");

const getAllContacts = async (req, res) => {
  try {
    const getAllQuery = await Contact.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  }
  catch(err) {
    res.status(400).json({ message: "No contacts found!" });
  }
};

const getContactById = async (req, res) => {
  try {
    const getByIdQuery = await Contact.findById(req.params.id)

    if(!getByIdQuery) {
      res.status(400).json({ message: "No contact found with that ID!" });
    }
    else {
      res.status(200).json({ result: "success", payload: getByIdQuery });
    }
  }
  catch(err) {
    res.status(400).json({ message: "An error occured during search, please try again later." });
  }
};

const createContact = async (req, res) => {
  try {
    const createQuery = await Contact.create(req.body);
    res.status(200).json({result: "success", payload: createQuery});
  }
  catch(err) {
    res.status(400).json({ message: "Unable to create a contact!" });
  }
};

const updateContactById = async (req, res) => {
  try {
    const updateByIdQuery = await Contact.findOneAndUpdate(
      {_id: req.params.id},
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if(!updateByIdQuery) {
      res.status(400).json({ message: "Cannot update, no contact found with that ID!" });
    }
    else {
      res.status(200).json({ result: "success", payload: updateByIdQuery });
    }
  }
  catch(err) {
    console.log(err);
    res.status(400).json({ message: "An error occured while updating contact, please try again later." });
  }
};

const deleteContactById = async (req,res) => {
  try {
    const delByIdQuery = await Contact.findOneAndDelete({ _id: req.params.id });

    if(!delByIdQuery) {
      res.status(400).json({ message: "Cannot delete, no contact found with that ID!" });
    }
    else {
      res.status(200).json({ result: "success", payload: delByIdQuery });
    }
  }
  catch(err) {
    res.status(400).json({ message: "An error occured during deletion, please try again later." });
  }
};

module.exports = {
  getAllContacts, 
  getContactById,
  createContact,
  updateContactById,
  deleteContactById,
};