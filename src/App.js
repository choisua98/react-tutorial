import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";

function App() {
  const [posts, setPosts] = useState([
    {
      id: uuid(),
      title: "1제목입니다.",
      content: "1내용입니다.",
      author: "1작성자입니다.",
    },
    {
      id: uuid(),
      title: "2제목입니다.",
      content: "2내용입니다.",
      author: "2작성자입니다.",
    },
    {
      id: uuid(),
      title: "3제목입니다.",
      content: "3내용입니다.",
      author: "3작성자입니다.",
    },
  ]);
  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<>수정페이지</>} />
      <Route path="/signup" element={<>회원가입페이지</>} />
      <Route path="/login" element={<>로그인페이지</>} />
    </Routes>
  );
}

export default App;
