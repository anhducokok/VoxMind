'use client'
import React from 'react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Hello World</h1>
      <Button>Click me</Button>
    </div>
  )
}

export default page