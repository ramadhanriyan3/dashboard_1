const AddItem = () => {
  return (
    <div className="bg-soft1 mr-5 rounded-lg p-5">
      <form name="product-form" action="post" className="flex flex-col gap-5">
        <div className="flex justify-between gap-5 items-center">
          <div className="flex flex-col gap-3 justify-start w-full">
            <label htmlFor="title" className="font-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="outline-none bg-primary p-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-3 justify-start w-full">
            <label htmlFor="category" className="font-bold">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="outline-none bg-primary p-3 rounded-sm text-[18px]"
            >
              <option value="">Choose a category</option>
              <option value="electronic">Electronic</option>
              <option value="kitchen">Kitchen</option>
              <option value="gadget">Gadget</option>
              <option value="hoby">Hoby</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between gap-5 items-center">
          <div className="flex flex-col gap-3 justify-start w-full">
            <label htmlFor="price" className="font-bold">
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              className="outline-none bg-primary p-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-3 justify-start w-full">
            <label htmlFor="stock" className="font-bold">
              Stock
            </label>
            <input
              type="text"
              name="stock"
              id="stock"
              placeholder="Stock"
              className="outline-none bg-primary p-3 rounded-sm"
            />
          </div>
        </div>
        <div className="flex justify-between gap-5 items-center">
          <div className="flex flex-col gap-3 justify-start w-full">
            <label htmlFor="color" className="font-bold">
              Color
            </label>
            <input
              type="text"
              name="color"
              id="color"
              placeholder="Price"
              className="outline-none bg-primary p-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-3 justify-start w-full">
            <label htmlFor="size" className="font-bold">
              Size
            </label>
            <input
              type="text"
              name="size"
              id="size"
              placeholder="Size"
              className="outline-none bg-primary p-3 rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="description" className="font-bold">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="outline-none bg-primary p-3 rounded-sm"
          ></textarea>
        </div>
        <button className="bg-teal-400 font-bold text-lg text-white p-3 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
