import PropTypes from 'prop-types'
import Product from './Product'
import '../styles/components/Products.css'

const Products = ({ products }) => (
  <div className='Products'>
    <div className='Products-items'>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </div>
)

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Products
