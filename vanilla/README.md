# React JS

### 1.2

React JS를 배울 가치가 있는 이유

- 큰 기업들
- 페이스북의 투자
- 큰 커뮤니티(JS)
  - 책, 코스, 라이브러리, 가이드, 패키지, 튜터, 직업
  - React JS를 기반으로 한 생태계
- React Native

### 2.0

React JS makes UI interacitve

### 2.1

- vscode tip
  - script:src
- import
  - react
  - react-dom
    - put React elements to HTML body

### 2.2

- React element
  - React.createElement(HTML tag);
- vscode tip
  - #root

### 2.5

- JSX
  - React.createElement(component, props, ...children)

### 2.6

- 컴포넌트의 첫 글자는 대문자

### 3.0

- React의 좋은점
  - UI에서 바뀐 부분만 업데이트 해준다.

### 3.1

- state
  - 자동으로 리렌더링을 일으킬 수 있는 최고의 방법
  - React.useState(초기값);
    - [값(value), 값을 바꿀 때 사용하는 함수(modifier)]

```
const food = ["tomato", "potato"];
const [myFavFood, mySecondFavFood] = food;
console.log(myFavFood); // tomato
```

### 3.2

- useState의 modifier 함수
  - 값 변경, 해당 컴포넌트 리렌더링
  - set + 데이터 이름
    - setCounter

### 3.4

- setCounter((current) => current + 1)
  - 함수를 전달하는 방식
  - 현재 state를 기반으로 계산

### 3.5

- HTML label
  - input 옆에 써주는 글씨
  - 글씨를 누르면 input이 선택됨
  - for input의 id로 연결
- In JSX
  - class -> className
  - for -> htmlFor
- onChange
- event.target.value

- 본문이 여러 줄인 화살표 함수
  - 중괄호, return 사용

### 3.7

- 삼항연산자

### 3.9

- select
  - option
- JSX에서 {}를 통해서 JS를 작성할 수 있음.

### 4.0

- props
  - property
  - 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법
- 함수형 컴포넌트

### 4.1

- props
  - function을 보낼 수 있음
    - 여기서 onClick은 event listener가 아님
    - JSX로 원하는 html tag에 넣어줘야 event listener가 실행됨
- React Memo
  - 부모 컴포넌트의 state를 변경하면 모든 자식 컴포넌트들도 re-render가 일어남
  - React.memo()를 통해서 prop의 변경이 일어난 부분만 re-render 할 수 있음

### 4.2

```
fontSize: fontSize,
==
fontSize,
```

- prop-types
  - prop들의 type이 무엇인지 알려줌
  - https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  - isRequired
- default value

### 5.0

- CRA(create react app)
  - https://github.com/facebook/create-react-app
  - package.json
    - scripts
  - public
    - index.html
  - src

### 5.1

- npm i prop-types
- styles can be modular
  - .module.css

### 6.0

- on: component에 붙여줄 수 있는 모든 event들을 볼 수 있음.
- useEffect
  - 특정 코드들이 첫번째 component render에서만 실행되게 하는 방법
    - ex) call an api
  - argument
    - Callback function
    - deps
      - dependencies (React.js가 지켜보려는 것들)
      - dependency가 변화할 때 function 실행
      - dependency가 없으면 component가 처음 생성될 때 한번 실행됨

### 6.4

- Cleanup function
  - component가 destroy 될 때 코드 실행
  - useEffect()에서 parameter로 넣은 Callback function의 return 함수
  - 보통 useEffect안에 모든 것을 작성

### 7.0

- State를 직접적으로 수정하지 않음. modifier 함수를 사용함
- ...array
  - array의 elements를 가져와줌

### 7.1

- map()
  - 배열.map(배열의 모든 item에 대해 실행될 함수)
  - 새로운 array를 return
  - map의 함수의 첫번째 argument: 진행되고 있는 순서에 맞는 item
  - Each child in a list should have a unique "key" prop.
    - React.js에서 map을 쓸 때 element에 key(고유값)를 줘야함
    - map의 함수의 두번째 argument: index
    ```
    {toDos.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
    ```
    - return li array

### 7.2

- 코인 API
  - https://api.coinpaprika.com/v1/tickers
  - key로 사용할 id가 있어서 index를 불러오지 않아도 됨

### 7.3

- async-await
  ```
  // then 방식
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=${minimum_rating}&sort_by=${sort_by}`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  ```
  ```
  // async-await 방식
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${minimum_rating}&sort_by=${sort_by}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  ```

### 7.4

- React Router
  - npm install react-router-dom
- vscode tip
  - auto import, update dir

### 7.5

- react-router-dom
  - looking url
  - Link
    - 새로고침 없이 다른 페이지로 이동
  - update note
    - Switch -> Routes
    - element prop: 자식 컴포넌트

### 7.6

- useParams
  - url에 있는 변수값
  ```
  const { id } = useParams();
  ```

### 7.7

- github publish
  - npm i gh-pages
    - package.json
    ```
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
    "homepage": "https://userName.github.io/RepoName"
    ```
    - npm run deploy를 했을 때 predeploy 후 deploy가 실행됨

### 7.9

- `${String.slice(0, 235)}...`

### 7.10

- 함수형뿐만 아니라 class 형식도 공부할 것
