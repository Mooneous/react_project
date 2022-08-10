import Layout from '../common/Layout';
import Popup from '../common/Popup';

import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false); //초기값 : 안보이게 false
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyC77Pd__ju0Wqx_Umc-IuW7Cn2mWi_HVsk';
		const playlist = 'PLHtvRFLN5v-VD95TBpr5Dh2zguWCjjmMG';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios.get(url).then((json) => {
			//console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{' '}
				{Vids.map((vid, idx) => {
					return (
						<article key={idx}>
							<h2>{vid.snippet.title}</h2>
							<p>{vid.snippet.description}</p>
							<img
								src={vid.snippet.thumbnails.standard.url}
								alt={vid.title}
								onClick={() => {
									setOpen(true);
									setIndex(idx);
								}}
							/>
							<span>{vid.snippet.publishedAt}</span>
						</article>
					);
				})}
			</Layout>

			{/* Open이라는 state값이 true일때만 팝업보여주기 그리고 setOpen스테이트 명으로 setOpen스테이트변경함수를 전달 */}
			{Open && (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
					{/*카멜케이스?frameborder소문자아니죠frameBorder대문자맞죠*/}
				</Popup>
			)}
		</>
	);
}

export default Youtube;
