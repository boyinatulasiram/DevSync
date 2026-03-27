import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project',
        required:true
    },
    assigneeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum: ['todo', 'in-progress', 'done'],
        default: 'todo'
    },
    priority:{
        type:String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'   
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;