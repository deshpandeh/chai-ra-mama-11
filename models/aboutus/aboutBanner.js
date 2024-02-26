import mongoose from "mongoose";

const aboutBannerSchema = new mongoose.Schema(
    {
        bannerImage: {
            type: String,
            
        },
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)
 
const aboutBanner = mongoose.models.aboutBanner || mongoose.model('aboutBanner', aboutBannerSchema)

export default aboutBanner;