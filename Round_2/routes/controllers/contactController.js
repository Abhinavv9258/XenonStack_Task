const Contact = require('../../models/contact');

const contactController = {
  submitContactForm: async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const newContact = new Contact({ name, email, message });
      await newContact.save();
      res.json({ success: true, message: 'Contact form submitted!' });
      // res.send('Contact form submitted!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = contactController;
