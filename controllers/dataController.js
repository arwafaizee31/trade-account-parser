const fs = require('fs');
const csv = require('csv-parser');
const Trade = require('../models/Trade');

// Handle CSV file upload and parsing
exports.uploadCSV = (req, res) => {
    const results = [];
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            for (const row of results) {
                const [baseCoin, quoteCoin] = row.Market.split('/');
                const trade = new Trade({
                    utcTime: new Date(row.UTC_Time),
                    operation: row.Operation,
                    market: row.Market,
                    baseCoin: baseCoin,
                    quoteCoin: quoteCoin,
                    amount: parseFloat(row['Buy/Sell Amount']),
                    price: parseFloat(row.Price)
                });
                await trade.save();
            }
            res.send('CSV file data has been stored in the database');
        });
};

// Get balance at a given timestamp
exports.getBalance = async (req, res) => {
    const { timestamp } = req.body;
    const date = new Date(timestamp);
    const trades = await Trade.find({ utcTime: { $lte: date } });

    const balance = trades.reduce((acc, trade) => {
        const coin = trade.baseCoin;
        const amount = trade.operation === 'Buy' ? trade.amount : -trade.amount;
        acc[coin] = (acc[coin] || 0) + amount;
        return acc;
    }, {});

    res.json(balance);
};
