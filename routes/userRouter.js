const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');

router.param('id', userController.checkId);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
