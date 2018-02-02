import React, { Component } from 'react'
import Stream from './Stream'
import Collection from './Collection'

class Application extends Component {
  state = {
    collectionTweets: {}
  }

  addTweetToCollection = tweet => {
    const { collectionTweets } = this.state
    const { id } = tweet
    collectionTweets[id] = tweet
    this.setState({ collectionTweets })
  }

  removeTweetFromCollection = tweet => {
    const { collectionTweets } = this.state
    const { id } = tweet
    delete collectionTweets[id]
    this.setState({ collectionTweets })
  }

  removeAllTweetsFromCollection = () => {
    this.setState({ collectionTweets: {} })
  }

  render() {
    const {
      addTweetToCollection,
      removeTweetFromCollection,
      removeAllTweetsFromCollection
    } = this
    const { collectionTweets } = this.state

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream onAddTweetToCollection={addTweetToCollection} />
          </div>
          <div className="col-md-8">
            <Collection
              tweets={collectionTweets}
              onRemoveTweetFromCollection={removeTweetFromCollection}
              onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Application