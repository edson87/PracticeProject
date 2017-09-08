import * as React from 'react';

import { MenuGlobal } from '../../MenuGlobal';
import { Footer } from '../../Footer';
import './detailform.css';

export interface IDetailFormState {
  postulation: string;
  title: string;
  location: string;
  time: string;
  showDetail: Array<any>;
  detail: string;
}
export class DetailForm extends React.PureComponent<{}, IDetailFormState> {

  constructor(props) {
    super(props);

    this.state = {
      postulation: '',
      title: '',
      location: '',
      time: '',
      showDetail: [],
      detail: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/requeriments')
     .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        showDetail: responseJson
      });
    });  
  } 
  
  deleteRequeriments(e) {
    fetch(`http://localhost:3000/requeriment/${e}`, {
        method: 'POST',
        headers: {
        'X-My-Custom-Header' : 'CustomValue',
        'Content-Type': 'text/plain',
    },
    body: JSON.stringify({
      id: e
    })
  }); 
  setTimeout(location.reload(), 2000);
  }

  handleChange(prop, e) {
    const newState = e.target.value;
    this.setState({[prop]: newState});

  }

  insertRequeriments() {
      fetch('http://localhost:3000/requeriment', {
    method: 'POST',
    headers: {
      Accept : 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: this.state.title,
      postulation: this.state.postulation,
      location: this.state.location,
      time: this.state.time,
      detail: this.state.detail
    })
  });
      
  }

  handleSubmit(e) {
    e.preventDefault();
    this.insertRequeriments();
    this.setState({title: '', postulation: '', location: '', time: '', detail: ''});
    setTimeout(location.reload(), 3000);
  }

  render() {
    return (
      <div id="detail">
        <MenuGlobal />
        <div className="detail-title">
          <h2>Requeriment !</h2>
        </div>  
        <section className="detail-form">     
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label detail-label">Type Requeriment </label>
              <div className="col-sm-6 detail-input">
                <input className="" type="text" value={this.state.title} 
                    onChange={this.handleChange.bind(this, 'title')}/> 
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label detail-label" >Job to apply </label>
              <div className="col-sm-6 detail-input">
                <select className="detail-select" value={this.state.postulation} 
                                  onChange={this.handleChange.bind(this, 'postulation')} >
                  <option value="0">Select a field</option>
                  <option value="1">Grapefruit</option>
                  <option value="2">Asp.Net</option>
                  <option value="3">Sql-Server</option>
                  <option value="4">Mongo</option>
                  <option value="5">Html</option>
                  <option value="6">Css</option>
                  <option value="7">JavaScript</option>
                  <option value="8">ReactJs</option>
                  <option value="9">Ionic</option>
                  <option value="10">Angular</option>
                  <option value="11">Apple</option>
                  <option value="12">Android</option>
                  <option value="13">Windows</option>
                  <option value="14">Xamarin</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label detail-label" >Location </label>
              <div className="col-sm-6 detail-input">
                <input className="" type="text" value={this.state.location} 
                    onChange={this.handleChange.bind(this, 'location')} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label detail-label" >Time </label>
              <div className="col-sm-6 detail-input">
                <input className="" type="text" value={this.state.time} 
                     onChange={this.handleChange.bind(this, 'time')} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label detail-label" >Requeriments</label>
              <div className="col-sm-6 detail-input">
                <textarea className="detail-textArea" value={this.state.detail} 
                     onChange={this.handleChange.bind(this, 'detail')} />
              </div>
            </div>	
            <button className="btn btn-primary btn-form-apply btn-lg active" type="submit" 
                value="Submit">Submit</button> 
          </form>
          {/*<div className="row">*/}

          <div className=" technologies-opened">
            <h3>Type of postulation opened</h3>
            <table className="table-detail">
              <tbody>
                  <tr>
                    <td className="table-title"><strong>Type Requeriment</strong></td>
                    {/* <td className="table-title"><strong>postulation</strong></td> */}
                    <td className="table-title"><strong>Location</strong></td>
                    <td className="table-title"><strong>Time</strong></td>
                    <td className="table-title" />
                  </tr>
            {this.state.showDetail && this.state.showDetail.map((item, key) => {
                return(
                  <tr key={key}>
                    <td>{item.title}</td>
                    {/* <td>{item.postulation}</td> */}
                    <td>{item.location}</td>
                    <td>{item.time}</td> 
                    <td><button type="button" value={item.id} onClick={this.deleteRequeriments.bind(this, item.id)}>
                       Delete</button></td>  
                  </tr>  
                );
              }
            )}
              </tbody>
            </table>
          </div>
      {/*    </div>*/}
        </section>
        <div>
          <Footer/>
        </div>
      </div> 
    );
  }
}

export default DetailForm;
