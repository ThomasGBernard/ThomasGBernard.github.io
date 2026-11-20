import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import ServiceHighlights from "../../containers/serviceHighlights/ServiceHighlights";
import WhyMe from "../../containers/whyMe/WhyMe";
import SelectedWork from "../../containers/selectedWork/SelectedWork";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <ServiceHighlights theme={this.props.theme} />
        <WhyMe theme={this.props.theme} />
        <SelectedWork theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
