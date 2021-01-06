import React, {Component} from 'react';
import {connect} from 'react-redux';
import pstore from '../index';

class PersistForm extends Component{
    check = {
        margin:"5px 0px"
    }

    label = {
        fontSize:"12pt",
        color:"#006",
        padding:"2px 10px"
    }

    constructor(props){
        super(props);
        this.state = {
            check: 'on',
        }
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        let f = e.target.checked;
        this.setState({
            check: f ? 'on': ''
        });

        if (f){
            // 停止した永続化処理を再開する
            pstore.persist();
            // 保留になっている変更を反映させる
            pstore.flush();
        } else{
            // 永続化処理を停止する
            pstore.pause();
        }
    }

    render(){
        return (
            <div>
                <label style= {this.label}>
                <input type='checkbox' id="check" size="40" onChange={this.doChange} />
                Persist
                </label>
            </div>
        );   
    }
}

export default connect((state)=>state)(PersistForm);