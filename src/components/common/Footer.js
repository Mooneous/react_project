import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<p>&copy; 2022 LOGO. All Rights Reserved.</p>
			<ul className='sns'>
				<li>
					<FontAwesomeIcon icon={faTwitter} />
				</li>
				<li>
					<FontAwesomeIcon icon={faGithub} />
				</li>
				<li>
					<FontAwesomeIcon icon={faFacebook} />
				</li>

				<li>
					<FontAwesomeIcon icon={faDribbble} />
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
