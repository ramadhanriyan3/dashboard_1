const Pagination = () => {
  return (
    <div className="flex justify-between">
      <button className="bg-slate-200 rounded-sm text-black disabled:pointer-events-none py-1 px-2">
        Prev
      </button>
      <button className="bg-slate-200 rounded-sm text-black disabled:pointer-events-none py-1 px-2">
        Next
      </button>
    </div>
  );
};

export default Pagination;
