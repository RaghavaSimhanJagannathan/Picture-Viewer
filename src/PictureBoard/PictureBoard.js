import './PictureBoard.css';
import Picture from '../Picture/Picture';
import React,{Component} from 'react';

class PictureBoard extends Component{
    state= {
        Pictures: [
            // {name:'Goku', url:'https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg',alt:'g1'},
            // {name:'Flower', url:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',alt:'f1'},
            // {name:'Vegeta', url:'https://vignette.wikia.nocookie.net/dragonball/images/a/a1/Vegeta-manga.jpg/revision/latest?cb=20170822020417',alt:'v1'},
            // {name:'Flower', url:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',alt:'f2'},
            // {name:'Flower', url:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',alt:'f3'},       
            // {name:'Goku', url:'https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg',alt:'g2'},
            // {name:'Vegeta', url:'https://vignette.wikia.nocookie.net/dragonball/images/a/a1/Vegeta-manga.jpg/revision/latest?cb=20170822020417',alt:'v2'},
            // {name:'Flower', url:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',alt:'f4'},
            // {name:'Vegeta', url:'https://vignette.wikia.nocookie.net/dragonball/images/a/a1/Vegeta-manga.jpg/revision/latest?cb=20170822020417',alt:'v3'},
            // {name:'Goku', url:'https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg',alt:'g3'},
            // {name:'Vegeta', url:'https://vignette.wikia.nocookie.net/dragonball/images/a/a1/Vegeta-manga.jpg/revision/latest?cb=20170822020417',alt:'v4'},
            // {name:'Vegeta', url:'https://vignette.wikia.nocookie.net/dragonball/images/a/a1/Vegeta-manga.jpg/revision/latest?cb=20170822020417',alt:'v5'},
            // {name:'Flower', url:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',alt:'f5'},
        ],
        PicCount: 0
    };


    
    handleAdd = () =>{
        const tempPic= this.props.added();
        const picture=[...this.state.Pictures,...tempPic];
        const picCount=this.state.PicCount+1;
        this.setState({
            Pictures:picture,
            PicCount:picCount
        }
        );
        // console.log(picture);
        

    }

        render(){
            
            console.log(this.state);
            let pictures= (
                this.state.Pictures.map(picture =>{
                    return <Picture name={picture.name}
                    url={picture.url}
                    alt={picture.alt}
                    key={picture.alt}
                    // key={this.state.PicCount}
                    />
                     
                })
            );
            return <div className="PictureBoard">
            <button id="addButton" onClick={this.handleAdd}  >Add</button>
            { pictures }
            </div>
        }

}


export default PictureBoard;