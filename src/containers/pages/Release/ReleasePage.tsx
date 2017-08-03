import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Input } from '../../../components';
import './ReleasePage.css';
import { uploadProductImage, createProduct } from '../../../modules/product/actions';

import * as D from '../../../definitions';

const uploadImage = require('./arrow_up_upload.png');

type ReleasePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState,
  imageUrl: string,
};

interface State {
  name: string;
  price: string;
  description: string;
}

class ReleasePage extends React.Component<ReleasePageProps<object>, State> {
  constructor(props: ReleasePageProps<object>) {
    super(props);
    this.state = {
      name: '',
      price: '',
      description: ''
    };
  }

  handleImageChange = () => (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(uploadProductImage(
      e.target.files[0]
    ));
  }

  handleSubmit = (imageUrl) => (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(createProduct({
      name: this.state.name,
      price: this.state.price,
      img: imageUrl,
      description: this.state.description,
      }
    ));
  }

  onChangeState = (name) => (e) => {
    this.setState({[name]: e.target.value});
  }

  render() {
    const { imageUrl } = this.props;
    return (
      <div>
        {imageUrl.toString() !== "" ? <img className="preview-image" src={imageUrl.toString()} />:
          (<div className="image-upload">
             <label htmlFor="file-input">
               <p className="file-input-text">点击上传图片</p>
               <img src={uploadImage} className="upload-image"/>
             </label>
            <input id="file-input" className="file-input" type="file" onChange={this.handleImageChange()} />
        </div>)}
        <form onSubmit={this.handleSubmit(imageUrl)} className="release-form">
          <Input placeholder="商品名称" className="product-name" onChange={this.onChangeState('name')} />
          <Input placeholder="售价￥" className="product-price" onChange={this.onChangeState('price')} />
          <textarea className="product-description" defaultValue="添加描述..." onChange={this.onChangeState('description')}/>
          <button className="submit-button" type="submit" onClick={this.handleSubmit(imageUrl)}>
            开始出售
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  (state: D.RootState<object>) => ({
    user: state.user,
    imageUrl: state.products.imageUrl,
  })
)(ReleasePage);
