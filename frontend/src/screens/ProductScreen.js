import './ProductScreen.css';

const ProductScreen = () => {
  return (
    <div className='productscreen'>
      <div className='productscreen__left'>
        <div className='left__image'>
          <img
            src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            alt='product name'
          />
        </div>
        <div className='left__info'>
          <p className='left__name'>Product 1</p>
          <p>Price: $499.00</p>
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolores officiis, eos sed provident illo dolor?
          </p>
        </div>
      </div>
      <div className='productscreen__right'></div>
    </div>
  );
};

export default ProductScreen;
