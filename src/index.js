
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Tweet =() => {
    return(
        <div className='tweet'>
            <Avatar/>
            <div className='content'>
                <NameWithHandle/>
                <Time/>
                <Message/>
                <div className='buttons'>
                <ReplyButton/>
                <RetweetButton/>
                <LikeButton/>
                <MoreOptionsButton/>
                </div>
            </div>
        </div>
    )
}

const Avatar =() => {
    return(
        <img src='https://www.gravatar.com/avatar/03502ca69f5525bbf91142cb89059eff' className='avatar' alt='avatar'/>
    );
}

const Message =() => {
    return(
        <div className='message'>
        I am starting to love how this React is treating me...
        </div>
    );
}

const NameWithHandle =() => {
    return(
        <span className='name-with-handle'>
        <span className='name'>
        Samuel Omondi
        </span>
        <span className='handle'>
            @omondisam696
        </span>
        </span>
    )
}
//when writting arrow function with one expression it can be written without braces
const Time = () => (
    <span className='time'>
        3h
    </span>
)
const ReplyButton = () => (
    <i className='fa fa-reply reply-button'></i>
)
const RetweetButton = () => (
    <i className='fa fa-retweet retweet-button'></i>
)
const LikeButton = () => (
    <i className='fa fa-heart like-button'></i>
)
const MoreOptionsButton = () => (
    <i className='fa fa-ellipsis-h more-options-button'></i>
)

ReactDOM.render(
    <Tweet/>,
    document.getElementById('root'),
)