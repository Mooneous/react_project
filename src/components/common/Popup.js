function Popup(props) {
	return (
		<aside className='popup'>
			<div className='con'></div>
			<span
				className='close'
				onClick={() => props.setOpen(false)}>
				{/* 닫기버튼을 클릭하면 setOpen의 스테이트값이 false로 변경됨*/}
				close
			</span>
		</aside>
	);
}

export default Popup;
