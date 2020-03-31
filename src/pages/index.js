import React, { Component } from "react"
import ContainerCircle from "../components/containerCircle"
import ContainerRounded from "../components/containerRounded"
import ContainerRoundedAssym from "../components/containerRoundedAssym"
import ContainerRectangle from "../components/containerRectangle"
import CountdownClock from "../components/countdownClock"
import Layout from "../components/layout"
import Logo from "../components/logo"
import PlayButton from "../components/playButton"
import Play01 from "../components/play01"
import Play02 from "../components/play02"
import Play03 from "../components/play03"
import Play04 from "../components/play04"
import Play05 from "../components/play05"
import Play06 from "../components/play06"
import SEO from "../components/seo"
import StartButton from "../components/startButton"
import LeftParallelogram from "../components/leftParallelogram"
import RightParallelogram from "../components/rightParallelogram"

class IndexPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPlayButtonId: "Nothing to see here!",
      isPlayOnDeck: false,
      isShowStarted: false,
      lastKeyPress: "",
      play01DisplayStyle: "none",
      play02DisplayStyle: "none",
      play03DisplayStyle: "none",
      play04DisplayStyle: "none",
      play05DisplayStyle: "none",
      play06DisplayStyle: "none",
      play07DisplayStyle: "none",
      play08DisplayStyle: "none",
      play09DisplayStyle: "none",
      play10DisplayStyle: "none",
      play11DisplayStyle: "none",
      play12DisplayStyle: "none",
      play13DisplayStyle: "none",
      play14DisplayStyle: "none",
      play15DisplayStyle: "none",
      totalTimeSeconds: 1,
      totalTimeMinutes: 25,
      isPlay01Completed: false,
      isPlay02Completed: false,
      isPlay03Completed: false,
      isPlay04Completed: false,
      isPlay05Completed: false,
      isPlay06Completed: false,
      isPlay07Completed: false,
      isPlay08Completed: false,
      isPlay09Completed: false,
      isPlay10Completed: false,
      isPlay11Completed: false,
      isPlay12Completed: false,
      isPlay13Completed: false,
      isPlay14Completed: false,
      isPlay15Completed: false
    };
    
  }

  componentDidUpdate(){

  }

  handleEndPlayButtonClick = event => {

    event.preventDefault();
    if (this.state.isTimerOn===false){
      alert("try again");
    }
    else{
      let recentplayid = event.target.attributes.getNamedItem("playid").value
      this.setState({ isPlayOnDeck: false});
      this.setState({ currentPlayButtonId: "Nothing to see here!"});
      if (recentplayid==="play01"){
        this.setState({ play01DisplayStyle: "none" });
        this.setState({isPlay01Completed: true});
      }
      if (recentplayid==="play02"){
        this.setState({ play02DisplayStyle: "none" });
        this.setState({isPlay02Completed: true});
      }
      if (recentplayid==="play03"){
        this.setState({ play03DisplayStyle: "none" });
        this.setState({isPlay03Completed: true});
      }
      if (recentplayid==="play04"){
        this.setState({ play04DisplayStyle: "none" });
        this.setState({isPlay04Completed: true});
      }
      if (recentplayid==="play05"){
        this.setState({ play05DisplayStyle: "none" });
        this.setState({isPlay05Completed: true});
      }
      if (recentplayid==="play06"){
        this.setState({ play06DisplayStyle: "none" });
        this.setState({isPlay06Completed: true});
      }
    }

  }

  handleKeyPress = (event) => {
		
    
      if(event.which === 9){
        console.log("tab")
      }
      if(event.which === 27){
        console.log("esc")
        if (this.state.isPlayOnDeck){
          alert(`You can only close the play window via the "Click to End This Play" button.`)
        }
      }
    

  }

  handlePlayButtonClick = event => {
    event.preventDefault();
    if (this.state.isTimerOn===false){
      alert("Something's wrong. Pretend everything is fine.");
    }

    else{

      let currentplayid = event.target.attributes.getNamedItem("playid").value
      this.setState({ isPlayOnDeck: true});
      this.setState({ currentPlayButtonId: currentplayid });
      if (currentplayid==="play01"){
        this.setState({ play01DisplayStyle: "block" });
      }
      if (currentplayid==="play02"){
        this.setState({ play02DisplayStyle: "block" });
      }
      if (currentplayid==="play03"){
        this.setState({ play03DisplayStyle: "block" });
      }
      if (currentplayid==="play04"){
        this.setState({ play04DisplayStyle: "block" });
      }
      if (currentplayid==="play05"){
        this.setState({ play05DisplayStyle: "block" });
      }
      if (currentplayid==="play06"){
        this.setState({ play06DisplayStyle: "block" });
      }
      if (currentplayid==="play07"){
        this.setState({ play07DisplayStyle: "block" });
      }
      if (currentplayid==="play08"){
        this.setState({ play08DisplayStyle: "block" });
      }
      if (currentplayid==="play09"){
        this.setState({ play09DisplayStyle: "block" });
      }
      if (currentplayid==="play10"){
        this.setState({ play01DisplayStyle: "block" });
      }
      if (currentplayid==="play11"){
        this.setState({ play11DisplayStyle: "block" });
      }
      if (currentplayid==="play12"){
        this.setState({ play12DisplayStyle: "block" });
      }
      if (currentplayid==="play13"){
        this.setState({ play13DisplayStyle: "block" });
      }
      if (currentplayid==="play14"){
        this.setState({ play14DisplayStyle: "block" });
      }
      if (currentplayid==="play15"){
        this.setState({ play15DisplayStyle: "block" });
      }

    }
    
  }

  handleStartButtonClick = event => {
    event.preventDefault();
    if (this.state.isShowStarted){
      alert("Something's not right. Pretend everything is fine.");
    }
    else{
      this.setState({ isShowStarted: true})
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Abtsract: Home" description="Samuel R. Mendez master's thesis presentation on ritual view of communication in public health. Completed for an M.S. degree in Comparative Media Studies at MIT, 2020." />
        <section style={{display: "flex", flexDirection: `column`, overflowX: `hidden`, padding: `.5em`}}>
          <h2 style={{ padding: `.5em 0 1em 0`, textAlign: `center`, textShadow:`-1.5px -1.5px 0 #acee66, 1.5px -1.5px 0 #acee66, -1.5px 1.5px 0 #acee66, 1.5px 1.5px 0 #acee66`}}>Intro</h2>
          <LeftParallelogram bgcolor="#1AE063" fontColor="black">
            <h3 style={{textAlign: `center`}}>Overview</h3>
            <div style={{textAlign: `right`}}>
              <p>Hi! This is the script for the public presentation of my master's thesis in <a href="https://cmsw.mit.edu/">Comparative Media Studies at MIT</a>.</p>
              <p>I'm <a href="https://www.samuelanimates.com/">Samuel R. Mendez</a>. I only use that name in text. I'm an artist and a public health researcher. In my thesis, I look at how the humanities can promote community engagement that can advance health equity.</p>
              <p>In my thesis, I play with various media to give different kinds of insights into health topics. So, I want to try that here as well. Now let's move on to the part where I tell you what's going on here.</p>
            </div>
          </LeftParallelogram>
          <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
          </div>
          <RightParallelogram>
            <h3 style={{textAlign: `center`}}>Description</h3>
            <div style={{textAlign: `left`}}>
              <p>I will try perform 12 plays. They might not resemble any play you've seen before, but they' a're plays. Like I said before, I'm an artist and a scholar. Maybe even a gentleman. I wouldn't lie to you.</p>
              <p>That also means I will not lie in any of these plays. I will not pretend to be anywhere but here at MIT. I will not pretend to be anyone but myself. And I will not pretend to be any-when other than right now. It'll make sense once you experence it, trust me.</p>
              <p>Now let's move on to the instructions. Because at key points I will need you all to participate.</p>
            </div>
          </RightParallelogram>
          <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
          </div>
          <LeftParallelogram bgcolor="#3b0025" fontColor="white">
            <h3 style={{textAlign: `center`}}>Instructions</h3>
            <div style={{textAlign: `right`}}>
              <p>I only have 24 minutes to get through 12 plays. That means I have to <span role="img" aria-label="handclap">👏</span> keep <span role="img" aria-label="handclap">👏</span> things <span role="img" aria-label="handclap">👏</span> on <span role="img" aria-label="handclap">👏</span> track.</p>
              <p>And I need your help. Because I don't know the order of the 12 plays. I don't know the order because you will decide it for me. When I finish one play I will ask you all, "What play would you like to see next?" And you will respond with the number of the play you want to see. Let's try it now. Just pick a random number.</p>
              <p>What play would you like to see next?</p>
              <p>Now let's get started.</p>
            </div>
          </LeftParallelogram>
          <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
          </div>
          <RightParallelogram>
            <h3 style={{textAlign: `center`}}>Getting Started</h3>
            <div style={{textAlign: `left`}}>
              <p>Now I did lie a little bit. But it was just a lie by omission, so it's technically fine. I don't know the order of the plays, but I did already decide which play is first. Play #1 will be first. Shocking. Totally unique. Never been done before.</p>
              <p>But first, I'll give you a chance to look at the numbers and titles of all the plays. Then I'll start the timer. Then I'll perform play #1. And then I'll ask you, "What play would you like to see next?"</p>
            </div>
          </RightParallelogram>
        </section>
        <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
        </div>
        <main style={{ padding: `2em` }}>
         { !this.state.isShowStarted && <section>
              <h2 style={{textAlign: `center`, textShadow:`-1.5px -1.5px 0 #acee66, 1.5px -1.5px 0 #acee66, -1.5px 1.5px 0 #acee66, 1.5px 1.5px 0 #acee66`}}>The Button.</h2>
                <StartButton onClickFunction={this.handleStartButtonClick}/>
            </section>
          }
          <section>
            <h2 style={{textAlign: `center`, textShadow:`-1.5px -1.5px 0 #acee66, 1.5px -1.5px 0 #acee66, -1.5px 1.5px 0 #acee66, 1.5px 1.5px 0 #acee66`}}>The Plays.</h2>
            <div style={{display:`flex`, flexWrap: `wrap`,  justifyContent: `center`}}>
              <ContainerRounded bgcolor="#0000AE" color="white">
                {
                  !this.state.isPlay01Completed && <p><span style={{fontWeight: `700`, textSize: `2em`}}>#1:</span><br/>An honest check-in, more or less</p>
                }
                {
                  this.state.isPlay01Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}><span style={{fontWeight: `700`, textSize: `2em`}}>#1:</span><br/>An honest check-in, more or less</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay01Completed && <PlayButton playid="play01" onClickFunction={this.handlePlayButtonClick} text="Start Play 1"/>
                }
              </ContainerRounded>
              <ContainerCircle bgcolor="#FE9FE6" color="black">
                {
                  !this.state.isPlay02Completed && <p><span style={{fontWeight: `700`, textSize: `2em`}}>#2:</span><br/>Q&amp;A #1</p>
                }
                {
                  this.state.isPlay02Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}><span style={{fontWeight: `700`, textSize: `2em`}}>#2:</span><br/>Q&amp;A #1</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay02Completed && <PlayButton playid="play02" onClickFunction={this.handlePlayButtonClick} text="Start Play 2"/>
                }
              </ContainerCircle>
              <ContainerRectangle bgcolor="#246600" color="white">
                {
                  !this.state.isPlay03Completed && <p><span style={{fontWeight: `700`, textSize: `2em`}}>#3:</span><br/>Q&amp;A #2</p>
                }
                {
                  this.state.isPlay03Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}><span style={{fontWeight: `700`, textSize: `2em`}}>#3:</span><br/>Q&amp;A #2</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay03Completed && <PlayButton playid="play03" onClickFunction={this.handlePlayButtonClick} text="Start Play 3"/>
                }
              </ContainerRectangle>
              <ContainerRoundedAssym bgcolor="#F3FFCC" color="black">
                {
                  !this.state.isPlay04Completed && <p><span style={{fontWeight: `700`, textSize: `2em`}}>#4:</span><br/>Ritual &amp; Transmission</p>
                }
                {
                  this.state.isPlay04Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}><span style={{fontWeight: `700`, textSize: `2em`}}>#4:</span><br/>Ritual &amp; Transmission</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay04Completed && <PlayButton playid="play04" onClickFunction={this.handlePlayButtonClick} text="Start Play 4"/>
                }
              </ContainerRoundedAssym>
              <ContainerRoundedAssym bgcolor="#753002" color="white">
                {
                  !this.state.isPlay05Completed && <p><span style={{fontWeight: `700`, textSize: `2em`}}>#5:</span><br/>A People’s Guide to Precision Medicine</p>
                }
                {
                  this.state.isPlay05Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}><span style={{fontWeight: `700`, textSize: `2em`}}>#5:</span><br/>A People’s Guide to Precision Medicine</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay05Completed && <PlayButton playid="play05" onClickFunction={this.handlePlayButtonClick} text="Start Play 5"/>
                }
              </ContainerRoundedAssym>
              <ContainerRoundedAssym bgcolor="white" color="black">
                {
                  !this.state.isPlay06Completed && <p><span style={{fontWeight: `700`, textSize: `2em`}}>#6:</span><br/>A PEOPLE’S GUIDE TO PRECISION MEDICINE: THE DEVELOPMENT AND DESIGN OF A MEDIA-BASED COMMUNITY ENGAGEMENT PROGRAM,” or “THE CONFERENCE I MADE THIS POSTER FOR GOT CANCELLED AND I SPENT TOO MUCH TIME TURNING A GOOGLE SLIDE INTO A POSTER FOR NO ONE TO SEE IT, SO GUESS WHO’S HOSTING A POP-UP POSTER SESSION~</p>
                }
                {
                  this.state.isPlay06Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}><span style={{fontWeight: `700`, textSize: `2em`}}>#6:</span><br/>A PEOPLE’S GUIDE TO PRECISION MEDICINE: THE DEVELOPMENT AND DESIGN OF A MEDIA-BASED COMMUNITY ENGAGEMENT PROGRAM,” or “THE CONFERENCE I MADE THIS POSTER FOR GOT CANCELLED AND I SPENT TOO MUCH TIME TURNING A GOOGLE SLIDE INTO A POSTER FOR NO ONE TO SEE IT, SO GUESS WHO’S HOSTING A POP-UP POSTER SESSION~</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay06Completed && <PlayButton playid="play06" onClickFunction={this.handlePlayButtonClick} text="Start Play 6"/>
                }
              </ContainerRoundedAssym>
              <ContainerRoundedAssym bgcolor="white" color="black">
                <p><span style={{fontWeight: `700`, textSize: `2em`}}>#7:</span><br/>Nicole</p>
                { this.state.isShowStarted && <PlayButton buttonId="play07" onClickFunction={this.handlePlayButtonClick} text="start Play 7"/> }
              </ContainerRoundedAssym>
            </div>
          </section>
          <section>
            { (this.state.play01DisplayStyle==="block") &&
              <Play01 displayStyle={ this.state.play01DisplayStyle } bgcolor="white" color="black" playid="play01" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
            { (this.state.play02DisplayStyle==="block") &&
              <Play02 displayStyle={ this.state.play02DisplayStyle } bgcolor="white" color="black" playid="play02" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
            { (this.state.play03DisplayStyle==="block") &&
              <Play03 displayStyle={ this.state.play03DisplayStyle } bgcolor="white" color="black" playid="play03" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
            { (this.state.play04DisplayStyle==="block") &&
              <Play04 displayStyle={ this.state.play04DisplayStyle } bgcolor="white" color="black" playid="play04" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
            { (this.state.play05DisplayStyle==="block") &&
              <Play05 displayStyle={ this.state.play05DisplayStyle } bgcolor="white" color="black" playid="play05" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
            { (this.state.play06DisplayStyle==="block") &&
              <Play06 displayStyle={ this.state.play06DisplayStyle } bgcolor="white" color="black" playid="play06" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
          </section>
          { this.state.isShowStarted && <CountdownClock totalTimeSeconds={this.state.totalTimeSeconds} totalTimeMinutes={this.state.totalTimeMinutes} /> }
        </main>
    </Layout>
  )};
}

export default IndexPage
