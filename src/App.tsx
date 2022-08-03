import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./Routes";


function App() {
  return (
    <>
      <Layout sidebar={<Sidebar />}>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;

// Note: 'https://github.com/CodeFocusChannel/react-sidebar'
