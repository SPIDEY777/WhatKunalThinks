import React from 'react'
import { useParams } from 'react-router-dom'

export default function Report(){
  const { id } = useParams()
  return <h1>Report {id}</h1>
}
