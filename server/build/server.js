"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    console.log('oi');
    return res.json([
        { id: 1, nome: 'oi' },
        { id: 2, nome: 'oi1' },
        { id: 3, nome: 'oi2' }
    ]);
});
app.listen(3000);
