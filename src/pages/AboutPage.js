import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Button from 'react-bootstrap/Button';


 class AboutPage extends React.Component {
    constructor(props){
        super(props);
    }

    state = {selected:false}

    changeVersion =() =>{
        this.setState({selected: !this.state.selected});
        versionName = !this.state.selected ? "English Version" : "中文版"
    }



    render() {
        return(
            <div className="about-page">
                <Hero title={this.props.title} />
                <Button variant="success" onClick={this.changeVersion} className="about-Button">{versionName}</Button>
                {this.state.selected ? ChArticle : EnArticle}
                
            </div>
        )
    }
   
} 


let versionName = "中文版";

const EnArticle = (
    <Content>
            <p>
            <strong>C</strong>oming Soon...
            </p>

        
    </Content>
)

const ChArticle = (
    <Content>
        <p>
         敬请期待
        </p>

       
    </Content>
)


export default AboutPage;