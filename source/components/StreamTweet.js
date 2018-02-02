import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Tweet from './Tweet'

class StreamTweet extends Component {

  componentWillMount() {
    console.log('[Snapterest] StreamTweet: 1. Running componentWillMount()')

    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    })

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    }
  }

  componentDidMount() {
    console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()')

    const componnetDOMRepresentation = ReactDOM.findDOMNode(this)

    window.snapterest.headerHtml = componnetDOMRepresentation.children[0].outerHTML
    window.snapterest.tweetHtml = componnetDOMRepresentation.children[1].outerHTML
  }

  componentWillUnmount() {
    console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()')

    delete window.snapterest
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()')

    const { tweet: currentTweet } = this.props
    const { tweet: nextTweet } = nextProps

    const currentTweetLength = currentTweet.text.length
    const nextTweetLength = nextTweet.text.length
    const isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength)

    let headerText = (isNumberOfCharactersIncreasing === true)
      ? 'Number of characters is increasing'
      : 'Latest public photo from Twitter'

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing,
      headerText
    })

    window.snapterest.numberOfReceivedTweets++
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()')

    return (nextProps.tweet.text.length > 1)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()')

    window.snapteres.numberOfDisplayedTweets++
  }

  render() {
    console.log('[Snapterest] StreamTweet: Running render()')

    const { headerText } = this.state
    const { tweet, onAddTweetToCollection } = this.props

    return (
      <section>
        <Header text={headerText} />
        <Tweet
          tweet={tweet}
          onImageClick={onAddTweetToCollection}
        />
      </section>
    )
  }
}

export default StreamTweet