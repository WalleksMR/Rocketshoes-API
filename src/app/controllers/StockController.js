import Stock from '../models/Stock';

class StockController {
  async index(req, res) {
    const stock = await Stock.findAll();
    return res.json(stock);
  }

  async indexId(req, res) {
    const id = req.params;
    const stock = await Stock.findOne({
      where: id,
    });
    return res.json(stock);
  }
}

export default new StockController();
