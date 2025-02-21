import mongoose from 'mongoose';
import config from 'config'

const connectDB = async () => {
    
    try {
        const db =  process.env.db_string || ""
        await mongoose.connect(db);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Failed', error);
        process.exit(1);
    }
};

export default connectDB;