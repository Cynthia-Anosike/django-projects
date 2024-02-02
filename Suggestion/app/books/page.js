"use client"
import { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { Dropdown } from "flowbite-react";
import ScrollTop from "@/components/ScrollTop";
import Skeleton from "@/components/Skeleton";
import { Dialog } from 'primereact/dialog';
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function Books() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    // const [seeMore, setSeeMore] = useState(false);
    const [cat, setCat] = useState('');
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const route = useRouter();


    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            }
          };
        try {
            const response = await axios.get('http://127.0.0.1:8080/api/books', options);
            const apiData = response.data;
            setData(apiData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData();
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, []);
    // function to filter the categories
    const groupedData = data.reduce((groups, item) => {
        const category = item.categories[0]; // Assuming categories is an array
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(item);
        return groups;
    }, {});

    const handleSearch = (e) => {
        setSearch(e.target.value);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    };
    //
    // const book = Object.entries(groupedData).slice(0, 10)
    //functions to display the data
    const displayData = Object.entries(groupedData).map(([category, items]) => {

        const titleFilteredItems = items.filter((item) => {
            const searchTerm = search.toLowerCase();
            // const title = item.title.toLowerCase();

            return searchTerm === '' || item.title.toLowerCase().includes(searchTerm);
        });

        const categoryFilteredItems = items.filter((item) => {
            const searchCat = cat.toLowerCase();
            const categories = item.categories.toString();

            return searchCat === '' || categories.toLowerCase().includes(searchCat);
        });
        // setFilt(filteredItems);

        if (titleFilteredItems.length === 0) {
            return null;

            // Return null if there are no matching items for the category
        }
        if (categoryFilteredItems.length === 0) {
            return null;

            // Return null if there are no matching items for the category
        }
        const combinedFilteredItems = [
            ...new Set([...titleFilteredItems, ...categoryFilteredItems])
          ];
        return (
                <div key={category} className="my-8 ">

                    <h1 className="text-2xl text-green-400 font-semibold mb-4 px-[05%]" id={category}>{category}</h1>


                    <hr className="w-[95%] m-[auto] pb-4"></hr>
                    <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pr-5">
                        {combinedFilteredItems.map((item) => (
                            <li key={item.id} className="border border-gray-300 rounded overflow-hidden hover:shadow-lg" onClick={()=> openModal(item)}>
                                <img
                                    src={item.posterUrl}
                                    alt=""
                                    className="w-full h-48 object-cover transition-transform transform hover:scale-105"
                                />
                                <div className="p-3">
                                    <h3 className="text-lg font-semibold text-cyan-500 group-hover:underline">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 font-semibold text-sm text-red-600">{item.authors[0]}</p>
                                    <p className="text-sm text-gray-200">{item.year}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
    );
});
// const categories = Object.keys(groupedData).slice(0, 10);
const handleTest = (e) => {
    setCat(e.target.value);
    setSearch('');
    window.scrollTo({
        top: 0,
        behavior: "instant"
    })
};



const categories = Object.keys(groupedData)
// const extraCategories = Object.keys(groupedData);


const categoryList = (
    <select onChange={handleTest} className="rounded border-2 border-gray-300 sm:mb-0 py-2.5 ps-8 pe-8 shadow-sm text-sm bg-[#03010bb3] text-gray-200 outline-none w-[90vw] md:w-auto lg:w-auto ">
        <option value=''>All categories</option>
        {categories.map((category) => (
            <option className=" text-gray-200" key={category} value={category}>
                {category}
            </option>
        ))}
    </select>
);

const openModal = (item) => {
    setVisible(true)
    setSelectedItem(item)
    document.body.style.overflow = 'hidden'; // Disable scrolling on the body

};

const closeModal = () => {
    setVisible(false)
    setSelectedItem(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling on the body

};


return (
    <div>
        {loading ? 
            <div className="h-[15vh] w-full flex flex-col gap-1 lg:flex-row md:flex-row border-b-2 justify-center items-center fixed z-[999] bg-white top-0 mb-[50px] pb-2 md:pb-0 lg:pb-0" >
               <div className=" h-10 rounded-full bg-gray-200 animate-pulse placeholder-shimmer w-[90vw] md:w-[40%] lg:w-[40%]"></div>
               <div className=" h-10 rounded-full bg-gray-200 animate-pulse placeholder-shimmer w-[90vw] md:w-[30%] lg:w-[30%]"></div>
               {/* <div className="w-[90vw] md:w-auto lg:w-auto animate-pulse placeholder-shimmer bg-gray-200 rounded-full h-10"></div> */}
            </div>
        : (

        <div className=" w-full flex flex-col gap-0 lg:flex-row md:flex-row border-b-2 justify-center items-center fixed z-[999]  bg-[rgb(37,33,41)] top-0 mb-[50px] pb-2 md:pb-0 lg:pb-0" >
            <div className=" h-10 w-10 rounded-full absolute left-3 bg-[url('/arrow-left.svg')] hover:cursor-pointer" onClick={()=> route.push('/hello')}>
            </div>
            <div className="relative p-4 md:p-10 lg:p-20 w-[100vw] md:w-[40%] lg:w-[40%]">
                <label htmlFor="Search" className="sr-only"> Search </label>

                <input
                    type="search"
                    id="Search"
                    name="search"
                    placeholder="Search for Titles"
                    className="w-full placeholder:text-gray-200 rounded-md border-2 border-gray-300 py-2 px-2 md:px-10 lg:px-10 shadow-sm sm:text-sm bg-[#03010bb3] text-gray-200 outline-none"
                    onChange={handleSearch}
                />

            </div>

            {categoryList}

        </div>
        )}

        <div className="overflow-y-auto pt-[150px] md:pt-[100px] lg:pt-[100px] bg-[#03010bcb]">
            {
                loading ? <Skeleton/>
                :
                (displayData)
            }
            
        </div>

        {selectedItem && (
                  <div className={`overlay ${visible ? 'active' : ''}`} onClick={closeModal}>
                <Dialog
                    header={selectedItem.title}
                    visible={visible}
                    // modal={true}
                    
                    resizable={false}
                    showHeader={false}
                    closable={true}
                    closeOnEscape={true}
                    onHide={() => closeModal()}
                    // footer={footer}
                    style={{
                        width: '50vw',
                        boxShadow: '',
                        zIndex: 9999999, // Set your desired z-index value here
                    }}
                    breakpoints={{
                        '960px': '75vw',
                        '641px': '80vw',
                    }}
                >

                    <div className="flex flex-col m-0 text-white h-auto w-auto p-3">                        
                        <span>
                            <h2 className="truncate text-left text-[#00bcd4]">
                                {selectedItem.title}
                            </h2>
                           
                            <p className="m-0">
                                {selectedItem.description}
                            </p>
                            <br/>
                            <p> Author(s): &nbsp;<b className="text-red-500">{selectedItem.authors} </b></p>
                            <p> Publisher: &nbsp;<b className="text-cyan-500">{selectedItem.publisher} </b></p>
                            <p> Published Date: &nbsp;<b className="text-cyan-500">{selectedItem.publishedDate} </b></p>
                        </span>

                        <span className="flex items-center justify-right">
                        <Button variant="gradient" color="blue" size="sm" className="flex items-center gap-2" onClick={() => closeModal()}>
                            Cancel
                            </Button>
                        </span>

                    </div>



                </Dialog>
                </div>

            )
            }

        <ScrollTop></ScrollTop>
    </div>
);
}
