const express = require('express');
const router = express.Router();
const { login } = require('../controladores/autenticacionControlador');

// POST /api/auth/login
router.post('/login', login);

module.exports = router;
