import { log } from "../commons/logger";

module.exports = {
  test: async (req, res) => {
    const { ip, country_name, country_capital } = req.body;
    await log(`test1: ${ip} / ${country_name} / ${country_capital}`);
    res.status(200).json({
      test1: "test1",
    });
  },
  test2: async (req, res) => {
    const { ip, country_name, country_capital } = req.body;
    await log(`test2: ${ip} / ${country_name} / ${country_capital}`);
    res.status(200).json({
      test2: "test2",
    });
  },
  test3: async (req, res) => {
    const { ip, country_name, country_capital } = req.body;
    await log(`test3: ${ip} / ${country_name} / ${country_capital}`);
    res.status(200).json({
      test3: "test3",
    });
  },
};
