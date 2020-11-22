import {
    SiGithub,
} from 'react-icons/si'

const GitHubIcon = props => (
    <div className={`${props.className}`}>
        <SiGithub aria-labelledby='title' title='GitHub'/>
    </div>
);

GitHubIcon.defaultProps = {
    className: '',
}

export default GitHubIcon;