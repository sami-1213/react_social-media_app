import { Route, Routes} from 'react-router-dom';
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Missing from './component/Missing';
import Nav from './component/Nav';
import NewPost from './component/NewPost';
import PostPage from './component/PostPage';
import Editpage from './component/Editpage';
import {DataProvider} from './context/DataContext'

function App() {


  return (
    <div className="App">
      <DataProvider>
        <Header title= "FaceInsta"/>
        <Nav/>
        <Routes>
          <Route path='/' element = { <Home /> } />
          <Route path='post'>
            <Route index element = {<NewPost /> } />
            <Route path=':id' element = {<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={<Editpage />}> </Route>
          <Route path='about' element = {<About />} />
          <Route path='*' element = {<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
