import mongoose from "mongoose";

const homeAboutUsSchema = new mongoose.Schema(
    {
        
        aboutDescription: {
            type: String,
            
        },
        aboutImage: {
            type: String,
            
        },
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)
 
const homeAboutUs = mongoose.models.homeAboutUs || mongoose.model('homeAboutUs', homeAboutUsSchema)

export default homeAboutUs;