import { Strip, Title, TypesContainer, TypeItem } from '../../styles/filter.strip.styles.js';

const FilterStrip = ({ types, setSelectedType, selectedType }) => {

  return (
    <Strip>
      <Title>Selected Projects</Title>
      <TypesContainer>{ types.map(type => <TypeItem key={ type } chosen={ selectedType === type } onClick={ () => setSelectedType(type) }>{ type.toUpperCase() }</TypeItem>) }</TypesContainer>
    </Strip>
  );
};

export default FilterStrip;