import Link from "next/link";

const Navbar=()=>{
    return(
        <div className='container bg-white drop-shadow-2xl w-full h-full'>
        <div className='flex justify-center items-center p-6 gap-20 text-green-600 font-bold'>
            <Link  href='/'><h1 className="font-bold text-green-950 italic">YardStick</h1></Link>
                <p><Link className="hover:underline hover:decoration-cyan-500 hover:decoration-4 " href='/transactionList'>Transaction List</Link></p>
                <p><Link className="hover:underline hover:decoration-cyan-500 hover:decoration-4"  href='/barChart'>Bar Chart</Link></p>
           
        </div>
        </div>
    )
}
export default Navbar;