exports.checkId = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid id',
    });
  }
  next();
};

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route has not been defined just yet.',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route has not been defined just yet.',
  });
};

exports.getUserById = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route has not been defined just yet.',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route has not been defined just yet.',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route has not been defined just yet.',
  });
};
