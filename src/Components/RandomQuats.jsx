import React from 'react'

const RandomQuats = () => {

  let quotes = ["Avoid daydreming about years to come", "You are the most important person in your life ", "Always be ture who you are,and ignore what other people have to say about you", "Always be true who you are ,and ignore what other people have to say about you", "only demonstrate your strength when it's really requried", "Aman Singh is King"]

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]

  return (
    <div>
      {quote}
    </div>
  )
}

export default RandomQuats