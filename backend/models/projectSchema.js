import mongoose  from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    workspaceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
        required: true,
        index:true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt:{ 
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model('Project', projectSchema);
export default Project;