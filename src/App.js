//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
//main
import Content from './components/main/Content';
import Visual from './components/main/Visual';
//sub
import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Members from './components/sub/Members';
import Youtube from './components/sub/Youtube';

function App() {
	return (
		<>
			<Header />
			<Visual />
			<Content />
			<Department />
			<Community />
			<Department />
			<Gallery />
			<Location />
			<Members />
			<Youtube />
			<Footer />
		</>
	);
}

export default App;
