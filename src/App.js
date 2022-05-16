//the chi de chua noi nhung k sinh ra the trong DOM
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/layout";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            //neu nhu layout = nul thi dung Fragment, va nguoc lai neu k thi dung  mac dinh
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
