import React, {Component} from 'react';

class Counter extends Component{
	state = {
		number:0,
		fixedNumber:0
	};

	render() {
		const { number, fixedNumber } = this.state;
		return(
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값:{fixedNumber}</h2>
				<button
				//OnClick을 통해 버튼이 클릭되었을때 호출할 함수를 지정
				onClick={()=>{
						this.setState(
						{
							number: number+1
						},
						()=>{
							console.log('방금 setstate가 호출됨')
							console.log(this.state)
						}
						);
					}}
				>
				+1
				</button>
		</div>
		)
	}
}
export default Counter