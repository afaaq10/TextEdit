import React from 'react';
import { Container } from './components/styles/Container'
import { StyledHeader, Nav, Logo, Image } from './components/styles/header.styled'
import { Flex } from './components/styles/flex.styled'
import { Button } from './components/styles/button.styled'
import content from './content'
import Card from './components/Card'
import Footer from './components/Footer'
import hudd from './components/img/hudd.png'
import hudd2 from './components/img/ill.svg'
// import Header from './components/Header'
// import GlobalStyle from './components/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    body: 'blue',
    footer: 'pink',
  },
  mobile: '768px',

}


// import Counter from './Counter'
// import { useState, useEffect, useCallback } from 'react'
// import MoviesList from './components/MoviesList';
// import AddMovie from './components/AddMovie';




function App() {


  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchMoviesHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch('https://react-app-3a577-default-rtdb.firebaseio.com/movies.json');
  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const data = await response.json();

  //     const loadedMovies = [];

  //     for (const key in data) {
  //       loadedMovies.push({
  //         id: key,
  //         title: data[key].title,
  //         openingText: data[key].openingText,
  //         releaseDate: data[key].releaseDate,
  //       });
  //     }

  //     setMovies(loadedMovies);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);

  // async function addMovieHandler(movie) {
  //   const response = await fetch('https://react-app-3a577-default-rtdb.firebaseio.com/movies.json', {
  //     method: 'POST',
  //     body: JSON.stringify(movie),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // }

  // let content = <p>Found no movies.</p>;

  // if (movies.length > 0) {
  //   content = <MoviesList movies={movies} />;
  // }

  // if (error) {
  //   content = <p>{error}</p>;
  // }

  // if (isLoading) {
  //   content = <p>Loading...</p>;
  // }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {/* <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section> */}
        {/* <Counter /> */}

        {/* <GlobalStyle /> */}
        <StyledHeader >
          <Container >
            <Nav>
              <Logo src={hudd} alt='image huddle' />
              <Button>Try it free</Button>
            </Nav>


            <Flex>
              <div>
                <h1>Build the community your fans will love</h1>
                <p>loresbasjhsahvsavsaasnas
                asnksasasn
              ajaskjasnas ahsbahsahsb
              asajsajsbasas asdasdas
              asd asdasdasdasd
              as asdasidjasdaskna
              as asuosyedabs.,amwpdwedvaxaspash</p>
                <Button bg="pink">My button</Button>
              </div>
              <Image src={hudd2} alt='imagehere' />

            </Flex>

            {content.map((item, index) => <Card key={index} item={item} />)}

          </Container>
          <Footer />

        </StyledHeader>




      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;



























// import React from 'react'
// import { useState } from 'react'
// // import Alert from './components/Alert'
// // import Home from './components/Home'

// // import { createContext, useReducer, useState } from 'react'


// // const FirstName = createContext();


// function App() {

// const movie=[
//   {
//     name:'Afaaq',
//     age:26
//   }
// ]



//   const [st, setSt] = useState('')
//   const [clt, cltSt] = useState([])
//   const [isLoading, setIsLoading] = useState(false)

//   async function fetchMovies() {
//     const result = await fetch('https://swapi.dev/api/people/1/')
//     setIsLoading(true)
//     const x = await result.json()
//     setSt(x)
//     setIsLoading(false)


//   }


// async function postMethod(movie){
//  const fetched=await fetch('https://react-app-3a577-default-rtdb.firebaseio.com/movies.json',{
//    method:'POST',
// body:JSON.stringify(movie),
// headers:{
//   'Content-Type':'application/json'
// }
//  })
//  const data=await fetched.json()
//  console.log(data)


// }


//   const end = () => {
//     cltSt("")
//     if (st == '') {
//       alert('Fetch something first')
//     }
//     setSt('')
//   }













//   // const reducer = (state, action) => {
//   //   if (action.type === "INCREMENT") {
//   //     return state + 1

//   //   }
//   //   else if (action.type === "darkMode") {

//   //     const a = document.body.style.backgroundColor = 'black';
//   //     changeAc(' ')


//   //   }
//   //   else if (action.type === "lightMode") {
//   //     console.log('added')



//   //     const a = document.body.style.backgroundColor = 'white';


//   //   }
//   //   else {
//   //     return state - 1
//   //   }
//   // }

//   // const initialState = 0;
//   // const [ac, changeAc] = useState('disabled')

//   // const [state, dispatch] = useReducer(reducer, initialState)


//   // const [text, setText] = useState("");
//   // const [text2, setText2] = useState("");
//   // const [arr, setArr] = useState([]);

//   // const submit = (prev) => {
//   //   if (!text) {
//   //     return

//   //   }
//   //   else {
//   //     setArr((prev) => [...prev, text, text2])
//   //     setText("")
//   //     setText2("")

//   //   }

//   // }
//   // const Delete = (id) => {
//   //   const a = arr.filter((e, idf) => {
//   //     return id !== idf;

//   //   })
//   //   setArr(a)
//   // }


//   return (

//     <div id="main">



//       <button onClick={fetchMovies}>Fetch StarWar details</button>
//       <button onClick={end}>Cls</button>
//       {!isLoading &&
//         <div>


//           <ul style={{ listStyle: 'none', color: "blue" }}>
//             <li>{st.name}</li>
//             <li>{st.height}</li>
//             <li>{st.mass}</li>
//             <li>{st.hair_color}</li>
//             <li>{st.skin_color}</li>
//           </ul>
//         </div>}
//       {isLoading &&
//         <p id="para" style={{ color: 'blue' }}>Loading...</p>
//       }
// <input type="text" ref={name} id='nameID'/>
// <input type="text" ref={age} id='ageId'/>
// <input type="submit"  onClick={postMethod}/>


//       {/* <FirstName.Provider value="Afaaq">
//         <Alert />
//         <Home />
//       </FirstName.Provider>
//       <div className="container mx-auto my-2 ">


//         <h1> {state}
//         </h1>
//       </div>
//       <div className="container mx-5 my-2">
//         <button className="mx-2 btn btn-primary" onClick={() => { dispatch({ type: "INCREMENT" }) }}>Increment</button>
//         <button className=" btn btn-danger" onClick={() => { dispatch({ type: "DECREMENT" }) }}>Decrement</button>
//         <button className=" btn btn-primary mx-1" onClick={() => { dispatch({ type: "darkMode" }) }}>Enable DarkMode</button>
//         <button className={`btn btn-primary mx-1 ${ac}`} onClick={() => { dispatch({ type: "lightMode" }) }}>Disable DarkMode</button>
//       </div> */}

//     </div>








//   )
// }
// export default App


// {/* // export {FirstName} */ }





// {/* //  <div>
//     //   <div className="container ">
//     //     <div class="mb-3 mt-5 mx-auto " style={{ width: "300px" }} >
//     //       <label for="exampleInputEmail1" class="form-label">Name</label>
//     //       <input value={text} onChange={(e) => setText(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

//     //     </div>
//     //     <div class="mb-3 mt-5 mx-auto " style={{ width: "300px" }} >
//     //       <label for="exampleInputEmail1" class="form-label">Age</label>
//     //       <input value={text2} onChange={(e) => setText2(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

//     //     </div>
//     //     <div class="mb-3 mx-auto" style={{ width: "300px" }}>

//     //       <button type="submit" onClick={submit} class="btn btn-primary mt-2 ">Submit</button>

//     //       <div id="div-box" class="mt-2"> */}

// {/* {arr.map((e, ind) => { */ }

// {/* //           return (
//     //             <div class="container ">

//     //               <div class="container d-flex mt-4" style={{ border: '2px dotted red', borderRadius: '25px', backgroundColor: 'pink' }}>


//     //                 <p id={ind} class="fs-3  "> {e}</p>
//     //                 <button class="btn btn-sm btn-danger mt-1 p-2 position-absolute start-50" type="submit" onClick={() => Delete(ind)}>Delete</button>


//     //               </div>

//     //             </div>



//     //           )

//     //         })} */}

// {/* </div> */ }


// {/* //     </div>

//     //   </div> */}






















































//              // import React from 'react'
// // import {useState} from 'react'
// // function App(props) {


// //   const [text, setText] = useState("");
// //   const [st, setSt] = useState([]);

// //   const submit = () => {
// //     if (!text || text === "hotty") {
// //       alert("Cuss word found")

// //     }
// //     else {
// //       setSt([...st, text])
// //       setText("")
// //     }
// //   }
// //   const Delete = (id) => {

// //     const up = st.filter((p, ind) => {
// //       console.log('deleted', p)
// //       return (id != ind)
// //     }
// //     )
// //     setSt(up)
// //   }

// //   return (
// //     <div>

// //       <div className="container ">
// //         <div class="mb-3 mt-5 mx-auto " style={{ width: "500px" }} >
// //           <label for="exampleInputEmail1" class="form-label">Email address</label>
// //           <input value={text} onChange={(e) => setText(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

// //         </div>
// //         <div class="mb-3 mx-auto" style={{ width: "500px" }}>
// //           {/* <label for="exampleInputPassword1" class="form-label">Password</label>
// //           <input value={pass} onChange={change2} type="password" class="form-control" id="exampleInputPassword1" /> */}
// //           <button onClick={submit} type="submit" class="btn btn-primary mt-2 ">Submit</button>

// //           <div id="div-box" class="mt-2">
// //           </div>
// //           <div id="div-box2">
// //             {st.map((el, ind) => {
// //               return (
// //                 <>
// //                   <h1 id={ind}>Items: {el}</h1>
// //                   <button onClick={() => Delete(ind)} type="submit" class="btn btn-primary mt-2 ">Delete</button>
// //                 </>
// //               )

// //             })}



// //           </div>

// //         </div>









// //       </div>


// //     </div>
// //   )
// // }


// // export default App
