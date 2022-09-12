import React from 'react'

const QuotesStats = ({quotes}) => {
  let average = Math.round(quotes.reduce((acc, {rating})=>{
    return acc + rating;
  },0)/quotes.length)


  // average = average.toFixed(1).replace(/[.,]0$/, '')
  // average = Math.round(average)
  return (
    <div className='feedback-stats' >
     <h4>{quotes.length} Reviews</h4>
     <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
     </div>
  )
}

export default QuotesStats