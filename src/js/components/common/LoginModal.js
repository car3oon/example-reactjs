import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class LoginModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <RaisedButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleClose}
                />,
        ];

        return (
            <div>
                <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Login"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    contentStyle={styles.dialog}
                    >
                    <div style={styles.container}>
                        <TextField
                            hintText="Enter your login"
                            floatingLabelText="Login"
                            style={styles.input}
                            /><br />
                        <TextField
                            hintText="Enter password"
                            floatingLabelText="Password"
                            style={styles.input}
                            type="password"
                            />
                    </div>
                </Dialog>
            </div>
        );
    }
}

var styles = {
    container: {
        textAlign: 'center'
    },
    dialog: {
        width: '480px'
    },
    input: {
        width: '100%'
    }
};
