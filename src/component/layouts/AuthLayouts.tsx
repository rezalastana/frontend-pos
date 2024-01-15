// import Link from "next/link";

// // make AuthLayouts component with any type props
// const AuthLayouts = (props) => {
//     const { children, title, type } = props;

//     return (
//         <div className="bg-white border border-gray-200 rounded-lg shadow p-5">
//             <div className="flex justify-center items-center min-h-screen">
//                 <div className="W-full max-w-xs">
//                     <h1 className="text-3xl font-bold mb-2 text-blue-600">
//                         {title}
//                     </h1>
//                     <p className="font-medium text-slate-500 mb-8">
//                         Welcome, please enter your details
//                     </p>
//                     {children}
//                     <Navigation type={type} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Navigation = ({ type }) => {
//     if (type === "login") {
//         return (
//             <p className="">
//                 Dont have an account?{" "}
//                 <Link href={"/register"} className="font-bold text-blue-400">
//                     Register
//                 </Link>
//             </p>
//         );
//     } else {
//         return (
//             <p className="">
//                 Already have an account?{" "}
//                 <Link href={"/login"} className="font-bold text-blue-400">
//                     Login
//                 </Link>
//             </p>
//         );
//     }
// };

// export default AuthLayouts;
