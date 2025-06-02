import React from 'react'
import { Timeline } from '../../components/Timeline'
import { experiences } from '../../constants'

export const Experience = () => {
  return (
    <section className='w-full'>
      <Timeline data={experiences} />
    </section>
  )
}
