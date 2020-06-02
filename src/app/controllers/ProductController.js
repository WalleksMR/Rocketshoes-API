import Product from '../models/Product';
import Stock from '../models/Stock';

class ProductController {
  async store(req, res) {
    const { title, price, amount, image } = req.body;
    if (!title || !price || !amount) {
      return res.status(401).json({ error: 'Campos vazios' });
    }
    const stock = await Stock.create({
      amount,
    });

    const product = await Product.create({
      title,
      price,
      id_amount: stock.id,
      image,
    });

    return res.json(product);
  }

  async index(req, res) {
    const product = await Product.findAll({
      attributes: ['id', 'title', 'price', 'image'],
    });

    return res.json(product);
  }

  async indexId(req, res) {
    const id = req.params;
    const product = await Product.findOne({
      where: id,
      attributes: ['id', 'title', 'price', 'image', 'id_amount'],
    });
    return res.json(product);
  }
}
export default new ProductController();
