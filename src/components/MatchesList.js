import React from 'react'
import Match from './Match'

const MatchesList = ({ matches, onContact }) => (
  <div id="searchResults">
    <h2 data-id="resultTitle">{matches.length} Candidates Found</h2>
    <ul>
      {matches.map((match, i) => <Match match={match} key={i} onContact={onContact} />)}
    </ul>
  </div>
)

export default MatchesList
