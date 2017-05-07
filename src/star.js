import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import fb from './fb';


class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      comment: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit .bind(this);
    }
 handleInput(event){
   this.setState({
     comment: event.target.value
   })
 }
 handleSubmit(){
    fb.ref('comment').push().set({rating: this.state.rating, comment: this.state.comment});
    // var self = this;
    // fb.ref('comment/').once('value')
    // .then(function(snapshot){
    //   var a = snapshot.val();
    //   var comment = Object.keys(a).map(function(x){return a[x] });
    //   self.setState({
    //     rating: comment.rating,
    //     comment: comment.comment
    //   })
    // });
 }
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
      <StarRatingComponent
      name="rate1"
      starCount={5}
      value={rating}
      onStarClick={this.onStarClick.bind(this)}
      />
      <input value={this.state.comment} onChange={this.handleInput} type="text"  className="form-control" placeholder="Comments" />
      <button  onClick={this.handleSubmit} className="btn btn-success" type="button">Submit</button>
      </div>
    );
  }
}

export default FormComponent;
