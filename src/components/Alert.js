import React from 'react'

export default function Alert(props) {
  return (
    props.type && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {props.type}
    </div>
  )
}
