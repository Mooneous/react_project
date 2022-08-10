import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Location() {
	const { kakao } = window; //window에 있는 kakao객체를 비구조할당으로 가져오기~안그럼지도못가져와ㅠㅠ
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};

	// 마커가 표시될 위치입니다
	//var markerPosition = new kakao.maps.LatLng(33.450701,126.570667);
	const markerPosition = option.center;
	// 마커를 생성합니다
	//var marker = new kakao.maps.Marker({position: markerPosition,});
	const marker = new kakao.maps.Marker({
		position: markerPosition,
	});

	useEffect(() => {
		//가상돔 요소가 브라우저에 마운트(생성) 되면
		// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
		//var map = new kakao.maps.Map(mapContainer, mapOption);
		const map_instance = new kakao.maps.Map(
			container.current,
			option
		); //가상돔이니까 container아니고,container.current!
		// 마커가 지도 위에 표시되도록 설정합니다
		//marker.setMap(map);
		marker.setMap(map_instance);
	}, []);

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
