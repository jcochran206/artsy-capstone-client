import GitHubIcon from '../icons/GitHubIcon'


export default function Footer(props) {
    return (
        <footer className="footer" role="contentinfo"> 
            <a href="https://github.com/jcochran206/artsy-capstone-client" target="_blank" alt="GitHub"><GitHubIcon className='icon' />
            <p>by Michella, Jonathan, Jarred, and Sacha.</p></a> 
        </footer>
    )
}