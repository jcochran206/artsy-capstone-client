import {
    RiShareBoxLine,
} from 'react-icons/ri'

const ShareIcon = props => (
    <div className={`${props.className}`}>
        <RiShareBoxLine />
    </div>
);

ShareIcon.defaultProps = {
    className: '',
}

export default ShareIcon;