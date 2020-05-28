import Stock from '../models/Stock';

class StockController {
  async index(req, res) {
    const stock = await Stock.findAll();
    return res.json(stock);
  }
}

export default new StockController();
