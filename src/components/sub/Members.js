import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

function Members() {
	const initVal = {
		userid: '',
	};
	const [Val, setVal] = useState(initVal);

	//인증 조건 실패시 출력될 에러메시지가 항목별로 담길 state 추가
	const [Err, setErr] = useState({});

	//인증처리 함수
	const check = (value) => {
		const errs = {};

		//userid인증 처리
		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		return errs;
	};

	//submit이벤트 발생시 실행할 함수
	const handleSubmit = (e) => {
		//일단은 이벤트의 기본기능을 막아서 서버전송 방지
		e.preventDefault();

		//check함수에 인수로 val값을 넣어서 인증검사 후
		//반환된 에러객체값을 Err스테이트에 옮겨담음
		setErr(check(Val));
	};

	//현재 입력하고 있는 input값을 state에 저장해주는 함수
	const handleChange = (e) => {
		const { name, value } = e.target;
		//name = 'userid'
		//객체에서 키값을 변수로 지정이 안됨 (es5)
		//객체에세 키값을 변수로 치환하고자 할때는 키에 들어갈 변수를 대괄호로 감싸줌 (es6)
		//setVal({...Val, 'userid': value})
		setVal({ ...Val, [name]: value });
		//console.log(Val, value);
	};

	useEffect(() => {
		console.log(Err);
	}, [Err]); //에러객체가생성되면실행

	return (
		<Layout name={'Members'}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>회원가입 폼 양식</legend>
					<table border='1' width='600'>
						<caption>회원가입 정보 입력</caption>
						<tbody>
							{/* userid */}
							<tr>
								<th scope='row'>
									{/*가로로읽기(접근성)*/}
									<label htmlFor='userid'>USER ID</label>
								</th>
								<td>
									<input
										type='text'
										placeholder='아이디를 입력하세요'
										name='userid'
										id='userid'
										value={Val.userid}
										onChange={handleChange}
									/>
									{/*userid 에러메시지*/}
									<span className='err'>{Err.userid}</span>
								</td>
							</tr>

							{/* btnSet */}
							<tr>
								<th colSpan='2'>
									{/*합치기 */}
									<input type='reset' value='cancel' />
									<input type='submit' value='submit' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Members;
