require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/message', async (req,res) => {
   try{
     res.status(200).json("Hello from server");
   }catch(err){
     res.status(500).json('Server Error');
   }
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 4000');
});

