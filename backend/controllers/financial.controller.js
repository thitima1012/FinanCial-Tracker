const Financial = require("../models/financial.model");

//create a new Financial record
exports.create = async (req, res) => {
    const {userId, date, description, amount, category, paymentMethod} = req.body;
    const newRecord = {
      userId,
      date,
      description,
      amount,
      category,
      paymentMethod,
    };
    await Financial.create(newRecord).then((data)=>{
        res.send(data);
    }).catch((error)=>{
        res.status(500).send({message: error.message || "Some error occured while saving the financial record",
        });
    })
}

//Retrieve
exports.findAll = async (req, res) => {
    await Financial.findAll().then((data) => {
        res.send(data);
    }).catch((error) => {
        resizeBy.status(500).send({
            message: error.message || "Some error occured while saveing financial record",
    });
    });
}

//Retrieve all financial records by User Id
exports.findAllByUserId = async (req, res) => {
    const userId = req.params.userId;
    // Select = from Financial Where userId = xxx
    await Financial.findAll({ where: { userId: userId} }).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.status(500).send({
        message:
        error.message || "Some error occured while saveing financial record",
    });
});
}

//Find a single financial with an id
exports.findOne = anync (req, res) => {
    
}

//Update a financial record by id
exports.update = async (req, res) =>{
    const id = req.params.id;
    console.log(id, req.body);
    await Financial.update(req.body, {
      where: {
        id: id,
      },
    })
      .then((num) => {
        console.log(num);
        if (num === 1) {
          res.send({ message: "Financial was update successfully" });
        } else {
          res.send({
            message:
              "Cannot update financial with id=" +
              id +
              ". Maybe financial record id was not found.",
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Some error occured while updating the financial record",
        });
      });
}

//delete a financial record 
exports.delete = async (req, res) => {
    const id = req.params.id;
    console.log(id, req.body);
    await Financial.destroy({ where: {id: id,},})
      .then((num) => {
        console.log(num);
        if (num === 1) {
          res.send({ message: "Financial was deleted successfully" });
        } else {
          res.send({
            message:
              "Cannot delete financial with id=" +
              id +
              ". Maybe financial record id was not found.",
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Some error occured while deleting the financial record",
        });
      });
}