import React, { useContext, useEffect, useState } from 'react';
import './styles.scss';
import Loader from '../../components/Loader';
import { AppContext } from '../../contexts/AppContext';
import FilterColumn from './FilterColumn';
import { searchSpaceShuttles } from '../../services/searchService';
import CardsColumn from './CardsColumn';

const Home = () => {

    const [showLoader, setShowLoader] = useContext(AppContext);
    const [filters, setFilters] = useState({});
    const [dataList, setDataList] = useState([]);

    const getAPIData = async (params) => {
        setShowLoader(true);
        try {
            const response = await searchSpaceShuttles(params);
            if (response) {
                const data = response.data.map(({mission_name, launch_year, launch_success, launch_landing = false, links: { mission_patch_small } = {}, mission_id=[]}) => {
                    return {
                        mission_id,
                        mission_name,
                        launch_landing: launch_landing.toString(),
                        launch_success: launch_success.toString(),
                        launch_year,
                        mission_patch: mission_patch_small,
                    }
                })
                setDataList([...data]);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setShowLoader(false);
        }
    }

    useEffect(() => {
        getAPIData();
    }, []);

    useEffect(() => {
        getAPIData(filters);
    }, [filters]);

    return (
        <main className="homepage">
            {showLoader && <Loader />}
            <div className="homepage__filter">
                <div className="homepage__filter__content">
                    <FilterColumn updateDataFilter={setFilters} />
                </div>
            </div>
            <CardsColumn dataList={dataList} />
        </main>
    );
}

export default Home;
