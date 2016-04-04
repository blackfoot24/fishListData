var React = require('react');
var ReactDom = require('react-dom');
var NavBar = require('./navbar');
var Footer = require('./footer');
var Welcome = require('./welcome');
var Cookies = require('./cookies');
var Bears = require('./bears');
var Switch = require('./switch');
var Beer = require('./beer');
var FishApp = require('./fishapp');
var Notifier = require('./notifier');



require('./stylesheets/main.scss')


var App = React.createClass({

  getInitialState: function() {
    return {
      activeComponent: 'welcome'
    }
  },

  setActiveComponent: function(componentName) {
    console.log("Found Comp: ", componentName);
    this.setState({
      activeComponent: componentName
    })
  },

  showWhichComponent: function(){
  
    switch(this.state.activeComponent) {
        case 'welcome':
            return <Welcome/>
            break;

        case 'cookies':
            return <Cookies/>
            break;

        case 'bears':
            return <Bears/>
            break;

        case 'switch':
            return <Switch/>
            break;

        case 'beer':
            return <Beer/>
            break;

        case 'fish':
            return <FishApp/>
            break;

        default:
            return <Welcome/>

        };
      },

  render: function() {
    return (
      <div>
        <Notifier>
          <NavBar setActiveComponent={this.setActiveComponent} />
            <div>
              {this.showWhichComponent()}
            </div>
          <Footer />
        </Notifier>
      </div>
      )
  }
});

ReactDom.render(
  <App />, document.getElementById('app')
);
