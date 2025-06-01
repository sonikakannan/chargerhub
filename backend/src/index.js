import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookiePraser from 'cookie-parser'
import { connectDB } from './config/db.js';
import authRouter from './routes/auth.route.js'
import chargerRouter from './routes/charger.route.js'

dotenv.config()

const app = express()
const PORT =process.env.PORT || 5001

//Middleware
app.use(express.json());
app.use(cookiePraser());

app.use(cors({
  origin: [
    "http://localhost:5173", 
    ""
  ],
  credentials: true,
}));


app.use('/', authRouter)
app.use('/charger', chargerRouter)

app.get('/', (req, res) => {
  res.send('API is working!');
});


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
    connectDB();
})