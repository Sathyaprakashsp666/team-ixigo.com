import { useSelector } from 'react-redux';
import { BusCard } from './BusCard';
import { FilterCard } from './FilterCard';
import { NavBar } from './NavBar';
export const QueryPage = () => {
  const data = useSelector((state) => state.busReducer);
  const getId = (id) => {

  }
  return (
    <div style={{ background: '#f2f2f2' }}>
        <NavBar/>
        <FilterCard/>
        {data.isLoading ? <h2>...Loading</h2> : data.routeData?.buses?.map(data=> <BusCard getId={getId} data={data}/>) }
    </div>
  );
};
