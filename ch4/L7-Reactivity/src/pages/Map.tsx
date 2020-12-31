import { app, Component } from 'apprun';
import styles from './Map.styles';

declare let d3, topojson;
let map_data;

const createMap = () => {
  const map = document.createElement('div');
  const svg = d3.select(map)
    .classed('svg-container', true)
    .append('svg')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 800 500')
    .classed('svg-content-responsive', true);
  const projection = d3.geoMercator().translate([400, 350]).scale(125);
  const mapGroup = svg.append('g');
  const mapPath = d3.geoPath().projection(projection);
  mapGroup.selectAll('path')
    .data(topojson.feature(map_data, map_data.objects.countries).features)
    .enter()
    .append('path')
    .attr('d', mapPath)
    .attr('class', 'countries');
  return map;
};

export default class MapComponent extends Component {

  view = ({ map })=> <>
    { styles }
    { map }
  </>;

  update = {
    '#Map': async (state) => {
      // map_data is cached at the module level
      if (!map_data) {
        const fetch_map_data = await fetch('https://unpkg.com/world-atlas@1.1.4/world/110m.json');
        map_data = await fetch_map_data.json();
      }
      // map div and svg are cached at the component level
      if (!state.map) {state.map = createMap();}
      return state;
    }
  }
}
