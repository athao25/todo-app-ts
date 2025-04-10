import Todo from '../models/Todo';

const sampleTodos = [
  {
    title: 'Complete project setup',
    description: 'Set up the basic project structure and dependencies',
    completed: true
  },
  {
    title: 'Implement authentication',
    description: 'Add user authentication and authorization',
    completed: false
  }
];

export const initializeData = async (): Promise<void> => {
  try {
    // Check if any todos exist
    const count = await Todo.countDocuments();
    
    if (count === 0) {
      // Insert sample todos if none exist
      await Todo.insertMany(sampleTodos);
      console.log('Sample todos initialized successfully');
    } else {
      console.log('Database already contains todos, skipping initialization');
    }
  } catch (error) {
    console.error('Error initializing sample data:', error);
  }
}; 
