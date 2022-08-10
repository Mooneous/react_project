import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department() {
	const [Members, setMembers] = useState([]); //초기값은빈배열[]:데이터 배열로 받아옴(axios받아올 state미리 만들어놓음)
	useEffect(() => {
		axios
			.get(process.env.PUBLIC_URL + '/DB/members.json')
			.then((json) => {
				//console.log(json.data.members);
				setMembers(json.data.members);
			});
	}, []);

	return (
		<Layout name={'Department'}>
			{Members.map((member, idx) => {
				return (
					<article key={idx}>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
						<img
							src={`${process.env.PUBLIC_URL}/img/${member.pic}`}
							alt={member.name}
						/>
					</article>
				);
			})}
		</Layout>
	);
}

export default Department;
