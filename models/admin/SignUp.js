import mongoose from "mongoose";

const userSignUpSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require:true
        },
        lastName: {
            type: String,
            require:true
        },
        password: {
            type: String,
            require:true
        },
        email: {
            type: String,
            unique:true,
            require:true
        },
        
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)

const userSignUp = mongoose.models.userSignUp || mongoose.model('userSignUp', userSignUpSchema)

export default userSignUp;