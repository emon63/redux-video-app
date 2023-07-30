import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

const Tag = ({ title }) => {
    const dispatch = useDispatch();
    const { tags: selectedTags } = useSelector(state => state.filter);
    const isSelected = selectedTags.include(title) ? true : false;
    const style = isSelected ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
    const handleSelect = (title) => {
        if (isSelected === true) {
            dispatch(tagRemoved(title))
        } else {
            dispatch(tagSelected(title))
        }
    }

    return (
        <div
            onClick={handleSelect}
            className={style}
        >
            {title}
        </div>

    );
};

export default Tag;

//   < !--selected -->
//     <div
//         className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
//     >
//         redux
//     </div>