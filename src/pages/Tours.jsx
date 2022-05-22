import React from 'react';
import styledComponents from 'styled-components';
import ToursGrid from '../components/ToursGrid';
import { getAllTours } from '../dataFake';

const ToursWrapper = styledComponents.section`

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
  const tours = getAllTours();
  return (
    <ToursWrapper id="tours">
      <div className="heading">
        <span>BUSCA TUS TOURS</span>
        <h1>CATEGORY 1 TOURS</h1>
      </div>
      <WrapperForm>
        <FilterForm>
          <div className="inputBox">
            <label htmlFor="inp01">
              where to?
              <input type="text" placeholder="place name" value="" id="inp01" />
            </label>
          </div>
          <div className="inputBox">
            <label htmlFor="inp02">
              when?
              <select type="select" value="" id="inp02">
                <option disabled selected>
                  Color
                </option>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
              </select>
            </label>
          </div>
          <div className="inputBox">
            <label htmlFor="inp03">
              how many?
              <input type="number" placeholder="number of travelers" value="" id="inp03" />
            </label>
          </div>
          <input type="submit" value="find now" className="btn-primary" />
        </FilterForm>
      </WrapperForm>
      <ToursGrid tours={tours} />
    </ToursWrapper>
  );
};

export default Tours;
