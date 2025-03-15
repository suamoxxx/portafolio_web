import express from 'express'
import path from 'path';
import 'dotenv/config'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import nodemailer from 'nodemailer'
import cors from 'cors'
import morgan from 'morgan';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const corsOptions = {
    origin: 'http://127.0.0.1:3001',
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
}
const app = express();
const pass = process.env.PASS
app.set('port', process.env.PORT || 3001)
app.use(morgan('dev'));
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.get('/portafolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Api Rest Post para envio de datos al correo, este es una operacion asincronica
app.post('/mailer', async (req,res)=>{
    const { name, email, message } = req.body;
    try {
        // Configuracion del smtp 
        const transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            auth: {
              user: "dafevi.limas@gmail.com",
              pass: pass,
            },
        });
        // Mensaje a enviar
        let mail = { 
            from: `${email}`,
            to: "dafevi.limas@gmail.com",
            subject: "Mensaje desde el portafolio",
            text: ` Hola me llamo ${name},\n ${message}`
        };
       await transport.sendMail(mail,(error, info)=>{
            if(error){
                console.log(error)
                return res.status(500).json({ error: 'Error al enviar el correo' });
            } else {
                console.log("mail send")
                return res.status(200).json({ message: 'Correo enviado correctamente' });
            }
        })
    } catch (err) {
        console.log(err)
    }
})
// Servidor corriendo en puerto indicado
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});