import mongoose from "mongoose";

const homeGetInTouchImageSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            
        },
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)
 
const homeGetInTouchImage = mongoose.models.homeGetInTouchImage || mongoose.model('homeGetInTouchImage', homeGetInTouchImageSchema)

export default homeGetInTouchImage;