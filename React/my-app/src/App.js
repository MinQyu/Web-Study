import Detail from "./route/Detail";
import Home from "./route/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/movie/:id" element={<Detail />}></Route>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            </Routes>
        </Router>
    );
}
//sitch는 routes로 바뀜, Route 태그 안에서 컴포넌트 호출 x -> element 요소에 삽입. process.env.PUBLIC_URL추가
export default App;
