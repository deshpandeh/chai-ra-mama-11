import FeedbackCards from '@/components/feedback_Cards/FeedbackCards'
import FeedbackBanner from '@/components/feedback_banner/FeedbackBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <FeedbackBanner />
      <FeedbackCards props={["4.5","4","3","1.4","2.6","5"]}/>
    </>
  )
}
export default page