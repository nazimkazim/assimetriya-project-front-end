import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from '../../styles/Home.module.scss';

const MapComponent = () => {

  return (
    <YMaps>
      <div className={ styles.map }>
        <Map
          height='100%'
          width='100%'
          defaultState={ { center: [43.260147, 76.956882], zoom: 20 } }
          balloon={ "true" }
        >
          <Placemark
            geometry={
              [43.260147, 76.956882]
            }
            properties={ {
              balloonContent: 'Architecture company',
              hintContent: 'Asimmetriya agency',
            } }
            modules={ ["geoObject.addon.balloon", "geoObject.addon.hint"] }
          />
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;