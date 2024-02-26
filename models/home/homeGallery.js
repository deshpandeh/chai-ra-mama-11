import mongoose from "mongoose";

const homeGallerySchema = new mongoose.Schema(
    {
        galleryImage: {
            type: String,
            
        },
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)
 
const homeGallery = mongoose.models.homeGallery || mongoose.model('homeGallery', homeGallerySchema)

export default homeGallery;