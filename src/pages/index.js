import React, { Component } from "react"
import CenterRectangle from "../components/centerRectangle"
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
import Play07 from "../components/play07"
import Play08 from "../components/play08"
import Play09 from "../components/play09"
import Play10 from "../components/play10"
import Play11 from "../components/play11"
import Play12 from "../components/play12"
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
      totalTimeSeconds: 0,
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
      isPlay12Completed: false
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
      if (recentplayid==="play07"){
        this.setState({ play07DisplayStyle: "none" });
        this.setState({isPlay07Completed: true});
      }
      if (recentplayid==="play08"){
        this.setState({ play08DisplayStyle: "none" });
        this.setState({isPlay08Completed: true});
      }
      if (recentplayid==="play09"){
        this.setState({ play09DisplayStyle: "none" });
        this.setState({isPlay09Completed: true});
      }
      if (recentplayid==="play10"){
        this.setState({ play10DisplayStyle: "none" });
        this.setState({isPlay10Completed: true});
      }
      if (recentplayid==="play11"){
        this.setState({ play11DisplayStyle: "none" });
        this.setState({isPlay11Completed: true});
      }
      if (recentplayid==="play12"){
        this.setState({ play12DisplayStyle: "none" });
        this.setState({isPlay12Completed: true});
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
        this.setState({ play10DisplayStyle: "block" });
      }
      if (currentplayid==="play11"){
        this.setState({ play11DisplayStyle: "block" });
      }
      if (currentplayid==="play12"){
        this.setState({ play12DisplayStyle: "block" });
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
            <h3 style={{textAlign: `center`}}>Who is this?</h3>
            <div style={{textAlign: `right`}}>
              <p>Hi. I’m <a href="https://www.samuelanimates.com/">Samuel R. Mendez</a>. (I only use that name in writing. This might be the first time I’ve ever said it out loud.)</p>
              <p>This is the script for my presentation of my master’s thesis in <a href="https://cmsw.mit.edu/">Comparative Media Studies at MIT</a>. Its title is, “Health Equity Rituals: A Case for the Ritual View of Communication in an Era of Precision Medicine.” In it, I experiment with various media as ways to offer insights into public health topics. So, I want to try that here as well. Now let’s move onto the part where I tell you what the big idea is.</p>
            </div>
          </LeftParallelogram>
          <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
          </div>
          <RightParallelogram>
            <h3 style={{textAlign: `center`}}>What's the big idea?</h3>
            <div style={{textAlign: `left`}}>
              <p>In my thesis, I spend many pages using many ways to support one big idea: communication isn’t only about information, but also about social roles. And this has big implications for health equity in the US. Especially in an era of precision medicine.</p>
              <p>I use the word “ritual” to describe this view because I like the questions it raises. Who’s at the table? How are they expected to act toward each other? Who’s in what roles? I think these are important questions to ask in public health. Without them, I think US public health researchers risk unintentionally reinforcing social roles that can harm medically underserved communities.</p>
              <p>So I’m 4 paragraphs in, and I recognize there’s already a lot going on. So let’s go over a few key definitions so we’re a little closer to being on the same page.</p>
            </div>
          </RightParallelogram>
          <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
          </div>
          <CenterRectangle bgcolor="#FFEFC2" fontColor="black">
            <h3 style={{textAlign: `center`}}>What do I need to know?</h3>
            <div style={{textAlign: `left`}}>
              <p>I’m going to ask for some help in reading out these definitions to get us started:</p>
              <p><span style={{fontWeight:`700`}}>Health Equity.</span> Health equity is social justice in health. It is justice in access to health opportunities for members of historically disadvantaged groups. (Source: Paula Braveman, 2014). It is the idea that everyone should have the chance to live a healthy life as they see fit, no matter who they are.</p>
              <p><span style={{fontWeight:`700`}}>Medically Underserved Community.</span> a group facing societal, economic, cultural, or linguistic barriers to healthcare. This includes people experiencing homelessness, migrant workers, undocumented immigrants, people with low incomes, people without health insurance, people in geographically isolated areas, gender and sexual minorities, Indigenous communities, people of color, and people with disabilities. This is an expansion of the definition of “medically underserved populations” by the US Bureau of Health Workforce.</p>
              <p><span style={{fontWeight:`700`}}>Precision Medicine.</span> Precision medicine is a budding approach to medicine and disease prevention. It uses data about a person’s genes, lifestyle, medical history, and environment to tailor health care. (Lister Hill National Center for Biome...). As such, it depends on large amounts of data from a large number of patients for analysis. Right now, the concept of precision medicine is more of an aspiration than it is a specific technique.</p>
              <p><span style={{fontWeight:`700`}}>Ritual Communication.</span> In public health, a ritual view of communication focuses on the social structures that a communication process maintains. Public health communication maintains social structures by outlining power dynamics, social roles, expectations, conflicts, and feedback loops around health topics. (This definition draws on the work of James Carey, Stuart Hall, and Nancy Fraser.)</p>
              <p>And now, onto the show.</p>
            </div>
          </CenterRectangle>
          <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
          </div>
        </section>
        <main style={{ padding: `2em` }}>
          <h2 style={{textAlign: `center`, textShadow:`-1.5px -1.5px 0 #acee66, 1.5px -1.5px 0 #acee66, -1.5px 1.5px 0 #acee66, 1.5px 1.5px 0 #acee66`}}>The Show</h2>
          <CenterRectangle bgcolor="white" fontColor="black">
            <h3 style={{textAlign: `center`}}>The Rules</h3>
            <div style={{textAlign: `left`}}>
              <p>This show is called “<span role="img" aria-label="Sparkle emoji">✨</span> Abstract <span role="img" aria-label="Sparkle emoji">✨</span>” (with an emphasis on the sparkle emojis). This is not my thesis. It’s a weird online performance meant to share what I learned through the process of making my thesis. Hopefully, it also paints me as someone who knows what they’re talking about when it comes to health equity and public health community engagement</p>
              <p>This show is inspired by the work of The Chicago Neo-Futurists. As such, it’s made up of 10 short non-fiction plays that I will try to perform in 25 minutes. I don’t know what order these plays will come in. I’m going to need your help for that, so stay on your toes.</p>
              <p>There’s a lot going on, but hopefully things will become clearer as time goes on. And with that, let’s start the timer.</p>
            </div>
            <div>
              { !this.state.isShowStarted &&
                <div style={{textAlign: `center`}}>
                    <StartButton onClickFunction={this.handleStartButtonClick}/>
                </div>
              }
            </div>
          </CenterRectangle>
          <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
          </div>
          <section style={{paddingTop: `2em`}}>
            <h3 style={{textAlign: `center`, textShadow:`-1.5px -1.5px 0 #acee66, 1.5px -1.5px 0 #acee66, -1.5px 1.5px 0 #acee66, 1.5px 1.5px 0 #acee66`}}>The Plays.</h3>
            <div style={{display:`flex`, flexWrap: `wrap`,  justifyContent: `center`}}>
              <ContainerRounded bgcolor="#B3D1FF" color="black">
                {
                  !this.state.isPlay01Completed && <p><span role="img" aria-label="Poop emoji" style={{ textSize: `20px` }}>💩</span><br/>An honest check-in, more or less</p>
                }
                {
                  this.state.isPlay01Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}>An honest check-in, more or less</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay01Completed && <PlayButton playid="play01" onClickFunction={this.handlePlayButtonClick} text="Start Play"/>
                }
              </ContainerRounded>
              <ContainerRectangle bgcolor="#63FF0F" color="black">
                {
                  !this.state.isPlay03Completed && <p><span role="img" aria-label="Poop emoji" style={{ textSize: `20px` }}>👏</span><br/>A moment of appreciation for Barbara Israel</p>
                }
                {
                  this.state.isPlay03Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}>A moment of appreciation for Barbara Israel</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay03Completed && <PlayButton playid="play03" onClickFunction={this.handlePlayButtonClick} text="Start Play"/>
                }
              </ContainerRectangle>
              <ContainerRoundedAssym bgcolor="#F3FFCC" color="black">
                {
                  !this.state.isPlay04Completed && <p><span role="img" aria-label="Speaker emoji" style={{ textSize: `20px` }}>🔊</span><br/>Ritual &amp; Transmission</p>
                }
                {
                  this.state.isPlay04Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}>Ritual &amp; Transmission</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay04Completed && <PlayButton playid="play04" onClickFunction={this.handlePlayButtonClick} text="Start Play"/>
                }
              </ContainerRoundedAssym>
              <ContainerRoundedAssym bgcolor="#FC9855" color="black">
                {
                  !this.state.isPlay05Completed && <p><span role="img" aria-label="Book emoji" style={{ textSize: `20px` }}>📖</span><br/>A People’s Guide to Precision Medicine</p>
                }
                {
                  this.state.isPlay05Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}>A People’s Guide to Precision Medicine</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay05Completed && <PlayButton playid="play05" onClickFunction={this.handlePlayButtonClick} text="Start Play"/>
                }
              </ContainerRoundedAssym>
              <ContainerRoundedAssym bgcolor="#70E2C0" color="black">
                {
                  !this.state.isPlay06Completed && <p><span role="img" aria-label="Laptop emoji" style={{ textSize: `20px` }}>💻</span><br/>A PEOPLE’S GUIDE TO PRECISION MEDICINE: THE DEVELOPMENT AND DESIGN OF A MEDIA-BASED COMMUNITY ENGAGEMENT PROGRAM,” or “THE CONFERENCE I MADE THIS POSTER FOR GOT CANCELLED AND I SPENT TOO MUCH TIME TURNING A GOOGLE SLIDE INTO A POSTER FOR NO ONE TO SEE IT, SO GUESS WHO’S HOSTING A POP-UP POSTER SESSION~</p>
                }
                {
                  this.state.isPlay06Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}>A PEOPLE’S GUIDE TO PRECISION MEDICINE: THE DEVELOPMENT AND DESIGN OF A MEDIA-BASED COMMUNITY ENGAGEMENT PROGRAM,” or “THE CONFERENCE I MADE THIS POSTER FOR GOT CANCELLED AND I SPENT TOO MUCH TIME TURNING A GOOGLE SLIDE INTO A POSTER FOR NO ONE TO SEE IT, SO GUESS WHO’S HOSTING A POP-UP POSTER SESSION~</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay06Completed && <PlayButton playid="play06" onClickFunction={this.handlePlayButtonClick} text="Start Play"/>
                }
              </ContainerRoundedAssym>
              <ContainerRectangle bgcolor="#F8DDB8" color="black">
                {
                  !this.state.isPlay07Completed && <p><span role="img" aria-label="Cycle emoji" style={{ textSize: `20px` }}>🔄</span><br/>A KALEIDOCYCLE!</p>
                }
                {
                  this.state.isPlay07Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}>A KALEIDOCYCLE!</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay07Completed && <PlayButton playid="play07" onClickFunction={this.handlePlayButtonClick} text="Start Play"/>
                }
              </ContainerRectangle>
              <ContainerCircle bgcolor="#FFC4C5" color="black">
                {
                  !this.state.isPlay08Completed && <p><span role="img" aria-label="Eyes emoji" style={{ textSize: `20px` }}>👀</span><br/>A zine</p>
                }
                {
                  this.state.isPlay08Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}><span style={{fontWeight: `700`, textSize: `2em`}}>#6:</span><br/>A zine</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay08Completed && <PlayButton playid="play08" onClickFunction={this.handlePlayButtonClick} text="Start Play"/>
                }
              </ContainerCircle>
              <ContainerRounded bgcolor="#B5BCCF" color="black">
                {
                  !this.state.isPlay09Completed && <p><span role="img" aria-label="Dancer emoji" style={{ textSize: `20px` }}>💃</span><br/>HER Model of Community Engagement</p>
                }
                {
                  this.state.isPlay09Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}>HER Model of Community Engagement</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay09Completed && <PlayButton playid="play09" onClickFunction={this.handlePlayButtonClick} text="Start Play"/>
                }
              </ContainerRounded>
              <ContainerRoundedAssym bgcolor="white" color="black">
                {
                  !this.state.isPlay11Completed && <p><span role="img" aria-label="Smiling cat emoji" style={{ textSize: `20px` }}>😺</span><br/>A taste of a summer workshop</p>
                }
                {
                  this.state.isPlay11Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}>>A taste of a summer workshop</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay11Completed && <PlayButton playid="play11" onClickFunction={this.handlePlayButtonClick} text="Start Play"/>
                }
              </ContainerRoundedAssym>
              <ContainerRoundedAssym bgcolor="white" color="black">
                {
                  !this.state.isPlay12Completed && <p><span role="img" aria-label="Alien emoji" style={{ textSize: `20px` }}>👽</span><br/>The Future of All of Us</p>
                }
                {
                  this.state.isPlay12Completed && <p style={{textDecorationColor: `red`, textDecorationLine: `line-through`, textDecorationStyle: `double`}}>The Future of All of Us</p>
                }
                { 
                  this.state.isShowStarted && !this.state.isPlay12Completed && <PlayButton playid="play12" onClickFunction={this.handlePlayButtonClick} text="Start Play"/>
                }
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
            { (this.state.play07DisplayStyle==="block") &&
              <Play07 displayStyle={ this.state.play07DisplayStyle } bgcolor="white" color="black" playid="play07" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
            { (this.state.play08DisplayStyle==="block") &&
              <Play08 displayStyle={ this.state.play08DisplayStyle } bgcolor="white" color="black" playid="play08" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
            { (this.state.play09DisplayStyle==="block") &&
              <Play09 displayStyle={ this.state.play09DisplayStyle } bgcolor="white" color="black" playid="play09" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
            { (this.state.play10DisplayStyle==="block") &&
              <Play10 displayStyle={ this.state.play10DisplayStyle } bgcolor="white" color="black" playid="play10" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
            { (this.state.play11DisplayStyle==="block") &&
              <Play11 displayStyle={ this.state.play11DisplayStyle } bgcolor="white" color="black" playid="play11" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
            { (this.state.play12DisplayStyle==="block") &&
              <Play12 displayStyle={ this.state.play12DisplayStyle } bgcolor="white" color="black" playid="play12" onKeyDown={ this.handleKeyPress } onClickEndButton={this.handleEndPlayButtonClick}/>
            }
          </section>
          { this.state.isShowStarted && <CountdownClock totalTimeSeconds={this.state.totalTimeSeconds} totalTimeMinutes={this.state.totalTimeMinutes} /> }
        </main>
    </Layout>
  )};
}

export default IndexPage
