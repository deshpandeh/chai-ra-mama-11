import mongoose from "mongoose";

const menuCardSchema = new mongoose.Schema(
    {
        itemName: {
            type: String
        },
        itemPrice: {
            type: String
        },
        itemImage: {
            type: String
        },
        itemCategory: {
            type: String
        }
        
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)

const menuCard = mongoose.models.menuCard || mongoose.model('menuCard', menuCardSchema)

export default menuCard;