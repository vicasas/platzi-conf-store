import PropTypes from 'prop-types'

const Product = ({ product }) => (
  <div className='Products-item'>
    <img src={product.image} alt={product.title} />
    <div className='Product-item-info'>
      <h2>
        {product.title}
        <span>$ {product.price}</span>
      </h2>
      <p>{product.description}</p>
    </div>
    <button type='button'>Comprar</button>
  </div>
)

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default Product
