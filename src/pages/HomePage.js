import React from 'react';
import Article from '../components/Article'


const articles = [
    {
        id:1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, exercitationem quaerat? Veritatis fugit inventore, voluptatem reprehenderit repellendus placeat facilis molestias, maxime neque perspiciatis, omnis praesentium aspernatur laudantium error minima nemo!"
    },
    {
        id:2,
        title: "Czym jest Paradoks?",
        author: "Jan Kowalski",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum perspiciatis, accusamus laborum inventore, aut delectus sit quam explicabo vel doloribus veniam ducimus, fugit ex cumque sed odit reiciendis earum! Quibusdam!"
    },
    {
        id:3,
        title: "Czym jest Ciemna Energia?",
        author: "Anna Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex temporibus delectus architecto officia tenetur, accusantium id cum! Quo, magnam error. Voluptatem sapiente veritatis, nemo fuga aperiam ut incidunt deleniti."
    },
]
 const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
     return ( 
         <div className="home">
             {artList}
         </div>
      );
 }
  
 export default HomePage;