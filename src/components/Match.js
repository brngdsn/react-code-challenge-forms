import React from 'react'

const Match = ({ match, onContact }) => (
  <li data-id="resultItem">
    <img data-id="userPhoto" className="photo" src={match.picture.large} alt="" />
    <span data-id="userName" className="name lead">{match.name.first} {match.name.last}</span>
    <span data-id="userAge" className="age lead">{match.dob.age}</span>
    <button data-id="userInfo" onClick={() => onContact(match)}>Contact</button>
  </li>
)

export default Match
