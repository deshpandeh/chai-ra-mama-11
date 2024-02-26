import mongoose from "mongoose";

const homeTestimonialCardSchema = new mongoose.Schema(
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
 
const homeTestimonialCard = mongoose.models.homeTestimonialCard || mongoose.model('homeTestimonialCard', homeTestimonialCardSchema)

export default homeTestimonialCard;