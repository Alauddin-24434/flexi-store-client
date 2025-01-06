import Navbar from "@/components/Shared/Navbar/Navbar";

const layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
             <main>{children}</main>
        </div>
    );
};

export default layout;