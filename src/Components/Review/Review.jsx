import PropTypes from 'prop-types';
const Review = ( {author, content} ) => {
    return(<>
    <h4>{author}</h4>
    <span>{content}</span>
    </>)
}

Review.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string
}

export default Review;