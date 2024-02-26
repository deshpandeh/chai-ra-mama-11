import mongoose from "mongoose";

const homeHeaderCardSchema = new mongoose.Schema(
    {
        cardText: {
            type: String,
        },
        cardTitle: {
            type: String,
        },
        cardImage: {
            type: String,
        },
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)
 
const homeHeaderCard = mongoose.models.homeHeaderCard || mongoose.model('homeHeaderCard', homeHeaderCardSchema)

export default homeHeaderCard;