import mongoose from "mongoose";

const ourChefSchema = new mongoose.Schema(
    {
        year: {
            type: String,
        },
        chefName: {
            type: String,
        },
        chefImage: {
            type: String,
        },
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)
 
const ourChef = mongoose.models.ourChef || mongoose.model('ourChef', ourChefSchema)

export default ourChef;