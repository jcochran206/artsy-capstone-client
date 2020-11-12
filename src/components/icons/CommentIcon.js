import {
    AiOutlineComment,
} from 'react-icons/ai'

const CommentIcon = props => (
    <div className={`${props.className}`}>
        <AiOutlineComment />
    </div>
);

CommentIcon.defaultProps = {
    className: '',
}

export default CommentIcon;