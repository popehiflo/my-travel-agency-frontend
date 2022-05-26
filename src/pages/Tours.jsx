import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styledComponents from 'styled-components';
// import ToursGrid from '../components/ToursGrid';
import ToursGridFilter from '../components/ToursGridFilter';
// import { getAllTours } from '../dataFake';

const ToursWrapper = styledComponents.section`
  padding-top: 8rem;
`;

const WrapperForm = styledComponents.div`
  width: 80%;
  margin: 1rem auto;
  background: var(--color-bg-white);
  border: var(--border-primary);
  border-radius: var(--border-radius);
  -webkit-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
  padding: 3rem 2rem;
`;

const FilterForm = styledComponents.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 1.5rem;
  .inputBox {
    flex: 1 1 25rem;
    label {
      font-size: 1.4rem;
      color: var(--color-secondary);
      input,select {
        width: 100%;
        padding: 0.8rem 2rem;
        border: var(--border-primary);
        border-radius: var(--border-radius-btn-primary);
        font-size: 1.7rem;
        color: var(--color-secondary);
        margin-top: 1rem;
      }
    }
  }
  .btn-primary {
    flex: 1 1 15rem;
  }
`;

// TODO: Add tours filter by category, pagination and sorting
// FIXME: Temporal component to show the tours grid
const Tours = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const categoryName = category.replace('-', ' ');
  const [filters, setFilters] = useState({});
  const [order, setOrder] = useState('desc');
  const handlerFilters = (e) => {
    const { value } = e.target;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  // const dataServer = getAllTours();
  // const [tours, setTours] = useState(dataServer);
  // const filterResult = (cat) => {
  //   setTours(dataServer.filter((tour) => tour.category === cat));
  // };
  return (
    <ToursWrapper id="tours">
      <div className="heading">
        <span>Looking for</span>
        <h1 style={{ textTransform: 'uppercase' }}>
          {categoryName}
        </h1>
        <span>type Tours</span>
      </div>
      <WrapperForm>
        <FilterForm>
          <div className="inputBox">
            <label htmlFor="selectcountry">
              where?
              <select defaultValue="" name="country" onChange={handlerFilters} id="selectcountry">
                <option value="" disabled>COUNTRY</option>
                <option>peru</option>
                <option>bolivia</option>
                <option>ecuador</option>
              </select>
            </label>
          </div>
          <div className="inputBox">
            <label htmlFor="selectlevel">
              activity level
              <select defaultValue="" name="level" onChange={handlerFilters} id="selectlevel">
                <option value="" disabled>ACTIVITY LEVEL</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
                <option value="very-high">Very High</option>
              </select>
            </label>
          </div>
          <div className="inputBox">
            <label htmlFor="selectorder">
              sort by duration:
              <select type="select" name="order" onChange={(e) => setOrder(e.target.value)} id="selectorder">
                <option value="asc">ascending</option>
                <option value="desc">descending</option>
              </select>
            </label>
          </div>
          <button type="button" className="btn-primary">search now</button>
          {/* <button type="button" className="btn-primary" onClick={()=>filterResult('adventure')}>
            test filter
          </button>
          <button type="button" className="btn-primary" onClick={() => setTours(dataServer)}>
            all Tours
          </button> */}
        </FilterForm>
      </WrapperForm>
      <ToursGridFilter category={category} filters={filters} order={order} />
    </ToursWrapper>
  );
};

export default Tours;
