import { Strip, Title, TypesContainer, TypeItem } from './FilterStrip.styles';

const FilterStrip = ({ types }) => {
  return (
    <Strip>
      <Title>Selected Projects</Title>
      <TypesContainer>{ types.map(type => <TypeItem>{ type }</TypeItem>) }</TypesContainer>
    </Strip>
  );

};

export default FilterStrip;