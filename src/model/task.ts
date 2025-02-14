import mongoose, { Schema, Document } from 'mongoose';

interface ITask extends Document {
    
    title: string,
    description: string,
    completed: boolean,
    createdAt: Date,
    updatedAt: Date
}

const taskSchema: Schema = new Schema({

    name: { type: String, required: true },
    description : {type: String, required: false},
    completed : {type: Boolean, required: true},
    createdAt : {type: Date, required: true},
    updatedAt : {type: Date, required: true}

});

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;