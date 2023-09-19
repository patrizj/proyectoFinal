const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ELEMENTOS PARA CONECTAR CON MONGODB
// SIEMPRE IGUALES. DOS FORMAS.
// MONGOOSE Y MONGO CLIENT. EMPEZAMOS CON MC POR ESTABILIDAD.

const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

// CONEXIÓN CON MONGODB VÍA MONGO CLIENT

MongoClient.connect("mongodb://0.0.0.0:27017", function (err, client) {
  //Si la conexión es correcta, será null.
  if (err != null) {
    console.log(err);
    console.log("No se ha podido conectar con MongoDB");
  } else {
    app.locals.db = client.db("Concesionario");
    console.log(
      "Conexión correcta a la base de datos Concesionario de MongoDB");
  }
});

// Rutas

//GET
app.get("/vehiculos", function (req, res) {
  app.locals.db
    .collection("Vehiculos")
    .find()
    .toArray(function (err, datos) {
      if (err != null) {
        console.log(err);
      } else {
        console.log(datos);
        res.send(datos);
      }
    });
});

app.get("/marcas", function (req, res) {
    app.locals.db
      .collection("Marcas")
      .find()
      .toArray(function (err, datos) {
        if (err != null) {
          console.log(err);
        } else {
          console.log(datos);
          res.send(datos);
        }
      });
  });

  app.get("/modelos", function (req, res) {
    
    app.locals.db
      .collection("Modelos")
      .find({marcaId: req.query.id})
      .toArray(function (err, datos) {
        if (err != null) {
          console.log(err);
        } else {
          res.send(datos);
        }
      });
  });

//POST

app.post("/vehiculos", (req, res) => {
  let nuevo = {
    marca: req.body.marca,
    modelo: req.body.modelo,
    matricula: req.body.matricula,
    matriculacion: req.body.matriculacion,
    imagen: req.body.imagen,
  };

  // AQUÍ GUARDAREMOS ESTE ELEMENTO A LA BASE DE DATOS
  // NO NECESITAMOS HACER UN PUSH PORQUE NO ES UN ARRAY
  //           db.planetas.insertOne({})
  app.locals.db
  .collection("Vehiculos")
  .insertOne(nuevo, function (err, res) {
    if (err != null) {
      console.log(err);
    } else {
      console.log("Añadido correctamente a la colección de vehículos");
    }
  });
});

//PUT

app.put("/vehiculos", (req, res) => {
  let nuevo = {
    referencia: req.body.referencia,
    marca: req.body.marca,
    modelo: req.body.modelo,
    matricula: req.body.matricula,
    matriculacion: req.body.matriculacion,
    imagen: req.body.imagen,
  };


  // AHORA TENDRÉ QUE MIRAR EN LA BASE DE DATOS
  // SI HAY COINCIDENCIA Y, EN CASO DE QUE
  // LA HAYA, MODIFICAR EL RESTO DE VALORES

  var myquery = {_id: new mongodb.ObjectId(nuevo.referencia) };
  var newvalues = {
    $set: {
      marca:req.body.marca,
      modelo: nuevo.modelo,
      matricula: nuevo.matricula,
      matriculacion: nuevo.matriculacion,
      imagen: nuevo.imagen,
    },
  };

  app.locals.db.collection("Vehiculos").updateOne(
    myquery,newvalues,
    function (err, res) {
      if (err != null) {
        console.log(err);
      } else {
        console.log("Vehículo modificado correctamente");
      }
    }
  );
});

//DELETE

app.delete("/vehiculos", (req, res) => {

  let query = { _id: new mongodb.ObjectId(req.body.referencia)};
  

  app.locals.db
    .collection("Vehiculos")
    .deleteOne(query, function (err, res) {
      if (err != null) {
        console.log(err);
      } else {
        console.log("Vehículo eliminado correctamente");
      }
    });
});

// Y EL PUERTO

app.listen(process.env.PORT || 3001, () => {
  console.log("Servidor (Express JS) conectado correctamente al puerto 3001");
});


