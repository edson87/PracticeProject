import * as React from 'react';

import createHistory from 'history/createBrowserHistory';
import list from '../../data/careers';
import './applyform.css'; 

export interface IPathProps {
  pathId: any;

}
export interface IApplyFormState {
  username: string;
  lastname: string;
  telephone: string;
  requeriment: string;
  email: string;
  file: any;
  message: string;
  picture: any;
}

export class ApplyForm extends React.PureComponent<IPathProps, IApplyFormState> {
  fileInput: any;
  filename: string;

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      picture: '',
      username: '', 
      lastname: '',
      telephone: '',
      requeriment: '',
      email: '',
      file: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    
  }
  
  handleChange(prop, e) { 
    const newState = e.target.value;
    this.setState({[prop]: newState});

  }

  goBack() {
    const history = createHistory();
    history.goBack();

  }

  redictHome() {
    const history = createHistory();
    history.push('/', location.reload());
 
  }  
  
  componentDidMount() { 
    const pathname = this.props.pathId; 
    const requeriment: any = list.find((x) =>  x.technology === pathname); 

    this.setState({ 
      requeriment: requeriment.title
    }); 

  } 

  insertDetail(file) {

    try {
    fetch('http://localhost:3000/application', {
    method: 'POST',
    headers: {
      Accept : 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: this.state.username,
      lastname: this.state.lastname,
      telephone: this.state.telephone,
      requeriment: this.state.requeriment,
      email: this.state.email,
      filename: file
    })
  });
    this.setState({
       message: `The file was sending`, 
    });
    setTimeout(this.redictHome, 3000);

    }catch (error) {
      this.setState({
        message: `An error was ocurred ${error.message}`
      });
     }    
  }

  uploadfiles() {
    const file = this.fileInput.files[0];
    const extension = file.name.split('.').pop();

    if (extension === 'zip' || extension === 'rar' || extension === 'doc' 
                  || extension === 'pdf' || extension === 'docx' || extension === 'txt') {
    const data = new FormData();
    data.append('avatar', this.fileInput.files[0]);
    data.append('user', 'hubot');

    fetch('http://localhost:3000/uploadFiles', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data'
      },
      body: data
    });
    this.insertDetail(file.name);

    }else {
      this.setState({
        message: `The format file is incompatible`
      });
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();  
    this.uploadfiles(); 
   
  }

  render() {
    return (
      <div id="applyForm"> 
        <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label className="marginLabel">Name</label>
                <input className="sizeInput" type="text" id="username" 
                      value={this.state.username} onChange={this.handleChange.bind(this, 'username')} required/> 
            </div>
            <div className="form-group">
              <label className="marginLabel">Lastname</label>
                <input className="sizeInput" type="text" id="lastname" 
                     value={this.state.lastname} onChange={this.handleChange.bind(this, 'lastname')} required/>     
            </div>
            <div className="form-group">
              <label className="marginLabel">Telephone</label>
                <input className="sizeInput" type="number" id="telephone" 
                  value={this.state.telephone} onChange={this.handleChange.bind(this, 'telephone')} required/>
            </div>
            <div className="form-group">
              <label className="marginLabel">To Apply</label>
                <input className="sizeInput" type="text" id="requeriment" 
                   value={this.state.requeriment} onChange={this.handleChange.bind(this, 'requeriment')} 
                   disabled={true} required />
            </div>
            <div className="form-group">
              <label className="marginLabel">Email</label>
                <input className="sizeInput" type="text" id="email"
                  value={this.state.email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" 
                  onChange={this.handleChange.bind(this, 'email')} required/>
            </div>
            <div className="form-group">
              <div className="uploadText">
                <span>Upload only .doc, .pdf, .rar, .zip formats</span>
              </div>	
              <input className="updateFile form-control-file" type="file" ref={x => this.fileInput = x} id="file" 
                onChange={this.handleChange.bind(this, 'file')} required/>   
              <br />
            </div>
            <div className="message">
              {this.state.message}					
            </div>
              <button className="btn btn-primary btn-form-back btn-lg active" 
                value="Submit" onClick={this.goBack}>Back</button>
              <button className="btn btn-primary btn-form-apply btn-lg active" 
                type="submit" value="Submit">Submit</button>
          </form>  
      </div> 
    );
  }
}

export default ApplyForm;
