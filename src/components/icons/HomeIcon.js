import {
    RiHome3Line,
} from 'react-icons/ri'

const HomeIcon = props => (
    <div className={`${props.className}`}>
        <RiHome3Line />
    </div>
);

HomeIcon.defaultProps = {
    className: '',
}

export default HomeIcon;