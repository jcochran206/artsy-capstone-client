import {
    RiHome3Line,
} from 'react-icons/ri'

const HomeIcon = props => (
    <div className={`${props.className}`}>
        <RiHome3Line aria-labelledby='title' title='Home Feed' />
    </div>

);

HomeIcon.defaultProps = {
    className: '',
}

export default HomeIcon;