import React from 'react'

const QuotesStats = ({quotes}) => {
  return (
    <div className='feedback-stats' >
     <h4>{quotes.length} Reviews</h4>
     <h4>Average</h4>
     </div>
  )
}

export default QuotesStats