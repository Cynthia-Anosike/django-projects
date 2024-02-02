// this is where i fetched the movies api and exported it to hello/page
// i added a search function to saerch for movies.. ignore it (its still under production)

"use client"
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import MovieIcon from "@mui/icons-material/Movie";
import Loading from "/components/Loading"

export default function Movies() {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [loading, setLoading] = useState(true);
    const [search, setSearchTitle] = useState('')
    // Fetch the movies when the component mounts
    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }
      };
      const fetchData = () =>{
        setTimeout(async () => {
        const response = await fetch("http://127.0.0.1:8080/api/movies", options);
        const data = await response.json();
        setLoading(false)
        // console.log(data)
        const movie = data.filter((file, index, self) => {
          return index === self.findIndex((f) => f.review === file.review)
        }
        
        );
        // console.log(movie)
        setData(movie.slice(0, 40));
      }, 2000)
  
      };
        // console.log(data)
        
      fetchData();
    }, []);
  
  
    const dataPerPage = 8;
    const pageVisited = pageNumber * dataPerPage;
    const init = "https://image.tmdb.org/t/p/w300";
  
    // Calculate the initial displayData without an additional useEffect
    const displayData = data
      // 
      .filter((value) => {
        if (search === ''){
          return value;
        }
        else if (value.title.toLowerCase().includes(search)){
          return value;
      }
        
      } )
      .slice(pageVisited, pageVisited + dataPerPage)
     
      .map((item) => (
        <div className="border-2 h-[auto] w-[20vw] flex flex-col flex-wrap" key={item.title}>
          <span className="h-[80%] rounded w-[100%]">
            <img src={init + item.posterURL} alt="" className="h-[100%] w-[100%] rounded" />
          </span>
          <span className="h-[20%] w-[100%] p-2">
            <h5 className="truncate w-[15rem]">{item.title}</h5>
            <h6 className="text-cyan-300">{item.year}</h6>
          </span>
        </div>
      ));
  
  
  
    const pageCount = Math.ceil(data.length / dataPerPage);
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    return (
        <>{loading ? <Loading /> : (
          <>
          <div className=" flex flex-row mx-[05%] w-[auto] items-center justify-between p-1 text-red-500">
        <h5 className=" h-3 w-fit flex items-center justify-center">
          {" "}
          <b>MOVIES</b> <MovieIcon />
        </h5>
        <h6 className=" h-3 w-fit"> Popular</h6>
        <h6 className=" h-3 w-fit"> Premiere</h6>
        <h6 className=" h-3 w-fit"> Recently added</h6>
      </div>
      <hr className="mx-[05%]" />

        <div className="flex gap-5 flex-col mb-[5%]">

          <input type="text" 
            onChange={(e) => setSearchTitle(e.target.value)}
          ></input>
        <div className="px-[02%] flex flex-wrap items-center justify-center col-span-3 gap-3">
          {displayData}
        </div>
          <ReactPaginate 
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButt"}
        previousLinkClassName={"previous"}
        nextLinkClassaName={"next"}
        disabledClassName={"diasbled"}
        activeClassName={"active"}
        pageClassName={"pageClass"}
        pageLinkClassName={"pageLink"}
        />
      </div>
      </>
        )}

      </>
    );
};