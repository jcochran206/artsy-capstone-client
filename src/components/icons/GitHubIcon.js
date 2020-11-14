import {
    SiGithub,
} from 'react-icons/si'

const GitHubIcon = props => (
    <div className={`${props.className}`}>
        <SiGithub />
    </div>
);

GitHubIcon.defaultProps = {
    className: '',
}

export default GitHubIcon;