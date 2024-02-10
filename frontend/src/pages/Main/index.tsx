import './styles.css';
import Header from '../../components/Header';
import FeiraCard from '../../components/FeiraCard';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import Feira from '../../types/Feira';

function Main() {
  const [allFeiras, setAllFeiras] = useState<Feira[]>([]);

  async function loadFeiras() {
    try {
      const res = await api.get('/feiras');

      setAllFeiras([...res.data]);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadFeiras();
  }, []);

  return (
    <div className='container'>
      <Header showBack={false} />
      <div className='main-feiras'>
        {
          allFeiras.map((feira) => (
            <FeiraCard
              key={feira.id}
              feira={feira}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Main;
