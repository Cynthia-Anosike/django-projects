const Skeleton = () => {
    return ( 
        <div className="my-8 h-fit">
    <h1 className="mb-4 mx-[03%] placeholder-shimmer w-[30%] h-10 rounded-full bg-gray-200 animate-pulse">
    </h1>
    <hr className="w-[95%] m-[auto] pb-4 placeholder-shimmer animate-pulse text-gray-200"></hr>
    <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pr-5 ">
        {Array.from({ length: 8}, (_, index) => (
            <li key={index} className=" border border-gray-300 rounded overflow-hidden hover:shadow-lg placeholder-shimmer animate-pulse">
                <div className="w-full h-40 md:h-45 lg:h-48 bg-gray-200"></div>
                <div className="p-3">
                    <h3 className="w-[50%] h-6 rounded-full bg-gray-100"></h3>
                    <p className="mt-1 w-[40%] h-6 rounded-full bg-gray-100"></p>
                    <p className="w-[30%] h-6 rounded-full bg-gray-100"></p>
                </div>
            </li>
        ))}
    </ul>
</div>
     );
}
 
export default Skeleton;