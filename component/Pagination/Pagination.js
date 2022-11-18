import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";


export default function Pagination(props) {
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [pageCount, setpageCount] = useState();
    const [rowsperpage, setRowsperpage] = useState(0)

    useEffect(() => {
        console.log(rowsperpage);
        setRowsperpage(props.rows)
        fetchData()
    }, []);

    useEffect(() => {
        setRowsperpage(props.rows);
    }, [props.rows])

    function fetchData() {
        setData(props.value);
    }

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
        // console.log(selectedPage);
    }
     useEffect(( ) => {
        const offset = currentPage * rowsperpage;
        const currentPageData = data.slice(offset, offset + rowsperpage)
        // props.getData(currentPageData)
        console.log("currentPageData",currentPageData);
        props.setFilteredData(currentPageData);
        setpageCount(Math.ceil(data.length / rowsperpage))
     },[data])
   

    return (
        <>
            {
                rowsperpage >= 0 &&
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />

            }
        </>

    );
}