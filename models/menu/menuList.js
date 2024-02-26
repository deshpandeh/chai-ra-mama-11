import mongoose from "mongoose";

const menuListSchema = new mongoose.Schema(
    {
        itemName: {
            type: String
        },
        image:{
            type:String
        }
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)

const menuList = mongoose.models.menuList || mongoose.model('menuList', menuListSchema)

export default menuList;