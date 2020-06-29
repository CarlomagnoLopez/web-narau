import React from 'react';
import ImageUploader from 'react-images-upload';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import "../css/stylesGlobalOverRide.css"
import logo_login from '../assets/logos-narau-04.png';

export default class ImageUpload extends React.Component {
    // class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            // pictures: this.state.pictures.concat(picture),
            pictures: picture
        });

        this.props.saveImage();
    }

    render() {
        return (
            <ImageUploader
                singleImage={true}
                withIcon={false}
                withPreview={true}
                withLabel={false}
                className="imageUpload"
                buttonText={
                    // <IconButton >
                    <EditIcon classes={{ root: "editImage" }} />

                    // </IconButton>
                }
                onChange={this.onDrop}
                // fileSizeError={"la imagen es demasido grande"}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}