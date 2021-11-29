//Importo modelo de datos
const db = require("../models");
const pedido = db.pedido;
const Op = db.Sequelize.Op; 

const PedidoController = {};


//CRUD endpoints pedidos
//-------------------------------------------------------------------------------------
//GET todos los pedidos de database
PedidoController.getAll = (req, res) => {
    const type = req.query.type;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  
    pedido.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving categories."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET pedidos por ID en database
PedidoController.getById = (req, res) => {
    const id = req.params.id;
  
    pedido.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find pedido with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving categories with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//CREATE un nuevo pedido en database
PedidoController.create = (req, res) => {
    
    if (!req.body.type) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    
    const newpedido = {
      userId: req.body.userId,
      peliculaId: req.body.peliculaId,
      rentDate: new Date(),
      returnDate: new Date(),
    };
  
    
    pedido.create(newpedido)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the newpedido."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE pedidos de database
PedidoController.update = (req, res) => {
    const id = req.params.id;
  
    pedido.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "pedido was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update pedido with id=${id}. Maybe Movie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating pedido with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET pedidos por TYPE en database  
PedidoController.getByType = (req, res) => {
    pedido.findAll({ where: { type: req.params.type } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving categories."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE pedidos por Id de database
PedidoController.delete = (req, res) => {
    const id = req.params.id;
  
    pedido.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "pedido was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete pedido with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete pedido with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE todos los pedidos de database   
PedidoController.deleteAll = (req, res) => {
    pedido.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} categories were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all categories."
        });
      });
  };

module.exports = PedidoController;