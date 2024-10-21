import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import nodemailer from 'nodemailer'

const app = express();
app.set('port', process.env.PORT || 3001)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname, "public")));

app.get('/portafolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/sendMailer', (res,req)=>{
    const { name, email, message } = req.body
    
})
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});