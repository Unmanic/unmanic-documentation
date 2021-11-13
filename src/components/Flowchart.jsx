import React from 'react';
import PropTypes from 'prop-types';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

class Flowchart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      this.setState({
        Flowchart: require('react-simple-flowchart').default,
      });
    }
  }

  render() {
    const {Flowchart} = this.state;
    const {chartCode, scale = 0.6} = this.props;
    
    const opt = {
        x: 0,
        y: 0,
        'line-width': 2,
        'line-length': 50,
        'text-margin': 10,
        'font-size': 14,
        'font-color': 'black',
        'line-color': 'black',
        'element-color': 'black',
        fill: 'white',
        'yes-text': 'yes',
        'no-text': 'no',
        'arrow-end': 'block',
        scale: 0.7,
        symbols: {
          start: {
            'font-color': 'red',
            'element-color': 'green',
            'font-weight': 'bold',
          },
          end: {
            'font-color': 'red',
            'element-color': 'green',
            'font-weight': 'bold',
          },
        },
        flowstate: {
          runner: { fill: 'pink' },
          external: { fill: 'green' },
        },
      };
  

    if (!ExecutionEnvironment.canUseDOM || !Flowchart) {
      return <div />;
    }

    return (
      <div style={{overflowX: 'scroll'}}>
        <Flowchart options={opt} chartCode={chartCode} />
      </div>
    );
  }
}

Flowchart.propTypes = {
  chartCode: PropTypes.string.isRequired,
  scale: PropTypes.number,
};

export default Flowchart;
