import React, { Component } from "react";
import { View } from "react-native";
import { VictoryCandlestick } from "victory-native";
import ChartControls from "../components/chart-controls";
import DataToggle from "../components/toggle-control";
import { defaultPropMap } from "../utils/props";
import { styles } from "../utils/styles";

export default class VictoryCandlestickExample extends Component {
  static displayName = "VictoryCandlestickExample";

  constructor(props) {
    super(props);
    this.handleDatasetChange = this.handleDatasetChange.bind(this);
    this.state = {
      selectedDatasetIndex: 0,
    };
  }

  render() {
    const { selectedDatasetIndex } = this.state;
    const props = defaultPropMap.VictoryCandlestick;
    const { data, ...other } = props;

    return (
      <View style={styles.container}>
        <View style={styles.chartWrapper}>
          <VictoryCandlestick
            animate={{ duration: 400 }}
            data={data[selectedDatasetIndex]}
            {...other}
          />
        </View>
        <ChartControls>
          <DataToggle
            onChange={this.handleDatasetChange}
            selectedIndex={selectedDatasetIndex}
          />
        </ChartControls>
      </View>
    );
  }

  handleDatasetChange(ev) {
    this.setState({
      selectedDatasetIndex: ev.nativeEvent.selectedSegmentIndex,
    });
  }
}