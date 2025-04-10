import mongoose from 'mongoose';
import { initializeData } from './initData';

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-app');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Initialize sample data after successful connection
    await initializeData();
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB; 