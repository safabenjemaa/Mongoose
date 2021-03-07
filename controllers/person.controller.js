const Contact = require("../models/Person");

exports.postPerson = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    if (!req.body.email) {
      res.status(400).send({ message: "email is required check again" });
      return;
    }
    const user = await Contact.findOne({ email: req.params.email });
    if (user) {
      res.status(400).send({ message: "email already existe" });
      return;
    }
    const response = await newContact.save();
    res.send({ response: response, message: "user is saved" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "can not save it " });
  }
};

exports.FindAllPerson = async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ response: result, message: "getting result Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "can't get persons" });
  }
};

exports.FindOnePersonByID = async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.send({ response: result, message: "getting result Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "there is no person with this id" });
  }
};
exports.DeletePersonByID = async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ response: "person deleted" })
      : res.send({ message: "there is no person with this id" });
  } catch (error) {
    console.log(error);
    res.send({ message: "not deleted" });
  }
};

exports.UpdatePerson = async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ message: "updated" })
      : res.send({ message: "already updated" });
  } catch (error) {
    res.status(400).send({ message: "not updated" });
  }
};
