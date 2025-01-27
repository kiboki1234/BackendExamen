const Cellphone = require('../models/Cellphone');

exports.getAllCellphone = async (req, res) => {
    try {
      const messages = await Cellphone.find().sort({ createdAt: -1 });
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los mensajes', error: error.message });
    }
  };