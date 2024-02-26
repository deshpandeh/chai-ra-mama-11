import mongoose from "mongoose";

const aboutWCUSchema = new mongoose.Schema(
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
 
const aboutWCU = mongoose.models.aboutWCU || mongoose.model('aboutWCU', aboutWCUSchema)

export default aboutWCU;