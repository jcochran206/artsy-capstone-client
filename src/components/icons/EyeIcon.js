import {
    RiEyeLine,
} from 'react-icons/ri'

const EyeIcon = props => (
    <div className={`${props.className}`}>
        <RiEyeLine />
    </div>
);

EyeIcon.defaultProps = {
    className: '',
}

export default EyeIcon;