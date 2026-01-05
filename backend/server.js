require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors({
  origin: [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000',  
],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/api/message', async (req,res) => {
   try{
     res.status(200).json({message:"New Begnings in Kerala!"});
   }catch(err){
     res.status(500).json('Server Error');
   }
});

app.listen(process.env.PORT || 4000, '0.0.0.0', () => {
  console.log('Server is running on port 4000');
});

