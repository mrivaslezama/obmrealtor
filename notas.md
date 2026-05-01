Learn how to create a react application using vite, react router dom and tailwindcss
Noor Mohammad
hace 2a


vitejs.dev


npm create vite@latest realtor

React
Javascript

cd realtor

#bash

npm install
npm run dev

App.jsx

<div>
<h1>Simple application</h1>
</div>
min 3.17

npm install -D tailwindcss postcss autoprefixer

#
npx tailwindcss init -p

#tailwind.config.js
content: {
'./index.html',
'./src/**/*.{js,ts,jsx,tsx}'
},



# index.css
erase all

@tailwind base;
@tailwind components;
@tailwind utilities

erase App.css

npm rund dev

#Simple setup


App.jsx

function App(){
return(
<div>
	<h1 className="text-xl text-red-500">Simple application</h1>
</div>
);
}

export default App;

#install 
TailwindCss intelliSence


#delete /assets

grab own assets folder...


/components


routing setting
npm install react-router-dom

 min 8:16


main.jsx


const Layout =()=>{
  return (
    <div>
	  <Header />
	  <Outlet />
	  <Footer />
	</div>
  );
};

const router = createBrowserRouter([{
	path:'/',
	element:<Layout />,
	children: [
	  {
		path:"/",
		element: <App />,
	  },
	  {
		path:"/about",
		element: <About />,
	  },
]
}])


#create an about page...

12:06 min

/src/pages
About.jsx

import React from "react";
import AboutMe from "../components/AboutMe";

const About = () => {
	return (
	  <div className="bg-primaryColor text-gray-200">
		<AboutMe />
	  </div>
	);	
};

export default About;
min 12:53

min 13:26
main:jsx

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>
);


14:25

add link parameter to ... 

<Link to={"/"}>
	<img src={logo} alt="logo" className="w-24" />
</Link>


App.jsx
erase import footer and ... header?
14:37

add link wrapp each Link in the header... Header.jsx
<Link key={link} to={link}>
	<p className="text-sm uppercase text-lightText font-sem...>{title}</p>
</Link>


15:47min

git add .
git commit -m 'initial commit'
git push -u origin master

noorjsdivs

Dios me inspiro a buscar ideas millonarias

testproject
https://vercel.com/kb/guide/deploying-react-with-vercel

https://www.netlify.com/with/react/

https://www.reactbd.com/

https://digitallyschool.com/

https://roju.cl/

https://obminmobiliarios.cl/
