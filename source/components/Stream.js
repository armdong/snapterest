import React, { Component } from 'react'
import SnapkiteStreamClient from 'snapkite-stream-client'
import StreamTweet from './StreamTweet'
import Header from './Header'

class Stream extends Component {
  state = {
    tweet: null
  }

  componentDidMount() {
    const { handleNewTweet } = this
    SnapkiteStreamClient.initializeStream(handleNewTweet)
  }

  componentWillUnmount() {
    SnapkiteStreamClient.destroyStream()
  }

  handleNewTweet = tweet => {
    this.setState({ tweet })
  }

  render() {
    const { tweet } = this.state
    const { onAddTweetToCollection } = this.props
    const headerText = 'Waiting for public photos from Twitter...'
    const component = tweet ? (
      <StreamTweet
        tweet={tweet}
        onAddTweetToCollection={onAddTweetToCollection}
      />
    ) : (
      <Header text={headerText} />
    )

    return component;
  }
}

export default Stream