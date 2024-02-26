import mongoose from "mongoose";

const homeMenuCardSchema = new mongoose.Schema(
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
 
const homeMenuCard = mongoose.models.homeMenuCard || mongoose.model('homeMenuCard', homeMenuCardSchema)

export default homeMenuCard;