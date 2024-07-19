import React from 'react';
import ProductDetail from '../components/molecules/ProductDetail';

const product = {
  name: 'Paracetamol, Tramadol 325mg/37.5mg, 40 Tabletas Pharmalife',
  description: 'Descripción del producto',
  price: '149.47',
  note: '*Algunos medicamentos requieren receta'
};

const ProductDescriptionPage = () => {
  return (
    <>
      
      <main className="product-description-page">
        <ProductDetail product={product} />
        <div className="product-info">
          <div>
            <h3>Descripción del producto</h3>
            <p>Detalles adicionales del producto.</p>
          </div>
          <div>
            <h3>Instrucciones</h3>
            <p>Instrucciones del producto.</p>
          </div>
          <div>
            <h3>Advertencias</h3>
            <p>Advertencias del producto.</p>
          </div>
        </div>
      </main>

    </>
  );
};

export default ProductDescriptionPage;
