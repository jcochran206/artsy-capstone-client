import GitHubIcon from '../icons/GitHubIcon'


export default function Footer(props) {
    return (
        <footer className="footer" role="contentinfo"> 
            <a href="https://github.com/jcochran206/artsy-capstone-client" target="_blank" rel="noreferrer" alt="GitHub"><GitHubIcon className='icon' />
            <p>by Michaela, Jonathan, Jarred, and Sacha.</p></a> 
        </footer>
    )
}