const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({

    description: { type: String, required: true },  // รายการ
    amount: { type: Number, required: true },  // จำนวนเงิน
    date: { type: Date, required: true },  // วันที่
    category: { type: String, required: true },  // หมวดหมู่
    type: { type: String, enum: ['income', 'expense'], required: true },  // ประเภท (รายรับหรือรายจ่าย)
    account: { type: String, required: true },  // บัญชี

},{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Transaction', transactionSchema);