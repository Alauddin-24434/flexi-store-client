import Sidebar from "@/components/DashboardRelated/Sidebar/Sidebar";

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
    return (
      
        <div>
        {/* <!-- component --> */}
        <div className="flex w-screen h-screen text-gray-700">

            {/* <!-- Component Start --> */}
            
            <div className="flex flex-col w-56 border-r border-gray-300">
            <p>Logo</p>
               
             <Sidebar/>

            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
                    <h1 className="text-lg font-medium">Page Title</h1>
                    <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300">
                        Action 1
                    </button>
                    <button className="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300">
                        Action 2
                    </button>
                    <button className="relative ml-2 text-sm focus:outline-none group">
                        <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                        <div className="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                        </div>
                    </button>
                </div>
                <div className="flex-grow p-6 overflow-auto ">
                <main>{children}</main>
                </div>
            </div>
            {/* <!-- Component End  --> */}

        </div>

       
    </div>
    );
};

export default DashboardLayout;