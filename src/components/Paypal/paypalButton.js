import React from "react"
import Paypal from "gatsby-plugin-paypal"

const PaylpalButton = () => (
    <Paypal 
      style={{
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
      }}
      amount={10.1}
      currency="EUR"
    />
)

export default PaylpalButton