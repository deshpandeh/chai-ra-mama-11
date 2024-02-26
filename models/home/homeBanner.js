import mongoose from "mongoose";

const homeBannerSchema = new mongoose.Schema(
    {
        bannerHeading: {
            type: String,
            
        },
        bannerText: {
            type: String,
            
        },
        bannerImage: {
            type: String,
            
        },
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)
 
const homeBanner = mongoose.models.homeBanner || mongoose.model('homeBanner', homeBannerSchema)

export default homeBanner;