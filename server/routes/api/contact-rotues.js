const router = require("express").Router();

const {
  getAllContacts, 
  getContactById,
  createContact,
  updateContactById,
  deleteContactById,
} = require("../../controllers/contact-controller");

// route for getting all contacts
router.route("/").get(getAllContacts);
// route for getting a contact by its id
router.route("/:id").get(getContactById);

// route for creating a new contact
router.route("/").post(createContact);

// route for updating a contact by its id
router.route("/:id").put(updateContactById);

// route for deleting a contact by its id
router.route("/:id").delete(deleteContactById);

module.exports = router;