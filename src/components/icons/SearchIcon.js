import {
    RiSearchLine,
} from 'react-icons/ri'

const SearchIcon = props => (
    <div className={`${props.className}`}>
        <RiSearchLine aria-labelledby='title' title='Search'/>
    </div>
);

SearchIcon.defaultProps = {
    className: '',
}

export default SearchIcon;