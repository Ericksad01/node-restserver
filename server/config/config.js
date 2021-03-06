// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Vencimiento del token
// ============================
// 60 sgs
// 60 min
// 24 hrs
// 30 days

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

 
// ============================
//  SEED de autenticacion 
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============================
//  Base de datos
// ============================
let urlDB;
if(process.env.NODE_ENV === 'dev' ){
    urlDB = 'mongodb://localhost:27018/cafe';
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;

// ============================
//  Google Client ID
// ============================

process.env.CLIENT_ID = process.env.CLIENT_ID || '685410293743-b804ehnqkois5kfal90qikposjuqbaul.apps.googleusercontent.com';
