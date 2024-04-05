const ProductById = ({ params }: { params: { id: string } }) => {
  return <div>{`This is Product No ${params.id}`}</div>;
};

export default ProductById;
