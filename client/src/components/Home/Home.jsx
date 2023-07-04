import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Dogs from '../Dogs/Dogs';
import { useDispatch, useSelector } from 'react-redux';
import { clearDogs, getAllDogs, getAllTemperaments } from '../../redux/action';
import Pagination from '../../Pagination/Pagination';

export const Home = () => {
  const allDogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemperaments());
    return dispatch(clearDogs());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dogsToShow = allDogs.slice(startIndex, endIndex);

  return (
    <div className="Home">
      <Nav />
      <Dogs dogs={dogsToShow} />
      <Pagination
        totalItems={allDogs.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
