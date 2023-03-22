import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Phone from './Components/Phone/Phone';
import StepsOne from './Components/DisplaySteps/StepsOne';
import Cosmetics from './Components/Cosmetics/Cosmetics';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;




// function Posts() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => setPosts(data))
//   },[])
//   return (
//     <div>
//       <h1>Posts: {posts.length}</h1>
//       {
//         posts.map(post => <Post title={post.title} body={post.body}></Post>)
//       }
//     </div>
//   )
// }

// function Post(props) {
//   return (
//     <div className='posts'>
//       <h3>Title: {props.title}</h3>
//       <p>Body: {props.body}</p>
//     </div>
//   )
// }