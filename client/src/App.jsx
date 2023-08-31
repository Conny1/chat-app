import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Hello } from "./pages/Hello/Hello";
import Chat from "./pages/chat/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
