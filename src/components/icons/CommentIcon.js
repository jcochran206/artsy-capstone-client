// currently there is an open issue with 'react-icons/ai'
// src: https://github.com/react-icons/react-icons/issues/344
// once they resolve it, may reintegrate icon
// import {
//     AiOutlineComment,
// } from 'react-icons/ai'

import {
    FaRegCommentDots,
} from 'react-icons/fa'


const CommentIcon = props => (
    <div className={`${props.className}`}>
        <FaRegCommentDots aria-labelledby='title' title='Comments'/>
    </div>
);

CommentIcon.defaultProps = {
    className: '',
}

export default CommentIcon;