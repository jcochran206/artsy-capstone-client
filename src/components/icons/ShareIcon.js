import {
    RiShareBoxLine,
} from 'react-icons/ri'

const ShareIcon = props => (
    <div className={`${props.className}`}>
        <RiShareBoxLine aria-labelledby='title' title='Repost'/>
    </div>
);

ShareIcon.defaultProps = {
    className: '',
}

export default ShareIcon;