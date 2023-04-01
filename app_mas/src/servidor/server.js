const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'usuarios'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa con la base de datos!');
});

// Conecta a la base de datos
app.post('/registro', (req, res) => {
  const { nombre, correo, contrasena, edad, plataformas} = req.body;
  const query = 'INSERT INTO users (nombre, correo, contrasena, edad, plataformas) VALUES (?, ?, ?, ?, ?)';
  const values = [nombre, correo, contrasena, edad, JSON.stringify(plataformas),];
  connection.query(query, values, (err, result) => {
    if (err) {
      console.log('Error al agregar usuario', err);
      res.status(500).send('Error al agregar usuario');
      return;
    }
    console.log('Usuario agregado con éxito');
    res.status(200).send('Usuario agregado con éxito');
  });
});


//Verificar usuarios
app.post('/login', (req, res) => {
  const { correo, contrasena } = req.body;
  const query = 'SELECT * FROM users WHERE correo = ? AND contrasena = ?';
  const values = [correo, contrasena];
  connection.query(query, values, (err, result) => {
    if (err) {
      console.log('Error al buscar usuario', err);
      res.status(500).send('Usuario no registrado');
      return;
    }
    if (result.length === 0) {
      console.log('Usuario no encontrado');
      res.status(401).send('Correo electrónico o contraseña incorrectos');
      return;
    }
    console.log('Usuario encontrado con exito');
    res.status(200).json({ message: "El usuario fue encontrado con exito,", redirect: "/principal" });
  });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

module.exports = connection;