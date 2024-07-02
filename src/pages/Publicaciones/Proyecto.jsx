import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

const Proyecto = (props) => {
  return (
    <div className="transition duration-300 transform rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
      <div className="relative">
        <img
          className="object-cover w-full rounded-t h-80"
          src={props.image}
          alt=""
        />
      </div>
      <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-primary">
          {props.title}
        </h5>
        <p className="mb-5 text-primary">{props.description}</p>
        {/* <button
              type="submit"
              className="inline-flex bg-pink-700 items-center justify-center h-12 px-6 font-medium tracking-wide text-primary transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Link
            </button> */}
        <div className="inline-flex justify-center items-center">
          <a target="_blank" href={`${props.url}`}>
            <BiLinkExternal
              // className="text-primary dark:icon-side dark:hover:neonText cursor-pointer hover:animate-pulse"
              className="text-primary dark:hover:icon-side cursor-pointer dark:hover:animate-pulse"
              size={25}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
