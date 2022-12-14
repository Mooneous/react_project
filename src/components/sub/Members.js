import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

function Members() {
	const initVal = {
		//취소버튼사용시 필요
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
		gender: 'null',
		edu: '',
	};
	const [Val, setVal] = useState(initVal);

	//인증 조건 실패시 출력될 에러메시지가 항목별로 담길 state 추가
	const [Err, setErr] = useState({});

	//인증처리 함수
	const check = (value) => {
		const errs = {};

		//인증처리할 조건 정규표현식
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+\]]/;

		//userid인증 처리
		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		//email인증 처리
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '이메일주소는 8글자 이상 @를 포함하세요';
		}
		//pwd1 인증처리
		if (
			value.pwd1.length < 6 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 = '비밀번호는 6글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요';
		}
		//pwd2 인증처리//비번값이 없음이 동일해서 패쓰되는 경우도 걸러내기
		if (value.pwd1 !== value.pwd2 || !value.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
		}

		//gender 인증처리
		if (!value.gender) {
			errs.gender = '성별을 선택하세요';
		}

		//edu 인증처리
		if (value.edu === '') {
			errs.edu = '최종학력을 선택하세요';
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

	//radio버튼 인풋 전용 함수
	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};

	//select 전용 함수
	const handleSelect = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
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

							{/*email*/}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-MAIL</label>
								</th>
								<td>
									<input
										type='text'
										id='email'
										name='email'
										value={Val.email}
										placeholder='이메일주소를 입력하세요'
										onChange={handleChange}
									/>
									<span className='err'>{Err.email}</span>
								</td>
							</tr>

							{/*pwd1 */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										id='pwd1'
										name='pwd1'
										value={Val.pwd1}
										placeholder='비밀번호를 입력하세요'
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd1}</span>
								</td>
							</tr>
							{/*pwd2 */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>RE-PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										value={Val.pwd2}
										placeholder='비밀번호를 재입력하세요'
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd2}</span>
								</td>
							</tr>

							{/* gender */}
							<tr>
								<th scope='row'>GENDER</th>
								<td>
									<label htmlFor='male'>MALE</label>
									<input type='radio' id='male' name='gender' onChange={handleRadio} />

									<label htmlFor='female'>FEMALE</label>
									<input type='radio' id='female' name='gender' onChange={handleRadio} />
									{/*name값이 같으므로 둘다체크안됨*/}
									<span className='err'>{Err.gender}</span>
								</td>
							</tr>

							{/* edu */}
							<tr>
								<th scope='row'>
									<label htmlFor='edu'>EDUCATION</label>
								</th>
								<td>
									<select name='edu' id='edu' onChange={handleSelect}>
										<option value=''>최종 학력을 선택하세요</option>
										<option value='elementary-school'>초등학교 졸업</option>
										<option value='middle-school'>중학교 졸업</option>
										<option value='high-school'>고등학교 졸업</option>
										<option value='college'>대학교 졸업</option>
									</select>

									<span className='err'>{Err.edu}</span>
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
