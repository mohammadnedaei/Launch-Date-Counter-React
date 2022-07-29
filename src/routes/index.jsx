import {Route, Routes} from "react-router-dom";
import Information from "../pages/Information/Introduction";
import Counter from "../pages/Counter/Counter";
import Introduction from "../pages/Introduction/Introduction";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path={"/"} element={<Information />}/>
            <Route path={"/counter"} element={<Counter />}/>
            <Route path={"/introduction"} element={<Introduction />}/>
        </Routes>
    )
}
export default AppRoutes;