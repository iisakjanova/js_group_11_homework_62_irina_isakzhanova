import {BrowserRouter} from "react-router-dom";

import Site from "./containers/Site/Site";

const App = () => (
    <div className="App">
        <BrowserRouter>
            <Site />
        </BrowserRouter>
    </div>
);

export default App;
