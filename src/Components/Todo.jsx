import React from 'react'

export default function Todo(props) {
  const {text} = props
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}
