import React from 'react'
import { connect } from 'react-redux'
import { fetchMatches } from '../store/actions'
import { selectMatches } from '../store/reducers'
import MatchesList from '../components/MatchesList'
import ReactModal from 'react-modal'
import MatchContactDialogue from '../components/MatchContactDialogue'

class VisibleMatchesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      match: {
        cell: null,
        phone: null,
        email: null
      }
    }
    ReactModal.setAppElement('body')
  }
  componentDidMount () {
    this.props.getMatches()
  }
  onShowContact (match) {
    this.setState({ showModal: true, match: match })
  }
  onHideContact () {
    this.setState({ showModal: false })
  }
  render () {
    const onShowContact = this.onShowContact.bind(this)
    const onHideContact = this.onHideContact.bind(this)
    const { showModal: show, match } = this.state
    return (
      <div>
        <MatchesList matches={this.props.matches} onContact={onShowContact} />
        <MatchContactDialogue match={match} onHide={onHideContact} show={show} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  matches: selectMatches(state)
})

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(fetchMatches())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleMatchesList)
