import React, { Component } from 'react'
import PropTypes from 'prop-types'

const tweetStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '300px',
  height: '400px',
  margin: '10px'
}

const imageStyle = {
  maxHeight: '400px',
  maxWidth: '100%',
  boxShadow: '0px 1px 1px 0px #aaa',
  border: '1px solid #fff'
}

class Tweet extends Component {
  handleImageClick = () => {
    const { tweet, onImageClick } = this.props

    onImageClick && onImageClick(tweet)
  }

  render() {
    const { tweet } = this.props
    const tweetMediaUrl = tweet.media[0].url
    const { handleImageClick } = this

    return (
      <div style={tweetStyle}>
        <img
          style={imageStyle}
          src={tweetMediaUrl}
          onClick={handleImageClick}
        />
      </div>
    )
  }
}

Tweet.propTypes = {
  tweet: (properties, propertyName, componentName) => {
    const tweet = properties[propertyName]

    if (!tweet) {
      return new Error('Tweet must be set.')
    }

    if (!tweet.media) {
      return new Error('Tweet must have an image.')
    }
  },
  onImageClick: PropTypes.func
}

export default Tweet