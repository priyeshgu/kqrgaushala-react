import React from 'react'
import Hero from '../../components/donate/Donatehero/Donatehero'
import Donationtype from '../../components/donate/Donatetypes/Donationtype'

export default function Donate() {
  return (
    <div>
      <Hero/>
      <Donationtype
      name="priyes"
      type = "type1"
      date = "45 noc"
      />
      <Donationtype
      name="hello"
      type="testtype"
      date="14 dec"
      />
    </div>

  )
}
