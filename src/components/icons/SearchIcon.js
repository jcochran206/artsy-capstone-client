import {
    RiSearchLine,
} from 'react-icons/ri'

const SearchIcon = props => (
    <div className={`${props.className}`}>
        <RiSearchLine />
    </div>
);

SearchIcon.defaultProps = {
    className: '',
}

export default SearchIcon;