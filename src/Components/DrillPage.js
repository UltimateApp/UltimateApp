import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Animation from './Animation';
import AnimationEditor from './AnimationEditor';
import { WebView } from 'react-native-webview';
import DrillSquare from './DrillSquare';

        
const contentContainerFlex = 6;
const stepContainerFlex = 4;

class DrillPage extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            currentStep: props.route.params.drill.steps[0],
        };
    }


    render() {
	//        const drill = this.props.route.params.drill;
	const drill = new DrillSquare();
        const currentStep = this.state.currentStep;

        return (
            <View style={styles.main_container}>
		<View style={styles.content_container}>
                	        <AnimationEditor animation={currentStep.animation} heightRatio={stepContainerFlex/(contentContainerFlex+stepContainerFlex)} widthRatio={1} editable={true}/>	

{/*	        <Animation animation={currentStep.animation} heightRatio={stepContainerFlex/(contentContainerFlex+stepContainerFlex)} widthRatio={1} editable={false} drill={drill}/> 
          <WebView source={{ uri: 'https://www.youtube.com/embed/oN1bzPCKkGE' }} style={{ marginTop: 20 }} />
                   currentStep.animation ? <Animation animation={currentStep.animation}/>
                   : currentStep.video ? <Text>Soon a Video here</Text>
                   : currentStep.webview ? <Text>Soon a Webpage here</Text>
                   : <Text>No visual content for this step</Text> */}
              </View>
{/*              <View style={styles.steps_list}>
                <FlatList
            data={drill.steps}
            // keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.step, currentStep == item ? styles.current_step : styles.other_step]}
                onPress={() => this.setState({ currentStep: item })}
              >
                <Text style={styles.title_text}>{item.title}</Text>
                <Text style={styles.description_text}>{item.subtitle}</Text>
              </TouchableOpacity>
            )}
            onEndReachedThreshold={0.5}
            onEndReached={() => {}}
          />
          </View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  item_container: {
    flex: 1,
  },
  content_container: {
    flex: contentContainerFlex,
  },
  steps_list: {
    flex: stepContainerFlex,
    backgroundColor: 'lightgrey',
  },
  step: {
    backgroundColor: 'lightgrey',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  current_step: {
    backgroundColor: 'white',
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 169,
    margin: 5,
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15,
  },
});

const mapStateToProps = (state, props) => {
  return {
    favoritesFilm: state.favoritesFilm,
  };
};

export default connect(mapStateToProps)(DrillPage);
