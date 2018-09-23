import React from 'react'
import ReactModal from 'react-modal'

const MatchContactDialogue = ({ match, onHide, show }) => (
  <ReactModal isOpen={show} contentLabel="Contact Details" style={{
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }}>
    <div data-id="userDialog">
      <span data-id="userPhone">{match.phone}</span>
      <br />
      <span data-id="userCell">{match.cell}</span>
      <br />
      <span data-id="userEmail">{match.email}</span>
      <br />
      <button onClick={onHide}>Close</button>
    </div>
  </ReactModal>
)

export default MatchContactDialogue
