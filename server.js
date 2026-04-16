import express from 'express'
import path from 'path';
import 'dotenv/config'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { Resend } from 'resend';
import cors from 'cors'
import morgan from 'morgan';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const corsOptions = {
    origin: ['https://portafolio-web-seven-zeta.vercel.app', 'https://portafolio-adheyw1yx-suamoxxxs-proyectos.vercel.app'],
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
};
const app = express();
const pswd = process.env.PASS;
const resend = new Resend (pswd);

app.set('port', process.env.PORT || 3001);
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Envio de correos electronicos
app.post('/mailer', async (req,res)=>{
    const { name, email, message } = req.body;
    try {
        if(!email || !message){
            const error = new Error("Incomplete data");
            error.statusCode = 400;
            throw error;
        }
        const mail = await resend.emails.send({
            from: "onboarding@resend.dev", 
            to: "dafevi.limas@gmail.com",
            subject: "Nuevo mensaje de portafolio prueba",
            html: `Hola, mi nombres ${name}, deseo; ${message}, mi contacto es ${email}`
        });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.post('/screen-size', (req, res) => {
    const { width, height, availWidth, availHeight } = req.body;
    console.log(`Resolución detectada: ${width}x${height}`);
    res.sendStatus(200);
});

// Servidor corriendo en puerto indicado
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});