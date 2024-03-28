// Fetch API를 사용해 aaa.json 파일을 읽어옵니다.
fetch('https://jwonchi.github.io/kopoclass/JSON/quiz.json')
    .then(response => {
        // JSON 형태로 응답을 변환합니다.
        return response.json();
    })
    .then(data => {
        // data가 1 이상인 경우 퀴즈 만드는 함수를 호출한다. 
        if(data.quizzes.length > 0){
            makeQuiz (data.quizzes);
        }
        console.log(data.quizzes.length);
    })
    .catch(error => {
        console.error('파일을 읽는 중 오류 발생:', error);
    });

function makeQuiz (contents) {
    const quesion = document.getElementById('quiz');
    console.log('make quiz!!');
    contents.forEach(element => {
        const p = document.createElement('p'); // 문제 요소
        const ol = document.createElement('ol'); // 답안 요소
        const li1 = document.createElement('li'); // 답안 요소
        const li2 = document.createElement('li'); // 답안 요소
        const li3 = document.createElement('li'); // 답안 요소
        const li4 = document.createElement('li'); // 답안 요소
        li1.textContent = element.options.a;
        li2.textContent = element.options.b;
        li3.textContent = element.options.c;
        li4.textContent = element.options.d;
        ol.appendChild(li1);
        ol.appendChild(li2);
        ol.appendChild(li3);
        ol.appendChild(li4);
        p.textContent = element.question; // p 요소의 텍스트 설정
        quesion.appendChild(p);
        quesion.appendChild(ol);
    });
}
