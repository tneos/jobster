import {HiChevronDoubleLeft, HiChevronDoubleRight} from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import {useSelector, useDispatch} from "react-redux";

const PageBtnContainer = () => {
  const {numOfPages, page} = useSelector(store => store.allJobs);
  const dispatch = useDispatch();

  // Create buttons array, array with length numOfPages
  const pages = Array.from({length: numOfPages}, (_, index) => {
    return index + 1;
  });

  // Placeholders for next and previous page functions
  const nextPage = () => {
    console.log("next page");
  };

  const prevPage = () => {
    console.log("previous page");
  };
  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      {pages.map(pageNumber => {
        return (
          <button type="button" key={pageNumber} onClick={() => console.log("move to next page")}>
            {pageNumber}
          </button>
        );
      })}
      <button type="button" className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
