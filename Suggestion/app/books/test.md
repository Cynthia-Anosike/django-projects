<div className="my-8 ">
                <h1 className="mb-4 w-10  px-[05%]">{category}</h1>
                <hr className="w-[95%] m-[auto] pb-4"></hr>
                <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pr-5">
                    {combinedFilteredItems.map((item) => (
                        <li key={item.id} className="border border-gray-300 rounded overflow-hidden hover:shadow-lg ">
                            <img
                                src={item.posterUrl}
                                alt=""
                                className="w-full h-48 object-cover transition-transform transform hover:scale-105"
                            />
                            <div className="p-3">
                                <h3 className="text-lg font-semibold text-cyan-800 group-hover:underline">
                                    {item.title}
                                </h3>
                                <p className="mt-1 font-semibold text-sm text-red-600">{item.authors[0]}</p>
                                <p className="text-sm text-gray-600">{item.year}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>