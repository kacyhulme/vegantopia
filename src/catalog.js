import React from 'react';
import Product from './product';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [
      { id: 1, name: 'Vegan Shirt', price: '$2' },
      { id: 2, name: 'Vegan Pants', price: '$5' },
      { id: 2, name: 'Vegan Shoes', price: '$15' },
      { id: 2, name: 'Vegan Bags', price: '$25' },
      { id: 2, name: 'Vegan Rugs', price: '$145' },
      { id: 2, name: 'Vegan Sheets', price: '$55' },
      { id: 2, name: 'Vegan Jackets', price: '$25' },
      { id: 2, name: 'Vegan Hats', price: '$15' },
      { id: 2, name: 'Vegan Towels', price: '$15' },
      { id: 2, name: 'Vegan Baby clothes', price: '$25' }
      ]
    };
  }

 componentDidMount() {
    // fetch("https://api.example.com/items")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
          this.setState({
            isLoaded: true,
            products: this.state.products
          });
        // },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
   }    
  }

  render() {
    const { error, isLoaded, products } = this.state;
    const listProducts = products.map((product) =>
      <div>
      <Product product={product}/>
      </div>

      );

    if(error) {
      return<div>ERROR</div>;
    } else if (!isLoaded) {
      return<div>Loading...</div>;
    } else {

      return(
        <div>
        <h4>Catalog</h4>
        <div>{listProducts}</div>
        </div>
        );
    }
  }
}

export default Catalog;