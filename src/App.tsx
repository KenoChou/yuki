import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectPage from "./pages/CollectPage";
import SearchPage from "./pages/SearchPage";
import CategoriesPage from "./pages/CategoriesPage";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", icon: "home", label: "Home" },
    { path: "/collect", icon: "library_add", label: "Collect" },
    { path: "/search", icon: "search", label: "Search" },
    { path: "/categories", icon: "category", label: "Categories" },
  ];

  return (
    <nav className="w-60 border-r p-4">
      <h1 className="text-xl font-bold mb-6">Yuki</h1>

      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`block p-2 rounded ${
            location.pathname === item.path
              ? "bg-gray-200"
              : ""
          }`}
        >
          {item.label}
        </Link>
      ))}

      <button
        className="mt-8 border px-4 py-2 rounded"
        onClick={() => navigate("/collect")}
      >
        Start Organizing
      </button>
    </nav>
  );
}



export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collect" element={<CollectPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </main>

     
      </div>
    </BrowserRouter>
  );
}