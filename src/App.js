import React from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Routes />
            <AnimatedCursor
                innerSize={12}
                outerSize={50}
                color="230, 199, 46"
                outerAlpha={0.2}
                innerScale={0.41}
                outerScale={1}
            />
        </>
    );
};

export default App;
