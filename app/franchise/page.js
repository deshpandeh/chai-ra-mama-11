import FranchiseBanner from '@/components/franchise_banner/FranchiseBanner'
import FAQ from '@/components/franchise_faq/FAQ'
import FranchisePartnerProfit from '@/components/franchise_partner_profit/FranchisePartnerProfit'
import FranchisePartnership from '@/components/franchise_partnership/FranchisePartnership'
import React from 'react'

const page = () => {
  return (
    <>
      <FranchiseBanner/>
      <FranchisePartnership/>
      <FranchisePartnerProfit/>
      <FAQ/>
    </>
  )
}

export default page