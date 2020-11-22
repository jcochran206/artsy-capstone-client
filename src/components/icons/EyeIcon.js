import {
    RiEyeLine,
} from 'react-icons/ri'

const EyeIcon = props => (
    <div className={`${props.className}`}>
        <RiEyeLine aria-labelledby='title' title='Explore Feed'/>
    </div>
);

EyeIcon.defaultProps = {
    className: '',
}

export default EyeIcon;