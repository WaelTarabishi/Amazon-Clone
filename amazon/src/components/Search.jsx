import { useState, useEffect, useRef } from "react"
import CallAPI from '../utils/CallApi'
import { createSearchParams, useNavigate } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {

    //! DROP DONW
    const [selectedOption, setSelectedOption] = useState("All");
    const [isOpen, setIsOpen] = useState(false);
    const options = ["All", "Deals", "Amazon", "Fashion", "Computers", "Home", "Mobiles"];
    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };


    //!!suggestions
    const [suggestions, setsuggestions] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const onHandleSubmit = (e) => {
        e.preventDefault();
        e.key === ""
        navigate({
            pathname: "search",
            search: `${createSearchParams({
                category: `${selectedOption}`,
                searchTerm: `${searchTerm}`,
            })}`,
        });
        setSearchTerm("");
    };
    const getSuggestions = () => {
        CallAPI(`data/suggestions.json`).then((suggestionReslt) => {
            setsuggestions(suggestionReslt)
        })
    }
    useEffect(() => {
        getSuggestions()
    }, [])
    return (
        <div className="w-[100%]  flex-col justify-center  items-center"     >
            <div className="w-[100%] focus-within:outline outline-[#e29632]  rounded ">
                <div className="flex items-center h-10 bg-amazonclone-yellow  rounded  ">
                    {/* Start DropDown Menu */}
                    <div className="relative inline-block  ">
                        <div>
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="cursor-pointer flex items-center justify-between bg-gray-100  border border-gray-300 text-gray-900 rounded-l-[4px] p-[7.2px]  "
                            >
                                <span >{selectedOption}</span>
                                <ArrowDropDownIcon className="w-4 h-" />

                            </div>
                        </div>
                        {isOpen && (
                            <div className="absolute z-10 mt-2  bg-white border border-gray-300 rounded-md">
                                {options.map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => handleSelectOption(option)}
                                        className="px-4 py-2 cursor-pointer text-black  hover:bg-gray-100"
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                    {/* End DropDown Menu */}

                    <input className="flex items-center h-[100%]  grow  outline-none pl-2  text-black" type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                    <button className="flex pr-3 pl-3  flex-[0.01]" onClick={onHandleSubmit} >
                        <SearchIcon className=" text-[40px] m-auto font-bold text-black" />
                    </button>
                </div>
            </div >
            {
                suggestions && (
                    <div className="bg-white text-black w-full z-40 absolute ">
                        {suggestions
                            .filter((suggestion) => {
                                const currentSearchTerm = searchTerm.toLowerCase();
                                const title = suggestion.title.toLowerCase();
                                return (
                                    currentSearchTerm &&
                                    title.startsWith(currentSearchTerm) &&
                                    title !== currentSearchTerm
                                );
                            })
                            .slice(0, 10)
                            .map((suggestion) => (
                                <div
                                    key={suggestion.id}
                                    onClick={() => setSearchTerm(suggestion.title)}
                                    className="border-b-2"
                                >
                                    {suggestion.title}
                                </div>
                            ))}
                    </div>
                )
            }
        </div >


    )
}

export default Search