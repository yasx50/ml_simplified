import mongoose from 'mongoose';
import dotenv from 'dotenv';
const dbname = "mlsimplified"

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`{$rocess.env.MONGO_URI}`/${dbname}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
