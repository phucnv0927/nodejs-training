// const { Product } = require('../models');

// exports.getAll = (req, res, next) => {
//   Product
//     .findAll()
//     .then(products => {
//       res.status(200).send(products);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

// exports.get = (req, res, next) => {
//   Product
//     .findByPk(req.params?.id)
//     .then(product => {
//       if (!product) {
//         return res.status(404).send({});
//       }
//       res.status(200).send(product);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

// exports.store = (req, res, next) => {
//   Product
//     .create({
//       title: req.body.title,
//       price: req.body.price,
//       imageUrl: req.body.image_url,
//       description: req.body.description
//     })
//     .then(product => {
//       res.status(201).send(product);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

// exports.update = (req, res, next) => {
//   Product
//     .findByPk(req.params?.id)
//     .then(product => {
//       if (!product) {
//         return res.status(404).send({});
//       }
//       product.title = req.body.title;
//       product.price = req.body.price;
//       product.imageUrl = req.body.imageUrl;
//       product.description = req.body.description;
//       product.save();
//       res.status(200).send(product);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

// exports.delete = (req, res, next) => {
//   Product
//     .findByPk(req.params.id)
//     .then(product => {
//       if (!product) {
//         res.status(404).send('Not Found');
//       }
//       product.destroy();
//       res.status(200).send('Delete successfully !');
//     })
//     .catch(err => {
//       console.error(err);
//     })

// }
