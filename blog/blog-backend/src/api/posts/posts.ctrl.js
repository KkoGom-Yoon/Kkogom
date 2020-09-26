let postId =1; //id의 초깃값

//posts 배열 초기 데이터
const posts =[
	{
		id: 1,
		title: '제목',
		body: '내용',
	},
];

/*포스트 작성
POST /api/posts
{title, body}
*/
exports.write = ctx => {
	//REST API의 request Body는 ctx.request.body에서 조회할수 있습니다
	const { title, body } = ctx.request.body;
	postId += 1; //기존 postId 값에 1을 더함
	const post = {id:postId, title, body};
	posts.push(post);
	ctx.body = post;
};

/*포스트 목록 조회
GET /api/posts
*/
exports.list = ctx => {
	ctx.body = posts;
}

/*특정 포스트 조회
GET /api/posts/:id
*/
exports.read = ctx => {
	const { id } = ctx.params;
	const post = posts.find(p => p.id.toString()===id);
	if(!post){
		ctx.status = 404;
		ctx.body = {
			message: '포스트가 존재하지 않습니다',
		};
		return;
	}
	ctx.body = post;
};

/*틀정 포스트 제거
DELETE /api/posts/:id
*/

exports.remove = ctx => {
	const { id } = ctx.params;
	const index = posts.findIndex(p => p.id.toString() === id);
	if (index === -1){
		ctx.status =404;
		ctx.body = {
			message: '포스트가 존재하지 않습니다.',
		};
		return;
	}
	posts.splice(index,1);
	ctx.status= 204; //No content
};

/*포스트 수정_교체
PUT /api/posts/:id
{title,body}
*/
exports.replace = ctx =>{
	const { id } =ctx.params;
	const index = posts.findIndex(p => p.id.toString()=== id);
	if(index === -1){
		ctx.status=404;
		ctx.body={
			message:'포스트가 존재하지 않습니다.',
		};
		return;
	}
	//전체 객체르 덮어씁니다.
	//id 제외 정보 바꿈
	posts[index]={
		id,
		...ctx.request.body,
	};
	ctx.body = posts[index];
};
	
/*포스트 수정_특정 값 변경
PATCH /api/posts/:id
{title,body}
*/
exports.update = ctx => {
	const { id } =ctx.params;
	const index = posts.findIndex(p => p.id.toString() === id);
	if(index === -1){
		ctx.status=404;
		ctx.body ={
			message:'포스트가 존재하지 않습니다',
		};
		return;
	}
	//기존 값에 정보를 덮어 씌움
	post[index]={
		...posts[index],
		...ctx.request.body,
	};
	ctx.body = posts[index];
};