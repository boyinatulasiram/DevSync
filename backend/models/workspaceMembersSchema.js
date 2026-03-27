import mongoose from "mongoose";

const workspaceMembersSchema = new mongoose.Schema({
    workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    role:{
        type:String,
        enum: ['admin', 'member'],
        default: 'member'   
    }
}, {
    unique: true,
    timestamps: true
}
)

const WorkspaceMembers = mongoose.model('WorkspaceMembers', workspaceMembersSchema);    
export default WorkspaceMembers;