import React from 'react';
import ReactDOM from 'react-dom';

import Photos from '../photos/user/parts/App.jsx';
import Desc from '../description/client/App.jsx';
import Pledges from '../pledges/src/components/App.jsx';
import NavBar from '../description/client/components/NavBar.jsx';

const Main = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div id="photos-react">
                <Photos data={this.props.data} />
            </div>
            <div id="navbar-main">
                <NavBar />
            </div>
            <br />
            <div>
                <div id="description-main">
                    <Desc id={this.props.id} />
                </div>
                <div id="pledges">
                    <Pledges id={this.props.id} />
                </div>
            </div>
        </div>;
    }
}

let id = new URLSearchParams(window.location.search).get('id') || 1;
fetch('/api/photos/' + id)
    .then(x => x.json())
    .then(function (data) {
        ReactDOM.render(<Main data={data} id={id} />, document.getElementById('react'));
    });